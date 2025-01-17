import React from 'react'
import animation from "../assets/assets/icon-animation.svg";
import design from "../assets/assets/icon-design.svg";
import photography from "../assets/assets/icon-photography.svg";
import crypto from "../assets/assets/icon-crypto.svg";
import business from "../assets/assets/icon-business.svg";

const Home = () => {
  return (
    <main className='home'>
        <section className='inner-container'>
            <div className='line-1'>
                <div className='title-card linear'>
                    <div className='title-container '>
                    <h2> Check out our most popular courses!</h2>
                    </div>                    
                </div>
                <div className='card'>
                    <div className='icon-container'>
                        <img src={animation} alt="" />
                    </div>
                    <div className='frame-191'>

                    <div className='group-9'>
                        <h2>Animation</h2>
                        <p>
                            Learn the latest animation techniques to create stunning motion 
                            design and captivate your audience.
                        </p>
                        <button className='get-started'>Get Started</button>
                    </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='icon-container'>
                        <img src={design} alt="" />
                    </div>
                    <div className='frame-191'>

                    <div className='group-9'>
                        <h2>Design</h2>
                        <p>
                        Create beautiful, usable interfaces to help shape the future of 
                        how the web looks.
                        Get Started
                        </p>
                        <button className='get-started'>Get Started</button>
                    </div>
                    </div>
                </div>
                
                          
                <div className='card '>
                    <div className='icon-container'>
                        <img src={photography} alt="" />
                    </div>
                    <div className='frame-191'>

                    <div className='group-9'>
                        <h2>Photography</h2>
                        <p>
                        Explore critical fundamentals like lighting, composition, and focus 
                        to capture exceptional photos.
                        Get Started
                        </p>
                        <button className='get-started'>Get Started</button>
                    </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='icon-container'>
                        <img src={crypto} alt="" />
                    </div>
                    <div className='frame-191'>

                    <div className='group-9'>
                        <h2>Crypto</h2>
                        <p>
                        All you need to know to get started investing in crypto. Go from beginner 
                        to advanced with this 54 hour course.
                        Get Started
                        </p>
                        <button className='get-started'>Get Started</button>
                    </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='icon-container'>
                        <img src={business} alt="" />
                    </div>
                    <div className='frame-191'>

                    <div className='group-9'>
                        <h2>Business</h2>
                        <p>
                        A step-by-step playbook to help you start, scale, and sustain your business 
                        without outside investment.
                        </p>
                        <button className='get-started'>Get Started</button>
                    </div>
                    </div>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default Home