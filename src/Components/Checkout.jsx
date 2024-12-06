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
                        <label htmlFor="first-name">First name<span>*</span></label>
                        <input type="text" placeholder='' name='first-name' required/>
                    </div>

                    <div className="last-name">
                        <label htmlFor="first-name">Last name<span>*</span></label>
                        <input type="text" placeholder='' name='last-name' required/>               
                    </div>
                </div>

                <div className="region">
                    <label htmlFor="region">Country/region<span>*</span></label>
                    <select name='region' id='region' required>
                        <option value="">Select Country/Region</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>

                <div className="address">
                    <label htmlFor="Address">Address<span>*</span></label>
                    <input type="text" name="Address" required/>
                </div>

                <div className="city">
                    <label htmlFor="city">City<span>*</span></label>
                    <input type="text" name="city" required/>
                </div>

                <div className='state-wrapper'>
                    <div className="state">
                        <label htmlFor="state">State/Province</label>
                        <input type="text" name="state"/>
                    </div>

                    <div className="zip">
                        <label htmlFor="zip">Postal/Zip Code <span>*</span></label>
                        <input type="text" />
                    </div>
                </div>

                <div className="phone">
                    <label htmlFor="phone">Phone<span>*</span></label>
                    <input type="text" name="phone" required/>
                    <span style={{fontSize: "0.8rem"}}>We will not share your phone number</span>
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
