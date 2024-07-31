import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./Chatbot/chat";
import "./Chatbot/widgets/common.css";
import WeatherHealth from "./pages/WeatherHealth";
import Pollution from "./pages/pollution";

function App() {
  return (
    <>
      <Chat />
      {/* <WeatherHealth /> */}
      {/* <Pollution /> */}
    </>
  );
}

export default App;
