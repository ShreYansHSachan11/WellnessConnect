import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMental = () => {
    const botMessage = createChatBotMessage(
      "What Do You want To explore in mental health?",
      {
        widget: "mental",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePhysical = () => {
    const botMessage = createChatBotMessage(
      "What Do You wanna Explore In Physical Health?",
      {
        widget: "physical",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAll = () => {
    const botMessage = createChatBotMessage(
      "Here is Everything Available On the Website",
      {
        widget: "all",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handlePhysical,
            handleMental,
            handleAll,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
