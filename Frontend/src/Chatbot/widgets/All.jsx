import React from "react";
import "./common.css";

export default function All() {
  const buttonStyle = {
    borderTop: "1px solid #d3e7c5",

    background:
      "-webkit-gradient(linear, left top, left bottom, from(#bfd8af), to(#ffffff))",

    padding: "12.5px 25px",
    WebkitBorderRadius: "40px",
    MozBorderRadius: "40px",
    borderRadius: "40px",
    WebkitBoxShadow: "rgba(0, 0, 0, 1) 0 1px 0",
    MozBoxShadow: "rgba(0, 0, 0, 1) 0 1px 0",
    boxShadow: "rgba(0, 0, 0, 1) 0 1px 0",
    textShadow: "rgba(0, 0, 0, 0.4) 0 1px 0",
    color: "#000000",
    fontSize: "13px",
    fontFamily: '"Lucida Grande", Helvetica, Arial, Sans-Serif',
    textDecoration: "none",
    verticalAlign: "middle",
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
          <button style={buttonStyle}>Blogs</button>
        </li>
      </ul>
      <h4>Mental Health</h4>
      <ul>
        <li>
          <button style={buttonStyle}>Meditation</button>
        </li>
        <li>
          <button style={buttonStyle}>Coping Techniques</button>
        </li>
        <li>
          <button style={buttonStyle}>Anxiety help</button>
        </li>
      </ul>
    </>
  );
}
