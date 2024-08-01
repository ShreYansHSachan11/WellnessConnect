import React from "react";
import "./common.css";

export default function Mental() {
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
            {" "}
            Anxiety Help
          </button>
        </li>
      </ul>
    </>
  );
}
