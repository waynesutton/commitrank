import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    text: v.string(),
    role: v.string(), // "user" or "assistant"
    createdAt: v.number(),
    userId: v.string(),
  }).index("by_userId", ["userId"]),
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
    commits: v.number(),
    usesConvex: v.boolean(),
  }).index("by_login", ["login"]),
});
