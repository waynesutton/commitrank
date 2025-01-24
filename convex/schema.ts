import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    text: v.string(),
    role: v.string(), // "user" or "assistant"
    createdAt: v.number(),
    userId: v.string(),
  }),
});
