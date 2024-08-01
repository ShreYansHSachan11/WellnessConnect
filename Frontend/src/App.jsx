// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./Chatbot/chat";
import "./Chatbot/widgets/common.css";
import Home from "./components/Home/Home";
import BMI from "./components/recipeByCalories/bmiCalculator/BMI";

function App() {
  return (
    <>
      {/* <Chat />
      <Home /> */}
      <BMI />
    </>
  );
}

export default App;
