import React from 'react'
import '../index.css'
import illustration from '../assets/illustration-app.png'
import apple_icon from '../assets/icon-apple.svg'
import android_icon from '../assets/icon-android.svg'
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";


const Home = () => {
  return (
    <section className='home'>
        <div className='main-content'>
            <div className='frame-280'>
                <div className='right'>
                    <img className='illustration' src={illustration} alt="" />
                </div>
                <div className='left-pricing-cta'>
                    <div className='frame-279'>
                        <div className='frame-272'>
                            <div className='frame-271'>
                                <h2>Premium EQ</h2>
                                <p>
                                    Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!
                                </p>
                            </div>
                            <div className="frame-283">
                                <p className='dollars'>$4</p>
                                <p className='month'> / month</p>
                            </div>
                        </div>
                        <div className='frame-276'>
                            <button className='btn'>
                                {/* <img className='apple-icon' src={apple_icon} alt="" /> */}
                                <FaApple className='apple-icon' />

                                <p>iOS Download</p>
                            </button>
                            <button className='btn2'>
                                {/* <img className='android-icon' src={android_icon} alt="" /> */}
                                <IoLogoAndroid className='android-icon' />
                                <p>Android Download</p>
                            </button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home