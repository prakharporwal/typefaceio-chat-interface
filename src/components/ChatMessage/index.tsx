import { Message } from "../../models/Message";
import "./style.css";

interface IChatMessageProps {
  message: Message;
}

export function ChatMessage(props: IChatMessageProps) {
  const { userId, message, timestamp } = props.message;
  return (
    <div className="chat-message">
        {/* for styling the box only */}
        <div className="edge"></div>
      <div className="user-id">{userId}</div>
      <div className="message-text">{message}</div>
      <div className="timestamp">{timestamp}</div>
    </div>
  );
}
