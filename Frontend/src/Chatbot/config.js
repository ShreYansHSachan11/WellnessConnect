import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./widgets/DogPicture";
import List from "./widgets/List";
import Physical from "./widgets/Physical";
import Mental from "./widgets/Mental.jsx";
import All from "./widgets/All.jsx";
import MyAvatar from "./MyAvatar.jsx";

const config = {
  botName: "HealthBot",
  initialMessages: [
    createChatBotMessage("Hi, how can I help you?", {
      widget: "List",
    }),
  ],

  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "List",
      widgetFunc: (props) => <List {...props} />,
    },
    {
      widgetName: "physical",
      widgetFunc: (props) => <Physical {...props} />,
    },
    {
      widgetName: "mental",
      widgetFunc: (props) => <Mental {...props} />,
    },
    {
      widgetName: "all",
      widgetFunc: (props) => <All {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#99BC85",
    },
    chatButton: {
      backgroundColor: "#99BC85",
    },
  },
  botAvatar: (props) => <MyAvatar {...props} />,
};

export default config;
