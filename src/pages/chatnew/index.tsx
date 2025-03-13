import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ChatNew() {
  const navigate = useNavigate();

  useEffect(() => {
    const chatId = Math.floor(Math.random() * (100000 - 1)) + 1;
    navigate("/chat/" + chatId.toString());
  }, []);

  return <div>Loading....</div>;
}
