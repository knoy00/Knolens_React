import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'

import { useState } from 'react'

import './Checkout.css'

function Checkout() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');


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
                <span className="cancel">Cancel</span>

                <div className="names">
                    <div className="first-name">
                        <label htmlFor="first-name">First name<span>*</span></label>
                        <input type="text" placeholder='' name='first-name' required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        {firstName.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                    </div>

                    <div className="last-name">
                        <label htmlFor="first-name">Last name<span>*</span></label>
                        <input type="text" placeholder='' name='last-name' required value={lastName} onChange={(e) => setLastName(e.target.value)}/> 
                        {lastName.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}              
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
                    <input type="text" name="Address" required value={address} onChange={(e) => setAddress(e.target.value)}/>
                    {address.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                </div>

                <div className="city">
                    <label htmlFor="city">City<span>*</span></label>
                    <input type="text" name="city" required value={city} onChange={(e) => setCity(e.target.value)}/>
                    {city.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                </div>

                <div className='state-wrapper'>
                    <div className="state">
                        <label htmlFor="state">State/Province</label>
                        <input type="text" name="state" value={state} onChange={(e) => setState(e.target.value)}/>
                        {state.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                    </div>

                    <div className="zip">
                        <label htmlFor="zip">Postal/Zip Code <span>*</span></label>
                        <input type="text" required name="zip" value={zip} onChange={(e) => setZip(e.target.value)}/>
                        {zip.length >= 5 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                    </div>
                </div>

                <div className="phone">
                    <label htmlFor="phone">Phone<span>*</span></label>
                    <input type="text" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    {phone.length >= 10 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
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

                <h2 className="summary-title">Summary</h2>

                <div className="checkout-item">
                    <div className="checkout-item-image">
                        <img src="https://via.placeholder.com/70x70" alt="" />
                    </div>

                    <div className="checkout-item-info">
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
                    <label htmlFor="promo-code">Promo Code</label>
                    <input type="text" placeholder='' name="promo-code"/>
                    <button>Apply</button>
                </div>


            </div>
        </div>  
        {/* <Footer /> */}
    </div>
  )
}

export default Checkout
