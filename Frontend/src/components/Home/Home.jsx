import React, { useState } from "react";
import head from "../../assets/head.png";
import phlogo from "../../assets/phlogo.png";
import mhlogo from "../../assets/mhlogo.png";
import SDG_logo from "../../assets/sdg_logo.png";
import SDG1 from "../../assets/SDG1.png";
import SDG1_dc from "../../assets/SDG1_dc.png";
import SDG2 from "../../assets/SDG2.png";
import SDG2_dc from "../../assets/SDG2_dc.png";
import SDG3 from "../../assets/SDG3.png";
import SDG3_dc from "../../assets/SDG3_dc.png";
import SDG4 from "../../assets/SDG4.png";
import SDG4_dc from "../../assets/SDG4_dc.png";
import SDG5 from "../../assets/SDG5.png";
import SDG5_dc from "../../assets/SDG5_dc.png";
import SDG6 from "../../assets/SDG6.png";
import SDG6_dc from "../../assets/SDG6_dc.png";
import SDG7 from "../../assets/SDG7.png";
import SDG7_dc from "../../assets/SDG7_dc.png";
import SDG8 from "../../assets/SDG8.png";
import SDG8_dc from "../../assets/SDG8_dc.png";
import SDG9 from "../../assets/SDG9.png";
import SDG9_dc from "../../assets/SDG9_dc.png";
import SDG10 from "../../assets/SDG10.png";
import SDG10_dc from "../../assets/SDG10_dc.png";
import SDG11 from "../../assets/SDG11.png";
import SDG12_dc from "../../assets/SDG12_dc.png";
import SDG12 from "../../assets/SDG12.png";
import SDG11_dc from "../../assets/SDG11_dc.png";
import SDG13 from "../../assets/SDG13.png";
import SDG13_dc from "../../assets/SDG13_dc.png";
import SDG14 from "../../assets/SDG14.png";
import SDG14_dc from "../../assets/SDG14_dc.png";
import SDG15 from "../../assets/SDG15.png";
import SDG15_dc from "../../assets/SDG15_dc.png";
import SDG16 from "../../assets/SDG16.png";
import SDG16_dc from "../../assets/SDG16_dc.png";
import SDG17 from "../../assets/SDG17.png";
import SDG17_dc from "../../assets/SDG17_dc.png";
import SDG18 from "../../assets/SDG18.png";
import { Link } from "react-router-dom";


import "./Home.css";

const Home = () => {
  const [imageSrc1, setImageSrc1] = useState(SDG1);
  const [imageSrc2, setImageSrc2] = useState(SDG2);
  const [imageSrc3, setImageSrc3] = useState(SDG3);
  const [imageSrc4, setImageSrc4] = useState(SDG4);
  const [imageSrc5, setImageSrc5] = useState(SDG5);
  const [imageSrc6, setImageSrc6] = useState(SDG6);
  const [imageSrc7, setImageSrc7] = useState(SDG7);
  const [imageSrc8, setImageSrc8] = useState(SDG8);
  const [imageSrc9, setImageSrc9] = useState(SDG9);
  const [imageSrc10, setImageSrc10] = useState(SDG10);
  const [imageSrc11, setImageSrc11] = useState(SDG11);
  const [imageSrc12, setImageSrc12] = useState(SDG12);
  const [imageSrc13, setImageSrc13] = useState(SDG13);
  const [imageSrc14, setImageSrc14] = useState(SDG14);
  const [imageSrc15, setImageSrc15] = useState(SDG15);
  const [imageSrc16, setImageSrc16] = useState(SDG16);
  const [imageSrc17, setImageSrc17] = useState(SDG17);
  // const [imageSrc18, setImageSrc18] = useState(SDG18);


  const handleOnMouseEnter1 = () => {
    setImageSrc1(SDG1_dc);
  };
  const handleOnMouseLeave1 = () => {
    setImageSrc1(SDG1);
  };

  const handleOnFocus = () => {
    setImageSrc(SDG_Final);
  };

  const handleOnBlur = () => {
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
