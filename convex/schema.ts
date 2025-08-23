import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  profiles: defineTable({
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
    // Fields for DIS
    commitTimestamps: v.optional(v.array(v.number())),
    mergedPrTimestamps: v.optional(v.array(v.number())),
    starTimestamps: v.optional(v.array(v.number())),
    prMerged: v.optional(v.number()),
    prTotal: v.optional(v.number()),
    issuesClosed: v.optional(v.number()),
    languageBreadth: v.optional(v.number()),
    score: v.optional(v.number()),
    story: v.optional(v.string()),
    error: v.optional(v.string()),
    // Keep old fields for now
    commits: v.number(),
    usesConvex: v.boolean(),
  }).index("by_login", ["login"]),
});
