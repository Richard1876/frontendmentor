import React from 'react'
import '../index.css'
import logo from "../assets/logo-light.svg"
import bgp1 from "../assets/bg-pattern-1.svg"
import bgp2 from "../assets/bg-pattern-2.svg"

import hero from "../assets/image-hero.webp"

const Header = () => {
  return (
    <>
    <header >
        <div className='bg'></div>
        <div>
            <img className='bgp1' src={bgp1} alt="" />
            <img className='bgp2' src={bgp2} alt="" />
        </div>
        <nav>
            <div className='nav-bar'>
                <img src={logo} alt="" />
                <p className='access'> Apply for access</p>
            </div>
        </nav>
        <div className='data'>
            <h1>Data <span>tailored</span> to <br /> your needs.</h1>
            <button className='btn'>Learn more</button>
        </div>
        <div className='cell-phone-container'>
                <img src={hero} alt="" />
        </div>
    </header>
    </>
  )
}

export default Header