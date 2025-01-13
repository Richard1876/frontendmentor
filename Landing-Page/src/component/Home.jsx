import React from 'react'
import founder from "../assets/image-founder.webp"
import bgp3 from "../assets/bg-pattern-3.svg"
import logo from "../assets/logo-dark.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import instagram from "../assets/icon-instagram.svg"

const Home = () => {
  return (
    <main>
        <div className='center'>
            <div className='center-center'>
                <div className='box-1'>
                    <p className='one'>1</p>
                    <div className='article-container'>
                        <h2> Actionable insights</h2>
                        <p>Optimize your products, improve customer satisfaction and stay ahead of the competition 
                        with our product data analytics.</p>
                    </div>
                </div>
                <div className='box-1'>
                    <p className='one'>2</p>
                    <div className='article-container'>
                        <h2>Data-driven decisions</h2>
                        <p>Make data-driven decisions with our product data analytics. Our AI-generated reports help 
                        you unlock insights hidden in your product data.</p>
                    </div>
                </div>
                <div className='box-1'>
                    <p className='one'>3</p>
                    <div className='article-container'>
                        <h2> Always affordable</h2>
                        <p>Always affordable pricing that scales with your business. Get top-quality product data 
                        analytics services without hidden costs or unexpected fees.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='center-bottom'>
            <div className='inner-container'>
                   <div className='img-container'>
                    <img className='founder' src={founder} alt="" />
                    </div> 
                    <div className='statement-container'>
                        <div className='statement-box'>
                            <h3>Be the first to test</h3>
                            <p>
                                Hi, I'm Louis Graham, the founder of the company.   Book a demo call with me to become a 
                                beta tester for our app and kickstart your company.     Apply for access below and I’ll be 
                                in touch to schedule a call.
                            </p>
                            <button className='apply-btn'>Apply for access</button>
                            <div className='slinky'>
                                <img src={bgp3} alt="" />
                            </div>
                        </div>

                    </div>
            </div>
        </div>
        <footer>
            <div className='inner-footer'>
                <img className='logo' src={logo} alt="" />
                <div className='social-icon'>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>

        </footer>


    </main>
    
  )
}

export default Home