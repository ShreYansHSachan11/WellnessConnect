import React from 'react';
import logo from "../../assets/logo.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import './Navbar.css';


const Navbar = () => {
    const style = { color: "white", fontSize: "1.5em" }

  return (
    <nav className='nav-container'>
    <a href='/'>
    <img src={logo} className='logo-img'/>
    </a>
    <div>
    <IoIosAddCircleOutline style={style}/>
    </div>
    </nav>
  )
}

export default Navbar
