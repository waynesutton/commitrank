import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Doc } from "./_generated/dataModel";

export const storeProfile = mutation({
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
    commits: v.number(),
    usesConvex: v.boolean(),
  },
  handler: async (ctx, profile) => {
    // Check if profile already exists
    const existing = await ctx.db
      .query("profiles")
      .filter((q) => q.eq(q.field("login"), profile.login))
      .first();

    if (existing) {
      // Update existing profile
      return await ctx.db.patch(existing._id, profile);
    }

    // Create new profile
    return await ctx.db.insert("profiles", profile);
  },
});

export const getProfiles = query({
  args: {},
  handler: async (ctx): Promise<Doc<"profiles">[]> => {
    return await ctx.db.query("profiles").collect();
  },
});
