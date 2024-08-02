import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const smallMessage = message.toLowerCase();

    if (smallMessage.includes("hello") || smallMessage.includes("hi")) {
      actions.handleHello();
    }
    if (smallMessage.includes("secret")) {
      actions.handleDog();
    }
    if (smallMessage.includes("physical")) {
      actions.handlePhysical();
    }
    if (smallMessage.includes("mental")) {
      actions.handleMental();
    }
    if (
      smallMessage.includes("all") ||
      smallMessage.includes("information") ||
      smallMessage.includes("features") ||
      smallMessage.includes("help")
    ) {
      actions.handleAll();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions, // Pass the actions correctly
        });
      })}
    </div>
  );
};

export default MessageParser;
