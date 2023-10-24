import React from "react";
import './Hero.css'
import hand_icon from '../Asset/hand_icon.png'
import arrow_icon from '../Asset/arrow.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>product</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Other Product</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Hero