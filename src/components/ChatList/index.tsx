import { useState } from "react";
import { Message } from "../../models/Message";
import { MessageInput } from "../MessageInput";
import { ChatMessage } from "../ChatMessage";
import { useNavigate, useParams } from "react-router";

export function ChatList() {
  const navigate = useNavigate();
  const params = useParams();
  const [messages, setMessages] = useState<Message[]>([
    {
      userId: "typeface.io",
      timestamp: "12:44:52",
      message: "How are you ? Happy Holi :) || Chat Id is: " + params.id,
    },
  ]);
  const appendMessage = (message: Message) => {
    setMessages([...messages, message]);
  };

  const deleteMessage = (id: number) => {
    const newMessages = messages.filter((message, i) => i !== id);
    setMessages(newMessages);
  };

  return (
    <div className="chat">
      <div className="new-chat__button">
        <button
          onClick={() => {
            navigate("/chatnew");
          }}
        >
          Create New
        </button>
      </div>
      <div className="chat-list">
        {messages.map((message, i) => {
          return (
            <ChatMessage
              key={i}
              message={message}
              msgId={i}
              deleteMessage={deleteMessage}
            />
          );
        })}
      </div>
      <MessageInput appendMessage={appendMessage} />
    </div>
  );
}
