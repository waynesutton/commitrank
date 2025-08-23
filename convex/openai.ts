"use node";
import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import OpenAI from "openai";
import { Doc } from "./_generated/dataModel";
import { internal } from "./_generated/api";

export const generateStory = internalAction({
  args: {
    profileId: v.id("profiles"),
    name: v.string(),
    login: v.string(),
    bio: v.string(),
    score: v.number(),
  },
  handler: async (ctx, { profileId, name, login, bio, score }) => {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const prompt = `
      Create a short, creative "tale" about a GitHub developer.
      Imagine them as a character in a fantasy world.
      Their name is ${name} (@${login}).
      Their bio says: "${bio}".
      They have a Developer Impact Score of ${score.toFixed(2)}.
      This score is based on things like their recent commits, pull requests, followers, and language breadth.
      A high score means they are a very active and impactful developer.

      Weave these details into a fun, epic-sounding story.
      Keep it to 2-3 short paragraphs.
      Make it sound like a bard telling a legend.
      For example: "In the digital realms of Code-Earth, there lived a sorcerer known as..."
    `;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 250,
      });

      const story = response.choices[0].message.content;

      if (story) {
        await ctx.runMutation(internal.profiles.updateProfileStory, {
          profileId: profileId,
          story,
        });
      }
    } catch (error) {
      console.error("Error generating story from OpenAI:", error);
    }
  },
});
