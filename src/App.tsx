import { ChatList } from "./components/ChatList";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ChatNew from "./pages/chatnew";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chatnew" element={<ChatNew />}></Route>
          <Route path="/chat/:id" element={<ChatList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
