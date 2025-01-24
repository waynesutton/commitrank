import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/clerk-react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const { user, isLoaded } = useUser();
  const messages = useQuery(api.chat.getMessages, isLoaded && user ? { userId: user.id } : "skip");
  const sendMessage = useMutation(api.chat.sendMessage);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    const messageText = message.trim();
    setMessage("");

    try {
      await sendMessage({
        message: messageText,
        userId: user.id,
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessage(messageText);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4 mb-4">
        {messages?.map((msg, index) => (
          <div
            key={msg._id}
            className={`p-2 rounded ${msg.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Type your message..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
