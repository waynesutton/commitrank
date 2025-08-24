import {
  internalAction,
  internalMutation,
  internalQuery,
  mutation,
  query,
} from "./_generated/server";
import { v } from "convex/values";
import { Doc, Id } from "./_generated/dataModel";
import { internal } from "./_generated/api";
import { paginationOptsValidator } from "convex/server";

export const generateStory = mutation({
  args: {
    profileId: v.id("profiles"),
  },
  handler: async (ctx, { profileId }) => {
    const profile = await ctx.db.get(profileId);
    if (!profile) {
      throw new Error("Profile not found");
    }
    // Only generate a story if one doesn't exist and the score has been calculated.
    if (
      !profile.story &&
      profile.score !== undefined &&
      profile.score !== null
    ) {
      // Pass a serializable object to the action, not the full Doc.
      await ctx.scheduler.runAfter(0, internal.openai.generateStory, {
        profileId: profile._id,
        name: profile.name,
        login: profile.login,
        bio: profile.bio ?? "",
        score: profile.score,
      });
    }
  },
});

export const rankProfile = mutation({
  args: {
    login: v.string(),
  },
  handler: async (ctx, { login }) => {
    await ctx.scheduler.runAfter(0, internal.github.fetchAndScoreProfile, {
      login,
    });
  },
});

export const storeBasicProfile = internalMutation({
  args: {
    login: v.string(),
    name: v.string(),
    avatar_url: v.string(),
    bio: v.string(),
    public_repos: v.number(),
    followers: v.number(),
    following: v.number(),
    html_url: v.string(),
    twitter_username: v.optional(v.string()),
    blog: v.optional(v.string()),
    location: v.optional(v.string()),
  },
  handler: async (ctx, profile) => {
    const existing = await ctx.db
      .query("profiles")
      .withIndex("by_login", (q) => q.eq("login", profile.login))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, profile);
    } else {
      await ctx.db.insert("profiles", {
        ...profile,
        commits: 0,
        usesConvex: false,
      });
    }
  },
});

export const storeProfileMetrics = internalMutation({
  args: {
    login: v.string(),
    name: v.string(),
    avatar_url: v.string(),
    bio: v.string(),
    public_repos: v.number(),
    followers: v.number(),
    following: v.number(),
    html_url: v.string(),
    twitter_username: v.optional(v.string()),
    blog: v.optional(v.string()),
    location: v.optional(v.string()),
    commitTimestamps: v.array(v.number()),
    mergedPrTimestamps: v.array(v.number()),
    starTimestamps: v.array(v.number()),
    prMerged: v.number(),
    prTotal: v.number(),
    issuesClosed: v.number(),
    languageBreadth: v.number(),
    usesConvex: v.boolean(),
    // Keep old field for now
    commits: v.number(),
  },
  handler: async (ctx, profile) => {
    const existing = await ctx.db
      .query("profiles")
      .withIndex("by_login", (q) => q.eq("login", profile.login))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, profile);
    } else {
      await ctx.db.insert("profiles", profile);
    }
  },
});

export const updateProfileScore = internalMutation({
  args: {
    profileId: v.id("profiles"),
    score: v.number(),
  },
  handler: async (ctx, { profileId, score }) => {
    await ctx.db.patch(profileId, { score });
  },
});

export const updateProfileStory = internalMutation({
  args: {
    profileId: v.id("profiles"),
    story: v.string(),
  },
  handler: async (ctx, { profileId, story }) => {
    await ctx.db.patch(profileId, { story });
  },
});

export const storeProfileError = internalMutation({
  args: {
    login: v.string(),
    error: v.string(),
  },
  handler: async (ctx, { login, error }) => {
    const existing = await ctx.db
      .query("profiles")
      .withIndex("by_login", (q) => q.eq("login", login))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, { error });
    } else {
      // This case is unlikely if rankProfile is called first, but handled for safety.
      await ctx.db.insert("profiles", {
        login,
        error,
        // Fill in required fields with placeholder data
        name: login,
        avatar_url: "",
        bio: "",
        public_repos: 0,
        followers: 0,
        following: 0,
        html_url: `https://github.com/${login}`,
        commits: 0,
        usesConvex: false,
      });
    }
  },
});

export const getProfiles = query({
  args: {},
  handler: async (ctx): Promise<Doc<"profiles">[]> => {
    return await ctx.db.query("profiles").order("desc").take(1000);
  },
});

export const getProfilesToBackfill = internalQuery({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("profiles")
      .filter((q) =>
        q.and(
          q.eq(q.field("score"), undefined),
          q.eq(q.field("error"), undefined),
        ),
      )
      .order("desc")
      .paginate(args.paginationOpts);
  },
});

export const backfillScores = internalAction({
  args: {},
  handler: async (ctx) => {
    console.log("Kicking off sequential backfill process...");
    await ctx.scheduler.runAfter(0, internal.profiles.processBackfillBatch, {
      cursor: null,
    });
  },
});

export const processBackfillBatch = internalAction({
  args: { cursor: v.union(v.string(), v.null()) },
  handler: async (ctx, { cursor }) => {
    const BATCH_SIZE = 5;
    console.log(`Processing backfill batch starting with cursor: ${cursor}`);

    const { page, isDone, continueCursor } = await ctx.runQuery(
      internal.profiles.getProfilesToBackfill,
      {
        paginationOpts: { numItems: BATCH_SIZE, cursor: cursor },
      },
    );

    console.log(`Found ${page.length} profiles in this batch.`);

    for (const profile of page) {
      console.log(`Scheduling score calculation for profile: ${profile.login}`);
      await ctx.scheduler.runAfter(0, internal.github.fetchAndScoreProfile, {
        login: profile.login,
      });
      // Wait 2 seconds between each profile to be extra safe with rate limits
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (!isDone) {
      console.log(
        `Batch complete. Scheduling next batch with cursor: ${continueCursor}`,
      );
      await ctx.scheduler.runAfter(0, internal.profiles.processBackfillBatch, {
        cursor: continueCursor,
      });
    } else {
      console.log("Backfill process complete. All batches processed.");
    }
  },
});

export const getAllProfiles = internalQuery({
  args: {},
  handler: async (ctx): Promise<Doc<"profiles">[]> => {
    return await ctx.db.query("profiles").collect();
  },
});

export const clearAllProfileErrors = internalMutation({
  args: {},
  handler: async (ctx) => {
    console.log("Starting to clear errors from all profiles...");
    const profiles = await ctx.db.query("profiles").collect();

    let clearedCount = 0;
    for (const profile of profiles) {
      if (profile.error) {
        await ctx.db.patch(profile._id, { error: undefined });
        clearedCount++;
      }
    }

    console.log(`Cleared errors from ${clearedCount} profiles.`);
  },
});
