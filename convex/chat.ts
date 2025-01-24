import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { OpenAI } from "openai";
import { ConvexError } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";

// Define the message type
type Message = {
  role: "user" | "assistant" | "system";
  text: string;
};

export const sendMessage = mutation({
  args: {
    message: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    // Store the user's message
    const userMessage = await ctx.db.insert("messages", {
      text: args.message,
      role: "user",
      userId: args.userId,
      createdAt: Date.now(),
    });

    // Initialize OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Get chat history
    const messages = await ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("asc")
      .take(100);

    const formattedMessages: Message[] = messages.map((msg) => ({
      role: msg.role as "user" | "assistant" | "system",
      text: msg.text,
    }));

    // Get OpenAI response
    const completion = await openai.chat.completions.create({
      messages: formattedMessages.map((msg) => ({
        role: msg.role,
        content: msg.text,
      })),
      model: "gpt-3.5-turbo",
    });

    // Store the AI's response
    const aiMessage = await ctx.db.insert("messages", {
      text: completion.choices[0].message.content ?? "",
      role: "assistant",
      userId: args.userId,
      createdAt: Date.now(),
    });

    return aiMessage;
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
