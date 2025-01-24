import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { OpenAI } from "openai";
import { ConvexError } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const sendMessage = internalMutation({
  args: { message: v.string(), userId: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      text: args.message,
      role: "user",
      createdAt: Date.now(),
      userId: args.userId,
    });

    const messages = await ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("asc")
      .collect();

    const formattedMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.text,
    }));

    const completion = await openai.chat.completions.create({
      messages: formattedMessages,
      model: "gpt-3.5-turbo",
    });

    const aiResponse = completion.choices[0].message.content;

    await ctx.db.insert("messages", {
      text: aiResponse ?? "Sorry, I couldn't process that.",
      role: "assistant",
      createdAt: Date.now(),
      userId: args.userId,
    });

    return aiResponse;
  },
});

export const getMessages = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .take(100);

    return messages.reverse();
  },
});
