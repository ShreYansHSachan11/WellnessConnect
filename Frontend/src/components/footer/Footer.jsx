import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="services-row">
            <h4>OUR SERVICES</h4>
            <div className="row1">
              <div className="col">
                <ui className="list-unstyled">
                {/* <Link to="/physical_nav"> */}
                  <li>Physical Health</li>
                  {/* </Link>
                  <Link to="/mental_nav"> */}
                  <li>Mental Health</li>
                  {/* </Link>
                  <Link to="/info_blogs"> */}
                  <li>Blogs</li>
                  {/* </Link> */}
                </ui>
              </div>
              <div className="col">
                <ui className="list-unstyled">
                  {/* <Link to="/pollution_health"> */}
                    <li>Pollution And Health</li>{" "}
                  {/* </Link>
                  <Link to="/weather_health"> */}
                  <li>Weather And Health</li>
                  {/* </Link>
                  <Link to="/BMI"> */}
                  <li>BMI and Calorie Recipes</li>
                  {/* </Link> */}
                </ui>
              </div>
              <div className="col">
                <ui className="list-unstyled">
                  <li>
                     {/* <Link to="/exercises"> */}
                  Exercise                   
                  {/* </Link> */}

                  </li>
                  {/* <Link to="/sense"> */} 
                  <li>Senses Quest</li>
                  {/* </Link>
                  <Link to="/meditation"> */}
                  <li>Meditation</li>
                  {/* </Link> */}
                </ui>
              </div>
            </div>
          </div>

          <div className="col">
            <h4>CONNECT With Us</h4>
            <ui className="list-unstyled">
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61563935603015">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/healt_hconnect ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:healthconnect08@gmail.com ">Gmail</a>
                </li>
              </ul>
            </ui>
          </div>
        </div>
        <hr />
        <div className="footer-row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} WELLNESS CONNECT | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
