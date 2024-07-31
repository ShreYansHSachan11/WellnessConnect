// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./Chatbot/chat";
import "./Chatbot/widgets/common.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Chat />
      <Home />
    </>
  );
}

export default App;
