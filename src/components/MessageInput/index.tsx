import { useState } from "react";
import { Message } from "../../models/Message";

interface IMessageInput {
  appendMessage: (message: Message) => void;
}

export function MessageInput(props: IMessageInput) {
  const [messageText, setMessageText] = useState<string>("");

  return (
    <form className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={messageText}
        onInput={(e) => {
          setMessageText(e.currentTarget.value);
        }}
      />
      <button
      type="submit"
        onClick={(e) => {
          if (messageText) {
            props.appendMessage({
              userId: "typeface.io",
              timestamp: new Date().toLocaleTimeString(),
              message: messageText.trim(),
            });
            setMessageText("");
          }
          e.preventDefault();
        }}
      >
        Send
      </button>
    </form>
  );
}
