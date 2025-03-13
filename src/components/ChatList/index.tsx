import { useState } from "react";
import { Message } from "../../models/Message";
import { MessageInput } from "../MessageInput";
import { ChatMessage } from "../ChatMessage";
import { useNavigate } from "react-router";

export function ChatList() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      userId: "typeface.io",
      timestamp: "12:44:52",
      message: "How are you ? Happy Holi :)",
    },
  ]);
  const appendMessage = (message: Message) => {
    console.log(messages);
    setMessages([...messages, message]);
  };

  return (
    <div className="chat">
      <div className="new-chat__button">
        <button
          onClick={() => {
            navigate("/chat/new");
          }}
        >
          Create New
        </button>
      </div>
      <div className="chat-list">
        {messages.map((message) => {
          return <ChatMessage message={message} />;
        })}
      </div>
      <MessageInput appendMessage={appendMessage} />
    </div>
  );
}
