import React from 'react'
import '../index.css'
import footer from "../assets/assets/logo-light.svg";

const Footer = () => {
  return (
    <footer>
          <nav className='footer-nav'>
            <img className="logo" src={footer} alt="" />
            <button className="footer-btn linear">Get Started</button>
          </nav>
        </footer>
  )
}

export default Footer