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
    commits: v.float64(),
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

    // Create system prompt with profile context
    const systemPrompt: Message = {
      role: "system",
      text: `You are an AI assistant analyzing a GitHub developer's profile. The developer has ${args.commits.toLocaleString()} total commits${args.usesConvex ? " and uses Convex in their projects" : ""}. 
      
Your role is to:
1. Answer questions about their commit history and development patterns
2. Provide insights about their coding journey based on their commit count
3. Discuss their technical expertise and potential areas of focus
4. Be friendly and engaging while maintaining technical accuracy

Current developer stats:
- Total Commits: ${args.commits.toLocaleString()}
- Uses Convex: ${args.usesConvex ? "Yes" : "No"}
- Rank: ${
        args.commits >= 100000
          ? "Overload (100,000+ commits)"
          : args.commits >= 10000
            ? "Hacker (10,000+ commits)"
            : args.commits >= 5000
              ? "Wizard (5,000+ commits)"
              : args.commits >= 1000
                ? "Samurai (1,000+ commits)"
                : args.commits >= 10
                  ? "Noob (10-999 commits)"
                  : "Explorer (<10 commits)"
      }`,
    };

    const formattedMessages: Message[] = [
      systemPrompt,
      ...messages.map((msg: DbMessage) => ({
        role: msg.role as "user" | "assistant" | "system",
        text: msg.text,
      })),
    ];

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
        .withIndex("by_userId", (q) => q.eq("userId", args.userId))
        .order("desc")
        .take(100);

      return messages.reverse();
    } catch (error) {
      console.error("Error fetching messages:", error);
      throw error;
    }
  },
});
