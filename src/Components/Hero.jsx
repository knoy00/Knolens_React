import React from 'react'
import heroImage from '../assets/images/Lens_hero.jpg'

import './Hero.css'

function Hero() {
  return (
    <hero>
        <div className="hero">
                <div className="hero_top">
                    <h1 id="hero-header">Preserve Every Moment With Accuracy</h1>
                    <p id="hero-paragraph">Find the ideal equipment to bring your vision to life, from lenses to accessories.
                        Explore premium cameras, lenses, and gear designed for all skill levels.</p>
                </div>
                <div className="hero_image">
                    <img src={heroImage} alt="Black Canon Lens" />
                    <div className="hero_btn">
                        <p>Shop Now</p>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
        </div>
    </hero>
  )
}

export default Hero
