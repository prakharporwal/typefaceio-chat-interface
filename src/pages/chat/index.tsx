import { useLocation } from "react-router";
import { ChatList } from "../../components/ChatList";

export default function Chat() {
  const params = useLocation();
  console.log(params);
  return <ChatList />;
}
