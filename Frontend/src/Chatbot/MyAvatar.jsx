import React from "react";

import Myavatar from "../assets/bot.png";

const MyAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="MyAvatar" src={Myavatar} style={{ width: "50px" }} />
      </div>
    </div>
  );
};

export default MyAvatar;
