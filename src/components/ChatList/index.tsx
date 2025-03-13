import { useState } from "react";
import { Message } from "../../models/Message";
import { MessageInput } from "../MessageInput";
import { ChatMessage } from "../ChatMessage";

export function ChatList() {
  const [messages, setMessages] = useState<Message[]>([
    {
      userId: "typeface.io",
      timestamp: "12:44:52",
        message: "How are you ?",
    },
    {
      userId: "typeface.io",
      timestamp: "12:44:53",
      message: "I am fine",
    },
    {
      userId: "typeface.io",
      timestamp: "12:44:52",
      message: "Who is the user?",
    },
    {
      userId: "typeface.io",
      timestamp: "12:44:53",
      message: "typeface. They are hiring!!",
    },
    {
        userId: "typeface.io",
        timestamp: "12:44:53",
        message: "BTW. Happy Holi!",
      },
  ]);
  const appendMessage = (message: Message) => {
    console.log(messages);
    setMessages([...messages, message]);
  };

  return (
      <div className="chat">
    <div className="chat-list">
        {messages.map((message) => {
          return <ChatMessage message={message} />;
        })}
      </div>
      <MessageInput appendMessage={appendMessage} />
    </div>
  );
}
