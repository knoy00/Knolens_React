import React from 'react'
import {Link} from 'react-router-dom'
import Paypal from '../assets/images/paypal.png'
import Card from '../assets/images/card.png'
import Bitcoin from '../assets/images/bitcoin.png'
import ScrollToTop from './ScrollToTop'
import PaymentMethodBtn from './PaymentMethodBtn'
import ConfirmBtn from './ConfirmBtn'

import { db } from '../firebase/firebase';
import {setDoc, doc,} from 'firebase/firestore';

import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import './Checkout.css'

function Checkout({cart ,createOrder, addresses, removeFromCart, setCart, user, addToAddress, fetchAddress}) {
    
    const navigate = useNavigate();
    const loadRef = useRef(null);

    const handleScrollToBottom = () => {
        
        window.scrollTo({
          top: window.innerHeight * 1.2,
          behavior: "smooth",
        });
    };
    
    const [savedAddress, setSavedAddress] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
      });
      
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      validateForm();
    };

    const [cardData, setCardData] = useState({
        name: '',
        number: '',
        cvc: '',
        expiry: '',
    });

    const handleCardChange = (e) => {
      const { name, value } = e.target;
      setCardData({ ...cardData, [name]: value });      
    };
      
    const[allFields, setAllFields] = useState(false);

    const validateForm = () => {
        if (formData.firstName && formData.lastName && formData.phone && formData.address && formData.city && formData.zip) {
            setAllFields(true);
        }
        else{
            setAllFields(false);
        }
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

    const handleAddAddress = (e) => {
        const { country, ...addressData } = formData;
        addToAddress(addressData);
    }

    console.log(addresses)

    const handlePlaceOrder = async () => {
        if (!user) {
            alert('You need to log in first to place an order');
            return;
        }
        console.log("Cart data received:", cart);
        console.log("Checkout.js2", Array.isArray(cart) ? "Array" : "Not Array");
    
        if (addressTab && (paypalTab || bitcoinTab || cardTab) && total > 0) {
            if (loadRef.current) {
                loadRef.current.style.width = "40%";
    
                setTimeout(() => {
                    if (loadRef.current) {
                        loadRef.current.style.width = "70%";
                    }
                }, 2000);
    
                setTimeout(async () => {
                    if (loadRef.current) {
                        loadRef.current.style.width = "100%";
    
                        setTimeout(async () => {
                            if (loadRef.current) {
                                loadRef.current.style.display = "none";

                                try {
                                    console.log("Checkout.js - Cart before order submission:", cart);
                                
                                    if (!Array.isArray(cart)) {
                                      throw new Error("Cart is not an array.");
                                    }
                                    cart.forEach((item, index) => {
                                      if (typeof item !== "object" || item === null) {
                                        throw new Error(`Cart item at index ${index} is invalid: ${item}`);
                                      }
                                    });
                                
                            
                                    const cartDocRef = doc(db, "carts", user.uid);
                                    await setDoc(cartDocRef, { products: [] }, { merge: true });
                                
                                    createOrder(cart)

                                    navigate("/OrderAndReturn");
                                  } catch (error) {
                                    console.error("Error handling order:", error);
                                  }
                                  
                            }
                        }, 500);
                    }
                }, 2500);
            }
        }
    };
    
    const handleFetchAddress = () => {
        setIsLoading(true); 
    
        setTimeout(() => {
            if (user) {
                setSavedAddress(true);
                fetchAddress().then(() => {
                    setTimeout(() => {
                        handleScrollToBottom();
                        setIsLoading(false); 
                    }, 500);
                });
            }
        }, 2000); 
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
                   { user && <div className='address_btn'>
                        <button onClick={handleFetchAddress}>Check Saved Address</button>
                       {isLoading &&  <div className="loader_2"></div>}
                    </div>}
                    
                    <h2>Delivery Address</h2>

                    <p>Add your delivery address</p>

                    <span>*Required fields</span>
                    <span className="cancel">Cancel</span>

                    <div className="names">
                        <div className="first-name">
                            <label htmlFor="firstName">First name<span>*</span></label>
                            <input 
                            type="text" 
                            placeholder='' 
                            name='firstName' 
                            required 
                            value={formData.firstName} 
                            onChange={(e) => {
                                
                                handleChange(e)}} />
                            {formData.firstName.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                        </div>

                        <div className="last-name">
                            <label htmlFor="lastName">Last name<span>*</span></label>
                            <input 
                            type="text" 
                            placeholder='' 
                            name='lastName' 
                            required 
                            value={formData.lastName} 
                            onChange={(e) => {
                                handleChange(e)
                                validateForm()}}/> 
                            {formData.lastName.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}              
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
                        <label htmlFor="address">Address<span>*</span></label>
                        <input 
                        type="text" 
                        name="address" 
                        required 
                        value={formData.address} 
                        onChange={(e) => {
                            handleChange(e)
                        }}/>
                        {formData.address.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                    </div>

                    <div className="city">
                        <label htmlFor="city">City<span>*</span></label>
                        <input 
                        type="text" 
                        name="city" 
                        required 
                        value={formData.city} 
                        onChange={(e) => {
                            handleChange(e)
                        }}/>
                        {formData.city.length > 1 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                    </div>

                    <div className='state-wrapper'>
                        <div className="state">
                            <label htmlFor="state">State/Province</label>
                            <input type="text" name="state" value={formData.state} onChange={(e) => handleChange(e)}/>
                            {formData.state.length > 0 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                        </div>

                        <div className="zip">
                            <label htmlFor="zip">Postal/Zip Code <span>*</span></label>
                            <input 
                            type="text" 
                            required 
                            name="zip" 
                            value={formData.zip} 
                            onChange={(e) => {
                                handleChange(e)
                            }}/>
                            {formData.zip.length >= 5 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                        </div>
                    </div>

                    <div className="mobile">
                        <label htmlFor="phone">Phone<span>*</span></label>
                        <input 
                        type="text" 
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => {
                            handleChange(e)
                            validateForm();
                            }}/>
                        {formData.phone.length >= 10 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
                        <span style={{fontSize: "0.8rem"}}>We will not share your phone number</span>
                    </div>

                    <div className="billing-address-check">
                        <input type="checkbox" id="billing-address" name="billing-address" />
                        <label for="billing-address">Use as billing address</label>
                    </div>

                    {allFields && (
                        <>
                            <ConfirmBtn 
                                onClick={() => {
                                    confirmAddress(allFields);
                                    handleAddAddress();
                                }}
                            />
                            <p style={{fontSize: "0.8rem", marginTop: -10}}>By clicking on confirm, your address will be saved for future use.</p>
                        </>
                    )}

                </div>}



               {addressTab && <div className="address-tab">
                    <div style={{display: 'flex', justifyContent: '', alignItems: 'center', gap: 30, position: 'relative'}}>
                        
                        {/* <i className='fa-solid fa-pen-to-square'></i> */}
                        <div><i className='fa-regular fa-circle-check check' style={{color: 'green', top: 6, left: 0, fontSize: 20}}></i></div>
                        <h2>Delivery Address</h2>
                    </div>

                    
                    <p>{formData.firstName} {formData.lastName}</p>
                    <p>{formData.city}</p>
                    <p>{formData.zip}</p>
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
                                        <input type="text" name="card-name" required placeholder='John Doe' value={cardData.name} onChange={(e) => handleCardChange(e)}/>
                                        {cardData.name.length > 2 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}

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
                                            value={cardData.number} 
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                const formattedValue = inputValue
                                                  .replace(/\D/g, "") 
                                                  .match(/.{1,4}/g) 
                                                  ?.join(" ") || "";
                                                handleCardChange({ ...cardData, number: formattedValue })}}/>
                                            {cardData.number.length >= 14 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
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
                                        value={cardData.code} 
                                        onChange={(e) => handleCardChange({ ...cardData, cvc: e.target.value })}/>
                                        {cardData.cvc.length === 3 && <i className='fa-regular fa-circle-check check' style={{color: 'green'}}></i>}
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

                        </div>
                    }

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
                    {total < 1000 ? <p>FREE</p> : <p>USD $ {0.01 * total}</p>}
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

        { savedAddress && <div className='saved-address-wrapper'>
            <div className='saved-address-header'>
                <h1>Saved Address</h1>
                <p></p>
            </div>
            <div className='saved-address'>
               { addresses.map((item, itemIndex) => {

                    return (
                        <div key={itemIndex} className='saved-address-item'>
                            <div>
                                <div className="saved-address-item-header">
                                    <h2>Address. {itemIndex + 1}</h2>
                                    <p>Delete Address</p>
                                </div>
                                
                                <div className="line"></div>
                                <p><span>Firstname: </span>{item.firstName}</p>
                                <p><span>Lastname: </span>{item.lastName}</p>
                                <p><span>Adddress: </span>{item.address}</p>
                                <p><span>City: </span>{item.city}</p>
                                <p><span>State: </span>{item.state}</p>
                                <p><span>Phone: </span>{item.phone}</p>
                                <p><span>Zip: </span>{item.zip}</p>

                            </div>
                        </div>
                        
                    )
                    }
                )}

            </div>
        </div>}

    </div>
  )
}

export default Checkout
