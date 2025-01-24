import React, { useState } from "react";
import { Send, Bot } from "lucide-react";
import { GitHubProfile } from "../types";
import { useAction, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Doc } from "../../convex/_generated/dataModel";

interface Message {
  text: string;
  isAI: boolean;
}

interface ChatBoxProps {
  profile: GitHubProfile;
  commits: number;
  usesConvex: boolean;
}

type DbMessage = Doc<"messages">;

export default function ChatBox({ profile, commits, usesConvex }: ChatBoxProps) {
  const [input, setInput] = useState("");
  const sendMessage = useAction(api.chat.sendMessage);
  const messages = useQuery(api.chat.getMessages, { userId: profile.name }) || [];
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    try {
      await sendMessage({
        message: input.trim(),
        userId: profile.name,
        commits,
        usesConvex,
      });
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formattedMessages = messages.map((msg: DbMessage) => ({
    text: msg.text,
    isAI: msg.role === "assistant",
  }));

  return (
    <div className="mt-6 border rounded-lg overflow-hidden bg-white">
      <div className="p-4 bg-gray-50 border-b">
        <div className="flex items-center gap-2 text-gray-700">
          <Bot size={20} />
          <h3 className="font-semibold">Chat with the commits</h3>
        </div>
      </div>

      <div className="h-64 overflow-y-auto p-4 space-y-4">
        {formattedMessages.map((message: Message, index: number) => (
          <div key={index} className={`flex ${message.isAI ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isAI ? "bg-gray-100 text-gray-800" : "bg-[#222222] text-white"
              }`}>
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about this developer's commits..."
            className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#222222] focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] disabled:opacity-50 transition-colors">
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
