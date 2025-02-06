import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

import './ContactUs.css'

function ContactUs({handleSignin, cart}) {
  return (
    <div>
      <Header handleSignin={handleSignin} cart={cart}/>
      <div className="contact-us">
        <div className="contact-text">
          <h1>Contact Us</h1>
        </div>

        <div className="contact-flex">
            <div className="sales-team style">
                <i className='fa-solid fa-headset'></i>
                <h2>Speak to a member of our sales team</h2>
                <p>Need help choosing a product or completing your purchase? <b>Call 800-123-4567</b> to speak with a sales specialist.</p>

                <div className="links">
                    <Link>LEARN MORE</Link>
                    <i className='fa-solid fa-arrow-right'></i>
                </div>
            </div>

            <div className="border"></div>
            
            <div className="support style">
                <i className='fa-solid fa-screwdriver-wrench'></i>
                <h2>Support</h2>
                <p>Determine Your Product Support Eligibility.</p>

                <div className="links">
                    <Link>VIEW SUPPORT</Link>
                    <i className='fa-solid fa-arrow-right'></i>
                </div>
            </div>

            <div className="border"></div>

            <div className="community style">
                <i className='fa-solid fa-users'></i>
                <h2>Knolens Community</h2>
                <p>Ask questions, share knowledge, and connect with others. Join our community.</p>

                <div className="links">
                    <Link>VISIT OUR COMMUNITY</Link>
                    <i className='fa-solid fa-arrow-right'></i>
                </div> 
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs
