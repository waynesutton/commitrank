import { mutation, query, action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { OpenAI } from "openai";
import { ConvexError } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { Doc } from "./_generated/dataModel";

// Define the message type
type Message = {
  role: "user" | "assistant" | "system";
  text: string;
};

type DbMessage = Doc<"messages">;

export const storeMessage = mutation({
  args: {
    text: v.string(),
    role: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args): Promise<DbMessage> => {
    const id = await ctx.db.insert("messages", {
      text: args.text,
      role: args.role,
      userId: args.userId,
      createdAt: Date.now(),
    });
    const message = await ctx.db.get(id);
    if (!message) throw new Error("Failed to store message");
    return message;
  },
});

export const sendMessage = action({
  args: {
    message: v.string(),
    userId: v.string(),
    commits: v.number(),
    usesConvex: v.boolean(),
  },
  handler: async (ctx, args): Promise<DbMessage> => {
    // Store the user's message
    await ctx.runMutation(api.chat.storeMessage, {
      text: args.message,
      role: "user",
      userId: args.userId,
    });

    // Initialize OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    // Get chat history
    const messages = await ctx.runQuery(api.chat.getMessages, { userId: args.userId });

    const formattedMessages: Message[] = messages.map((msg: DbMessage) => ({
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
    return await ctx.runMutation(api.chat.storeMessage, {
      text: completion.choices[0].message.content ?? "",
      role: "assistant",
      userId: args.userId,
    });
  },
});

export const getMessages = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args): Promise<DbMessage[]> => {
    try {
      const messages = await ctx.db
        .query("messages")
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .order("desc")
        .take(100);

      return messages.reverse();
    } catch (error) {
      console.error("Error fetching messages:", error);
      throw error;
    }
  },
});
