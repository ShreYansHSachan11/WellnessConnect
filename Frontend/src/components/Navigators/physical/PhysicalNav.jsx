import React from "react";
import PollutionButton from "../../../assets/pollution_button.jpg";
import BlogButton from "../../../assets/defaultNews.jpg";
import "./PhysicalNav.css";
import { Link } from "react-router-dom";
import WeatherButton from "../../../assets/weatherbutton.jpg";
import yoga from "../../../assets/yoga.jpg"

export default function PhysicalNav() {
  return (
    <div className="main_container_physical_nav">
      <div className="Physical_Nav_top">
        <h1>Physical Health</h1>
        <div>
          Physical health is the cornerstone of a vibrant and fulfilling life.
          It encompasses everything from maintaining a healthy weight, enhancing
          muscle strength, and increasing cardiovascular endurance to ensuring
          flexibility and preventing illness. A strong physical foundation not
          only supports mental well-being but also boosts energy levels,
          improves mood, and enhances the quality of life.
        </div>
        <h4>
          Click on any of The following to start exploring Healthcare Topics
        </h4>
      </div>
      <div className="flex-buttons">
        <div>
          <Link to="/pollution_health">
            <img className="physical_nav_buttons" src={PollutionButton} />
            <div className="button-descriptor">Health And Pollution</div>{" "}
          </Link>
        </div>
        <div>
          <Link to="/weather_health">
            <img className="physical_nav_buttons" src={WeatherButton} />

            <div className="button-descriptor">Health And Weather</div>
          </Link>
        </div>
      </div>
      <div className="flex-buttons">
        <div>
          <Link to="/info_blogs">
            <img className="physical_nav_buttons" src={BlogButton} />

            <div className="button-descriptor">Health News</div>
          </Link>
        </div>
        <div>
          <Link to="/exercises">
            <img className="physical_nav_buttons" src={yoga} />

            <div className="button-descriptor">Yoga and Exercises</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
