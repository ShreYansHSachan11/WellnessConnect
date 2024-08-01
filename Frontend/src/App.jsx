// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./Chatbot/chat";
import "./Chatbot/widgets/common.css";
import Home from "./components/Home/Home";
import Pollution from "./pages/pollution";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WeatherHealth from "./pages/WeatherHealth";
import InfoBlog from "./components/InfoBlog/InfoBlog";
import PhysicalNav from "./components/Navigators/physical/PhysicalNav";
import Senses from "./components/ReduceAnxiety/Senses";
import MentalNav from "./components/Navigators/physical/MentalNav";
import MeditationPage from "./components/MeditationClock/meditationPage";

function App() {
  return (
    <>
      <Chat />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pollution_health" element={<Pollution />} />
          <Route path="/weather_health" element={<WeatherHealth />} />
          <Route path="/info_blogs" element={<InfoBlog />} />
          <Route path="/physical_nav" element={<PhysicalNav />} />
          <Route path="/sense" element={<Senses />} />
          <Route path="/mental_nav" element={<MentalNav />} />
          <Route path="/meditation" element={<MeditationPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
