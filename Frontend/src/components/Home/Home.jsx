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
import "./Home.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

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

  const handleOnMouseEnter2 = () => {
    setImageSrc2(SDG2_dc);
  };
  const handleOnMouseLeave2 = () => {
    setImageSrc2(SDG2);
  };

  const handleOnMouseEnter3 = () => {
    setImageSrc3(SDG3_dc);
  };
  const handleOnMouseLeave3 = () => {
    setImageSrc3(SDG3);
  };

  const handleOnMouseEnter4 = () => {
    setImageSrc4(SDG4_dc);
  };
  const handleOnMouseLeave4 = () => {
    setImageSrc4(SDG4);
  };

  const handleOnMouseEnter5 = () => {
    setImageSrc5(SDG5_dc);
  };
  const handleOnMouseLeave5 = () => {
    setImageSrc5(SDG5);
  };

  const handleOnMouseEnter6 = () => {
    setImageSrc6(SDG6_dc);
  };
  const handleOnMouseLeave6 = () => {
    setImageSrc6(SDG6);
  };

  const handleOnMouseEnter7 = () => {
    setImageSrc7(SDG7_dc);
  };
  const handleOnMouseLeave7 = () => {
    setImageSrc7(SDG7);
  };

  const handleOnMouseEnter8 = () => {
    setImageSrc8(SDG8_dc);
  };
  const handleOnMouseLeave8 = () => {
    setImageSrc8(SDG8);
  };

  const handleOnMouseEnter9 = () => {
    setImageSrc9(SDG9_dc);
  };
  const handleOnMouseLeave9 = () => {
    setImageSrc9(SDG9);
  };

  const handleOnMouseEnter10 = () => {
    setImageSrc10(SDG10_dc);
  };
  const handleOnMouseLeave10 = () => {
    setImageSrc10(SDG10);
  };

  const handleOnMouseEnter11 = () => {
    setImageSrc11(SDG11_dc);
  };
  const handleOnMouseLeave11 = () => {
    setImageSrc11(SDG11);
  };

  const handleOnMouseEnter12 = () => {
    setImageSrc12(SDG12_dc);
  };
  const handleOnMouseLeave12 = () => {
    setImageSrc12(SDG12);
  };

  const handleOnMouseEnter13 = () => {
    setImageSrc13(SDG13_dc);
  };
  const handleOnMouseLeave13 = () => {
    setImageSrc13(SDG13);
  };

  const handleOnMouseEnter14 = () => {
    setImageSrc14(SDG14_dc);
  };
  const handleOnMouseLeave14 = () => {
    setImageSrc14(SDG14);
  };

  const handleOnMouseEnter15 = () => {
    setImageSrc15(SDG15_dc);
  };
  const handleOnMouseLeave15 = () => {
    setImageSrc15(SDG15);
  };

  const handleOnMouseEnter16 = () => {
    setImageSrc16(SDG16_dc);
  };
  const handleOnMouseLeave16 = () => {
    setImageSrc16(SDG16);
  };

  const handleOnMouseEnter17 = () => {
    setImageSrc17(SDG17_dc);
  };
  const handleOnMouseLeave17 = () => {
    setImageSrc17(SDG17);
  };

  return (
    <div className="header">
      <Navbar />
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
            <img src={phlogo} alt="physical_health" className="pm-img" />
            <h3 className="pm-heading">Physical Health</h3>
            <span className="pm-span">
              Find tips, exercises, and nutrition advice to enhance your
              physical well-being.
            </span>
          </div>
          <div className="pm-cols">
            <img src={mhlogo} alt="mental_health" className="pm-img" />
            <h3 className="pm-heading">Mental Health</h3>
            <span className="pm-span">
              Discover strategies and support for a healthier mind and emotional
              balance.
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="path-section">Mission</h2>
        <div>
        <div className="sdg-logo">
        <img
          src={SDG_logo}
          className="SDG-logo"
          id="SDG"
          alt="adg_logo"
        />
        </div>
       
        <div className="sdg-img">
        <img
          src={imageSrc1}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter1}
          onMouseLeave={handleOnMouseLeave1}
        /> <img
          src={imageSrc2}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter2}
          onMouseLeave={handleOnMouseLeave2}
        /> <img
          src={imageSrc3}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter3}
          onMouseLeave={handleOnMouseLeave3}
        /> <img
          src={imageSrc4}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter4}
          onMouseLeave={handleOnMouseLeave4}
        /> <img
          src={imageSrc5}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter5}
          onMouseLeave={handleOnMouseLeave5}
        /> <img
          src={imageSrc6}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter6}
          onMouseLeave={handleOnMouseLeave6}
        /> <img
          src={imageSrc7}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter7}
          onMouseLeave={handleOnMouseLeave7}
        /> <img
          src={imageSrc8}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter8}
          onMouseLeave={handleOnMouseLeave8}
        /> <img
          src={imageSrc9}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter9}
          onMouseLeave={handleOnMouseLeave9}
        /> <img
          src={imageSrc10}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter10}
          onMouseLeave={handleOnMouseLeave10}
        /> <img
          src={imageSrc11}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter11}
          onMouseLeave={handleOnMouseLeave11}   
          /> <img
          src={imageSrc12}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter12}
          onMouseLeave={handleOnMouseLeave12}
        /> <img
          src={imageSrc13}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter13}
          onMouseLeave={handleOnMouseLeave13}
        /> <img
          src={imageSrc14}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter14}
          onMouseLeave={handleOnMouseLeave14}
        /> <img
          src={imageSrc15}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter15}
          onMouseLeave={handleOnMouseLeave15}
        /> <img
          src={imageSrc16}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter16}
          onMouseLeave={handleOnMouseLeave16}
        /> <img
          src={imageSrc17}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
          tabIndex="0"
          onMouseEnter={handleOnMouseEnter17}
          onMouseLeave={handleOnMouseLeave17}
        /> <img
          src={SDG18}
          className="SDG-img"
          id="SDG"
          alt="dynamic"
        />
        </div>
        </div>
      </div>
      {
        <p className="sdg-text">
          The 3rd Sustainable Development Goal (SDG 3) aims to ensure healthy
          lives and promote well-being for all at all ages. It addresses key
          health priorities such as reducing maternal and child mortality,
          combating communicable and non-communicable diseases, and improving
          mental health. Achieving this goal requires strengthening healthcare
          systems, increasing access to essential medicines and vaccines, and
          addressing health determinants like clean water and sanitation.
          Efforts to meet SDG 3 are vital for sustainable development, as good
          health is foundational to the economic, social, and environmental
          well-being of societies.
        </p>
      }
      <Footer />
    </div>
  );
};

export default Home;
