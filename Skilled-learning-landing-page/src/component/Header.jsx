import React from "react";
import logo from "../assets/assets/logo-dark.svg";
import '../index.css'

const Header = () => {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="" />
        <button className="btn1 ">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
