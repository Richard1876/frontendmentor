import React from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





const Footer = () => {
  return (
    <footer>
      <div className="inner-footer">
        <div className="right-mid-footer">
          <img className="logo" src={logo} alt="logo" />
          <div className="copyrights-info">
            <p className="right-statement">
              All rights reserved © Equalizer 2021 <br />
              Have any problems? Contact us via social media or email us at
            </p>
            <p className="email">equalizer@example.com</p>
          </div>
        </div>
        <div className="social-container">
          <FaFacebookSquare className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />


        </div>
      </div>
    </footer>
  );
};

export default Footer;
