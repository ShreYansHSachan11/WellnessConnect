import React from "react";
import meditationButton from "../../../assets/meditationButton.jpg";
import "./PhysicalNav.css";
import { Link } from "react-router-dom";
import anxietyButton from "../../../assets/anxiety.jpg";
export default function MentalNav() {
  return (
    <div className="main_container_physical_nav">
      <div className="Physical_Nav_top">
        <h1>Mental Health</h1>
        <div>
          Taking care of your mental health is as important as maintaining your
          physical health. By adopting healthy habits and seeking support when
          needed, you can improve your mental well-being and live a more
          fulfilling life. Remember, mental health is a journey, and it’s okay
          to seek help along the way.{" "}
        </div>
        <h4>
          Click on any of The following to start exploring Healthcare Topics
        </h4>
      </div>
      <div className="flex-buttons">
        <div>
          <Link to="/meditation">
            <img className="physical_nav_buttons" src={meditationButton} />
            <div className="button-descriptor">Meditation</div>{" "}
          </Link>
        </div>
        <div>
          <Link to="/sense">
            <img className="physical_nav_buttons" src={anxietyButton} />

            <div className="button-descriptor">Health And Weather</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
