import React from 'react'
import hero from '../assets/assets/image-hero-desktop.png'
import hero2 from '../assets/assets/image-hero-mobile.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='inner-hero'>
            <div className='left'>
                <div className='text-container'>
                    <h1>Maximize skill, minimize budget</h1>
                    <p>
                        Our modern courses across a range of in-demand skills will give you the 
                        knowledge you need to live the life you want.
                    </p>                    
                </div>
                <div className='btn-container'>
                <button className='btn1 btn2'>Get Started</button>
                </div>
            </div>
            <div className='right'>
                <div className='hero-container'>
                    <img src={hero2} alt="" />
                </div>
                {/* <img className='hero-img' src={hero} alt="" /> */}
            </div>
        </div>
    </section>
  )
}

export default Hero