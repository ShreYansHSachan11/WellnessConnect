import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./chatbot.css";
import butto from "../assets/button_chatbot.png";
import "./widgets/common.css";

const Chat = () => {
  const [showChat, setshowChat] = useState(false);

  const toggleChat = () => {
    setshowChat(!showChat);
  };
  return (
    <div>
      {showChat && (
        <Chatbot
          id="chatbot"
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
      <button className="chat-toggle-button" onClick={toggleChat}>
        <img className="chatButton" src={butto} />
      </button>
    </div>
  );
};

export default Chat;
