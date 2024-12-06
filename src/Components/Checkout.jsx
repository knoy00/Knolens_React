import React from 'react'
import {Link} from 'react-router-dom'

import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>

        <div className="checkout-header">
            <div className="secure">
                <i className='fa-solid fa-lock'></i>
                <p>Secure Checkout</p>
            </div>

            <div className="checkout-logo">
                <Link to="/">
                    <span className="logo_black">KNO</span>
                    <span className="logo_red">LENS</span>
                </Link>
            </div>

            <div className="help">
                <p>Need help?</p>
                <div className="phone">
                    <i className='fa-solid fa-phone'></i>
                    <p>+1 123-456-7890</p>
                </div>
            </div>
        </div>

        <div className="checkout-flex">
            <div className="checkout-left">
                <h2>Delivery Address</h2>

                <p>Add your delivery address</p>

                <span>*Required fields</span>

                <div className="names">
                    <div className="first-name">
                        <label htmlFor="first-name">First name*</label>
                        <input type="text" placeholder='First Name' name='first-name'/>
                    </div>

                    <div className="last-name">
                        <label htmlFor="first-name">Last name*</label>
                        <input type="text" placeholder='Last Name' name='last-name'/>               
                    </div>
                </div>

                <div className="region">
                    <p>Country/region*</p>
                    <select>
                        <option value="">Select Country/Region</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>

                <div className="address">
                    <p>Address*</p>
                    <input type="text" />
                </div>

                <div className="city">
                    <p>City*</p>
                    <input type="text" />
                </div>

                <div className='state-wrapper'>
                    <div className="state">
                        <p>State/Province*</p>
                        <input type="text" />
                    </div>

                    <div className="zip">
                        <p>Zip/Postal Code*</p>
                        <input type="text" />
                    </div>
                </div>

                <div className="phone">
                    <p>Phone*</p>
                    <input type="text" />
                    <span>We will not share your phone number</span>
                </div>

                <div className="billing-address-check">
                    <input type="checkbox" id="billing-address" name="billing-address" />
                    <label for="billing-address">Use as billing address</label>
                </div>

            </div>

            <div className="checkout-right">
                <div className="checkout-right-header">
                    <h2>Total</h2>
                    <p>USD $1,000</p>
                </div>

                <div className="place-order">
                    <button>Place Order</button>
                </div>

                <p>By clicking "Place Order", you agree to our <span>Terms and Conditions</span></p>

                <div className="line"></div>

                <h2>Summary</h2>

                <div className="item">
                    <div className="item-image">
                        <img src="https://via.placeholder.com/150x150" alt="" />
                    </div>

                    <div className="item-info">
                        <p>Product Name</p>
                        <p>USD $1,000</p>
                    </div>
                </div>

                <div className="delivery-fee">
                    <p>Delivery Fee</p>
                    <p>USD $50</p>
                </div>

                <div className="line"></div>

                <div className="checkout-right-header">
                    <h2>Total</h2>
                    <p>USD $1,000</p>
                </div>

                <div className="promo">
                    <p>Have a Promo Code?</p>
                    <input type="text" placeholder='Promo Code' />
                    <button>Apply</button>
                </div>


            </div>
        </div>  
    </div>
  )
}

export default Checkout
