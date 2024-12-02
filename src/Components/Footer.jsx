import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer">
            <div className="footer_content">
                <div className="footer_links">
                    <div id="info" className="fl">
                        <div className="link_title">
                            <h2>Info</h2>
                            <i className="fa-solid fa-angle-down angle_down"></i>
                        </div>
                        
                        <ul className="info--links">
                            <li><Link to="">Customer Service</Link></li>
                            <li><Link to="">Shipping and Delivery</Link></li>
                            <li><Link to="">Returns and Exchange</Link></li>
                            <li><Link to="">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div id="resources" className="fl">
                        <div className="link_title">
                            <h2>Resources</h2>
                            <i className="fa-solid fa-angle-down angle_down"></i>
                        </div>
                        <ul className="resources--links">
                            <li><Link to="">Blog</Link></li>
                            <li><Link to="">Media Kit</Link></li>
                            <li><Link to="">Photo Gallery</Link></li>
                        </ul>
                    </div>
                    <div id="contact" className="fl">
                        <div className="link_title">
                            <h2>Contact</h2>
                            <i className="fa-solid fa-angle-down angle_down"></i>
                        </div>
                        <ul className="contact--links">
                            <li><Link to="">info@knolens.com</Link></li>
                            <li><Link to="">+(233) 50 193 9533</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer_right">
                    <div className="subscribe">
                        <div className="subscribe_top">
                            <i className="fa-solid fa-bell"></i>
                            <p>Subscribe to our newsletter to receive the latest updates and event highlights</p>
                        </div>
                        <div className="subscribe_input">
                            <input type="text" placeholder="Your email address" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="social">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x"></i>
                        <i className="fa-brands fa-telegram"></i>
                    </div>
                </div>

                <div className="footer_logo">
                    <h1>KNOLENS</h1>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Footer
