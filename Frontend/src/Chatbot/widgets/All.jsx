import React from "react";
import "./common.css";

export default function All() {
  const buttonStyle = {
    padding: "0.5em",
    margin: "0.5em",
    backgroundColor: "#99BC85",
    borderRadius: "1em",
  };
  const handleNavigation = (path) => {
    window.location.href = path;
  };
  return (
    <>
      <h4>Physical Health</h4>
      <ul>
        <li>
          <button style={buttonStyle}>Yoga</button>
        </li>
        <li>
          <button style={buttonStyle}>Exercises</button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("/pollution_health")}
            style={buttonStyle}
          >
            Pollution And Health
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("/weather_health")}
            style={buttonStyle}
          >
            Weather And Health
          </button>
        </li>
        <li>
          <button
            style={buttonStyle}
            onClick={() => handleNavigation("/info_blogs")}
          >
            Blogs
          </button>
        </li>
      </ul>
      <h4>Mental Health</h4>
      <ul>
        <li>
          <button
            onClick={() => handleNavigation("/meditation")}
            style={buttonStyle}
          >
            Meditation
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavigation("/sense")}
            style={buttonStyle}
          >
            Anxiety help
          </button>
        </li>
      </ul>
    </>
  );
}
