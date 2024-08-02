
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>OUR SERVICES</h4>
            <ui className="list-unstyled">
              <li>Mental Health</li>
              <li>Physical Health</li>
              <li>Stress Release</li>
            </ui>
          </div>
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>Chatbot</li>
              <li>Visit Us</li>
              <li>Subscribe Us</li>
            </ui>
          </div>
          <div className="col">
            <h4>CONNECT With Us</h4>
            <ui className="list-unstyled">
              <a href=""></a><li>Instagram</li>
              <li>Facebook</li>
              <li>Gmail</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="footer-row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} WELLNESS CONNECT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
