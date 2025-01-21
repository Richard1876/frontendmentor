import React from 'react'
import '../index.css'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <section className='hero'>
    <header>
        <nav>
            <img className='logo' src={logo} alt="" />
        </nav>
    </header>
    <div className='hero-text'>
      <h1>We make your music sound extraordinary</h1>
      <p>
        A system audio equalizer specifically designed for Android and iOS. Freely tune the 
        way your music sounds with a professional grade parametric EQ & volume mixer. Control 
        bass, mids, treble, gain control, reverb, and more!
      </p>
    </div>
    </section>
  )
}

export default Hero