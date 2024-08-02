import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar_container_main">
      <nav className="nav-container">
        <a href="/">
          <img src={logo} className="logo-img" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
