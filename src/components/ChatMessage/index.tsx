import { Message } from "../../models/Message";
import "./style.css";

interface IChatMessageProps {
  key: number;
  message: Message;
  msgId: number;
  deleteMessage: (id: number) => void;
}

export function ChatMessage(props: IChatMessageProps) {
  const { userId, message, timestamp } = props.message;
  return (
    <div className="chat-message">
      <button
        className="delete-button"
        onClick={() => {
          if (window.confirm("Delete Message ?")) props.deleteMessage(props.msgId);
        }}
      >
        X
      </button>
      {/* for styling the box only */}
      <div className="user-id">{userId}</div>
      <div className="message-text">{message}</div>
      <div className="timestamp">{timestamp}</div>
    </div>
  );
}
