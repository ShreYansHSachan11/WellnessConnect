// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Chat from "./Chatbot/chat";
import "./Chatbot/widgets/common.css";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Home />
      {/* <Chat /> */}
    </>
  );
}

export default App;
