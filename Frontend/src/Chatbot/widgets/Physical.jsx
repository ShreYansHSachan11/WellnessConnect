import React from "react";
import "./common.css";
export default function Physical() {
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
        <li>
          <button style={buttonStyle} onClick={() => handleNavigation("/BMI")}>
            BMI and Calorie+Recipes
          </button>
        </li>
      </ul>
    </>
  );
}
