import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Paypal from '../assets/images/paypal.png'
import Card from '../assets/images/card.png'
import Bitcoin from '../assets/images/bitcoin.png'
import ScrollToTop from './ScrollToTop'
import PaymentMethodBtn from './PaymentMethodBtn'
import ConfirmBtn from './ConfirmBtn'

import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import './Checkout.css'

function Checkout({cart ,addToOrders}) {
    

    const navigate = useNavigate();
    const loadRef = useRef(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [code, setCode] = useState('');

    const[allFields, setAllFields] = useState(false);

    const validateForm = () => {
        if (firstName && lastName && phone && address && city && zip) {
            setAllFields(true);
        }
        else{
            setAllFields(false);
        }
    }

    function handleBlur(event) {
        validateForm();
    }

    const total = (cart.reduce((total, item) => total + item.price, 0)).toFixed(2);

    const [activeTab, setActiveTab] = useState(null);
    const handleActiveTab = (tab) => {
        setActiveTab(tab);
    }

    const[mainAddressSection, setMainAddressSection] = useState(true);
    const[addressTab, setAddressTab] = useState(false);

    const confirmAddress = (allFields) => {
        if(allFields){
            setAddressTab(true)
            setMainAddressSection(false)
        }
    }

    // Switching between active and inactive tabs
    const [paypalTab, setPaypalTab] = useState(false);
    const [cardTab, setCardTab] = useState(false);
    const [bitcoinTab, setBitcoinTab] = useState(false);
    const [visibleTab, setVisibleTab] = useState(true);

    const handlePaymentTab = (tab) => {
        if(tab === 'Paypal'){
            setPaypalTab(true)
            setCardTab(false)
            setBitcoinTab(false)
            setVisibleTab(false)
        }
        else if(tab === 'Card'){
            setPaypalTab(false)
            setCardTab(true)
            setBitcoinTab(false)
            setVisibleTab(false)
        }
        else if(tab === 'Bitcoin'){
            setPaypalTab(false)
            setCardTab(false)
            setBitcoinTab(true)
            setVisibleTab(false)
        }
    }

    // Loader function and navigation
    const handlePlaceOrder = () => {
        if(addressTab && (paypalTab || bitcoinTab || cardTab) && total > 0){
            if (loadRef.current) {
                loadRef.current.style.width = "40%";
            
                setTimeout(() => {
                  if (loadRef.current) {
                    loadRef.current.style.width = "70%";
                  }
                }, 2000);
            
                setTimeout(() => {
                  if (loadRef.current) {
                        loadRef.current.style.width = "100%";
            
                        setTimeout(() => {
                            if (loadRef.current) {
                              loadRef.current.style.display = "none";
                              addToOrders(cart);
                              navigate('/OrderAndReturn');
                            }
                        }, 500);
                    }
                }, 2500);
            }
        }  
    };
      

  return (
    <div className='checkout'>
        <ScrollToTop />
        

        <div className="checkout-header">
            <div className="load-animate" ref={loadRef}></div>
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
                {mainAddressSection && <div>
                    <h2>Delivery Address</h2>

                    <p>Add your delivery address</p>

                    <span>*Required fields</span>
                    <span className="cancel">Cancel</span>

                    <div className="names">
                        <div className="first-name">
                            <label htmlFor="first-name">First name<span>*</span></label>
                            <input 
                            type="text" 
                            placeholder='' 
                            name='first-name' 
                            required 
                            value={firstName} 
                            onChange={(e) => {
                                validateForm();
                                setFirstName(e.target.value)}} />
                            {firstName.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                        </div>

                        <div className="last-name">
                            <label htmlFor="first-name">Last name<span>*</span></label>
                            <input 
                            type="text" 
                            placeholder='' 
                            name='last-name' 
                            required 
                            value={lastName} 
                            onChange={(e) => {
                                setLastName(e.target.value)
                                validateForm()}}/> 
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
                        <input 
                        type="text" 
                        name="Address" 
                        required 
                        value={address} 
                        onChange={(e) => {
                            setAddress(e.target.value)
                            validateForm()}}/>
                        {address.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                    </div>

                    <div className="city">
                        <label htmlFor="city">City<span>*</span></label>
                        <input 
                        type="text" 
                        name="city" 
                        required 
                        value={city} 
                        onChange={(e) => {
                            setCity(e.target.value)
                            validateForm()}}/>
                        {city.length > 1 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                    </div>

                    <div className='state-wrapper'>
                        <div className="state">
                            <label htmlFor="state">State/Province</label>
                            <input type="text" name="state" value={state} onChange={(e) => setState(e.target.value)}/>
                            {state.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                        </div>

                        <div className="zip">
                            <label htmlFor="zip">Postal/Zip Code <span>*</span></label>
                            <input 
                            type="text" 
                            required 
                            name="zip" 
                            value={zip} 
                            onChange={(e) => {
                                setZip(e.target.value)
                                validateForm();
                                }}/>
                            {zip.length >= 5 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                        </div>
                    </div>

                    <div className="mobile">
                        <label htmlFor="phone">Phone<span>*</span></label>
                        <input 
                        type="text" 
                        name="phone" 
                        required 
                        value={phone} 
                        onChange={(e) => {
                            setPhone(e.target.value)
                            validateForm();
                            }}/>
                        {phone.length >= 10 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                        <span style={{fontSize: "0.8rem"}}>We will not share your phone number</span>
                    </div>

                    <div className="billing-address-check">
                        <input type="checkbox" id="billing-address" name="billing-address" />
                        <label for="billing-address">Use as billing address</label>
                    </div>

                    {allFields && <ConfirmBtn onClick={() => confirmAddress(allFields)}/>}

                </div>}



               {addressTab && <div className="address-tab">
                    <div style={{display: 'flex', justifyContent: '', alignItems: 'center', gap: 30, position: 'relative'}}>
                        
                        {/* <i className='fa-solid fa-pen-to-square'></i> */}
                        <div><i className='fa-regular fa-circle-check check' style={{color: 'green', top: 6, left: 0, fontSize: 20}}></i></div>
                        <h2>Delivery Address</h2>
                    </div>

                    
                    <p>{firstName} {lastName}</p>
                    <p>{city}</p>
                    <p>{zip}</p>
                    <div className="edit">
                        <span>Edit</span>
                        <i className='fa-solid fa-pen-to-square'></i>
                    </div>
                </div>}

                <div className="payment">  
                    <div className="line"></div>
                    {visibleTab && <div>
                        <h2>Payment Method</h2>
                        <p>Pay securely through your preferred payment method</p>

                        <div className="payment-methods">
                            <div className={`payment-option ${activeTab === 'paypal' ? 'active' : ''}`} onClick={() => handleActiveTab('paypal')}>
                                <div className='pay-logo paypal'>
                                    <img src={Paypal} alt="" />
                                </div>
                            </div>

                            <div className={`payment-option ${activeTab === 'card' ? 'active' : ''}`} onClick={() => handleActiveTab('card')}>
                                <div className='pay-logo card'>
                                    <img src={Card} alt="" />
                                </div>
                            </div>

                            <div className={`payment-option ${activeTab === 'bitcoin' ? 'active' : ''}`} onClick={() => handleActiveTab('bitcoin')}>
                                <div className='pay-logo coin'>
                                    <img src={Bitcoin} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className={`paypal-content ${activeTab === 'paypal' ? 'display-content' : ''}`} onClick={() => handleActiveTab('paypal')}>
                            <div className="paypal-check">
                                <input type="checkbox" id="paypal" name="paypal" />
                                <label for="paypal">Activate one-click pay</label>
                            </div>
                            <p>Next time you can pay with PayPal without having to log in</p>
                            <p className='confirm-method-txt'>Please confirm your payment method below</p>

                            <PaymentMethodBtn onClick={() => handlePaymentTab('Paypal')}/>
                            <div className="line"></div>

                        </div>
                    
                    

                    <div className={`card-content ${activeTab === 'card' ? 'display-content' : ''}`} onClick={() => handleActiveTab('card')}>
                        <div>
                            <p>CARD DETAILS</p>
                            <span>*Required fields</span>

                            <div className="card-name">
                                <label htmlFor="card-name">Card Name<span>*</span></label>
                                <input type="text" name="card-name" required placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)}/>
                                {name.length > 2 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}

                            </div>

                            <div className="card-number-wrapper">
                                <div className="card-number">
                                    <label htmlFor="card-number">Card Number<span>*</span></label>
                                    <input 
                                    type="text" 
                                    name="card-number"
                                    maxLength="19"
                                    required 
                                    placeholder='0000 0000 0000 0000' 
                                    value={number} 
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        // Remove non-digit characters and format with spaces
                                        const formattedValue = inputValue
                                          .replace(/\D/g, "") // Remove non-digit characters
                                          .match(/.{1,4}/g) // Match groups of 1 to 4 digits
                                          ?.join(" ") || ""; // Join groups with spaces
                                        setNumber(formattedValue)}}/>
                                    {number.length >= 14 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                                </div>

                                <div className="card-expiration">
                                    <label htmlFor="card-expiration">Expiry Date<span>*</span></label>
                                    <input type="text" name="card-expiration" placeholder='MM/YY' required />
                                </div>
                            </div>

                            <div className="card-cvv">
                                <label htmlFor="card-cvv">CVV<span>*</span></label>
                                <input 
                                type="text" 
                                name="card-cvv" 
                                required 
                                placeholder='000'
                                maxlength="3" 
                                min="100" 
                                max="999" 
                                value={code} 
                                onChange={(e) => setCode(e.target.value)}/>
                                {code.length === 3 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                            </div>

                            <PaymentMethodBtn onClick={() => handlePaymentTab('Card')}/>
                            <div className="line"></div>
                        </div>
                    </div>


                    <div className={`crypto-content ${activeTab === 'bitcoin' ? 'display-content' : ''}`} onClick={() => handleActiveTab('bitcoin')}>
                        <div>
                            <p>
                                You can pay with Bitcoin (BTC), Bitcoin Lightning (LN BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC) and other cryptocurrencies.
                            </p>

                            <p>When you place your order, you’ll be redirected to TripleA to complete your purchase. <br />Your payment to TripleA will pay for your FARFETCH purchase in full. <br />Keep the page open until your payment is successful.</p>

                            <PaymentMethodBtn onClick={() => handlePaymentTab('Bitcoin')}/>
                            <div className="line"></div>

                        </div>
                    </div>
                    </div>}

                    <div className="payment-confirm">
                        {paypalTab &&
                            <div className='paypal-confirm'>
                                <div style={{display: 'flex', justifyContent: '', alignItems: 'center', gap: 30, position: 'relative'}}>
                                    <div><i className='fa-regular fa-circle-check check' style={{color: 'green', top: 6, left: 0, fontSize: 20}}></i></div>
                                    <h2>Payment Method</h2>
                                </div>
                                <img src={Paypal} alt="" />
                                <p>When you place your order, you’ll be redirected to PayPal to complete your purchase.</p>
                                <div className="line"></div>

                                <div className="edit">
                                    <span>Edit</span>
                                    <i className='fa-solid fa-pen-to-square'></i>
                                </div>
                            </div>
                        }

                        {cardTab &&
                            <div className='card-confirm'>
                                <div style={{display: 'flex', justifyContent: '', alignItems: 'center', gap: 30, position: 'relative'}}>
                                    <div><i className='fa-regular fa-circle-check check' style={{color: 'green', top: 6, left: 0, fontSize: 20}}></i></div>
                                    <h2>Payment Method</h2>
                                </div>
                                <img src={Card} alt="" />
                                <p>When you place your order, you’ll be redirected to TripleA to complete your purchase.</p>
                                <div className="line"></div>

                                <div className="edit">
                                    <span>Edit</span>
                                    <i className='fa-solid fa-pen-to-square'></i>
                                </div>
                            </div>
                        }

                        {bitcoinTab &&
                            <div className='crypto-confirm'>
                                <div style={{display: 'flex', justifyContent: '', alignItems: 'center', gap: 30, position: 'relative'}}>
                                    <div><i className='fa-regular fa-circle-check check' style={{color: 'green', top: 6, left: 0, fontSize: 20}}></i></div>
                                    <h2>Payment Method</h2>
                                </div>
                                <img src={Bitcoin} alt="" />
                                <p>When you place your order, you’ll be redirected to TripleA to complete your purchase.</p>
                                <div className="line"></div>

                                <div className="edit">
                                    <span>Edit</span>
                                    <i className='fa-solid fa-pen-to-square'></i>
                                </div>
                            </div>
                        }
                        
                        
                        
                        {/* <p style={{fontSize: '1.2rem', fontWeight: '600', color: '#555555', paddingTop: 30, paddingBottom: 20}}>Secure Payment</p> */}

                    </div>
                </div>

            </div>

            <div className="checkout-right ">

                <div className='checkout-right-header-wrapper sticky'>
                    <div className="checkout-right-header">
                        <h2>Total</h2>
                        <p className='total'>USD ${total}</p>
                    </div>

                    <div className={`place-order ${addressTab && (paypalTab || bitcoinTab || cardTab)  && total > 0 ? 'place-order-active' : ''}`}>
                        <button onClick={handlePlaceOrder}>Place Order</button>
                    </div>
                </div>
                

                <p style={{paddingTop: 30}}>By clicking "Place Order", you agree to our <span>Terms and Conditions</span></p>

                <div className="line"></div>

                <h2 className="summary-title">Summary</h2>

                <div>
                    {cart.map((item) => (
                        <div>
                            <div className="checkout-item">
                                <div className="checkout-item-image">
                                    <img src={item.img} alt="Canon" />
                                </div>

                                <div className="checkout-item-info">
                                    <p style={{fontWeight: '600'}}>{item.name}</p>
                                    <p style={{fontWeight: '600'}}>USD$ {item.price}</p>
                                    <p style={{color: 'gray', fontWeight: '600'}}>{item.code}</p>
                                </div>
                            </div>

                            <div className="line"></div>
                        </div>
                    ))}
                </div>
                

                <div className="delivery-fee">
                    <p>Delivery Fee</p>
                    <p>FREE</p>
                </div>

                <div className="line"></div>

                <div className="checkout-right-header">
                    <h2>Total</h2>
                    <p className='total'>USD ${total}</p>
                </div>

                <div className="promo">
                    <label htmlFor="promo-code">Promo Code</label>
                    <input type="text" placeholder='' name="promo-code"/>
                    <button>Apply</button>
                </div>

            </div>
        </div>  
    </div>
  )
}

export default Checkout
