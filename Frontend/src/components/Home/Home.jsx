import React, { useState } from "react";
import head from "../../assets/head.png";
import phlogo from "../../assets/phlogo.png";
import mhlogo from "../../assets/mhlogo.png";
import SDG_1 from "../../assets/SDG_1.png";
import SDG_Final from "../../assets/SDG_Final.png";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [imageSrc, setImageSrc] = useState(SDG_1);

  const handleOnMouseEnter = () => {
    setImageSrc(SDG_Final);
  };

  const handleOnMouseLeave = () => {
    setImageSrc(SDG_1);
  };

  return (
    <div className="header">
      <div>
        <img src={head} alt="head-top" className="headerimg" />
        <div className="head-text-container">
          <p className="head-img-text1">Complete Care for Your Health</p>
          <p className="head-img-text2">Mind, Body, and Beyond</p>
        </div>
      </div>
      <div>
        <div className="path-chat-container">
          <div className="path-container">
            <h2 className="path-section">Choose Your Path To Wellness</h2>
            <p className="path-span">
              To explore our resources, please select the type of health
              information you’re interested in
            </p>
          </div>
        </div>

        <div className="path-cols">
          <div className="pm-cols">
            <Link to="/physical_nav">
              <img src={phlogo} alt="physical_health" className="pm-img" />
            </Link>
            <h3 className="pm-heading">Physical Health</h3>
            <span className="pm-span">
              Find tips, exercises, and nutrition advice to enhance your
              physical well-being.
            </span>
          </div>
          <div className="pm-cols">
            <Link to="/mental_nav">
              <img src={mhlogo} alt="mental_health" className="pm-img" />
            </Link>
            <h3 className="pm-heading">Mental Health</h3>
            <span className="pm-span">
              Discover strategies and support for a healthier mind and emotional
              balance.
            </span>
          </div>
        </div>
      </div>
      <h2 className="path-section">Mission</h2>

      <img
        src={imageSrc}
        className="SDG-img"
        id="SDG"
        alt="dynamic"
        tabIndex="0"
        onMouseEnter={handleOnMouseEnter}
        onBlur={handleOnMouseLeave}
      />

      <p className="sdg-text">
        The 3rd Sustainable Development Goal (SDG 3) aims to ensure healthy
        lives and promote well-being for all at all ages. It addresses key
        health priorities such as reducing maternal and child mortality,
        combating communicable and non-communicable diseases, and improving
        mental health. Achieving this goal requires strengthening healthcare
        systems, increasing access to essential medicines and vaccines, and
        addressing health determinants like clean water and sanitation. Efforts
        to meet SDG 3 are vital for sustainable development, as good health is
        foundational to the economic, social, and environmental well-being of
        societies.
      </p>
    </div>
  );
};

export default Home;
