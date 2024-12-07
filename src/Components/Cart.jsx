import React, { useState } from 'react';
import Header from './Header'; // Header component to display at the top of the page
import Signinbtn from './Signinbtn'; // Sign-in button component
import { Link } from 'react-router-dom'; // React Router's Link for navigation
import Footer from './Footer'; // Footer component to display at the bottom of the page
import AuthPage from './AuthPage'; // Authentication page (optional)
import Checkout from './Checkout';
import ConfirmOrderBtn from './ConfirmOrderBtn';
import ScrollToTop from './ScrollToTop';

import './Cart.css'; // CSS file for styling the cart page

// Cart Component
function Cart({ cart, handleSignin, handleCloseSignin, signin, removeFromCart}) {
    console.log(cart); // Logs the cart content for debugging


    return (
        <div>
            <ScrollToTop />
            {/* Header component receives the cart as a prop */}
            <Header cart={cart} handleSignin={handleSignin}/>

            {/* Main cart section */}
            <div className="cart">
                <h1>Shopping Cart</h1>

                {/* Display a message if the cart is empty */}
                {cart.length === 0 ? (
                    <p style={{ paddingBottom: '2rem' }}>Your cart is empty. Add some items to continue shopping.</p>
                ) : (
                    // Map through the cart items and display each one
                    cart.map((item) => (
                        <div className="cart-container" key={item.id}>
                           
                            {/* Estimated delivery time */}
                            <p className="delivery-time">Estimated delivery between 10-15 business days</p>
                            <div className="line"></div> {/* Divider line */}

                            {/* Cart item details */}
                            <div className="cart-flex">
                                {/* Remove item from cart button */}
                                <div className='removeItem' onClick={() => removeFromCart(item)}>
                                    <i className='fa fa-times'></i>
                                </div>

                                {/* Left section: item image and details */}
                                <div className="left">
                                    <div className="cart-item">
                                        <div className="cart-item-img">
                                            <img src={item.img} alt={item.name} />
                                        </div>

                                        <div className="cart-item-details">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                            <p>Price: ${item.price}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right section: order summary */}
                                <div className="right">
                                    <div className="subtotal">
                                        <p>Subtotal:</p>
                                        <p>${item.price}</p>
                                    </div>

                                    <div className="shipping">
                                        <p>Shipping:</p>
                                        <p>$0</p>
                                    </div>

                                    
                                    
                                    {/* Total amount */}
                                    {/* <div className="total">
                                        <p>Total:</p>
                                        <p>${item.price}</p>
                                    </div> */}

                                    {/* Checkout button (currently commented out) */}
                                    {/* <div className='checkout'>
                                        <Link to="/checkout">
                                            <button>Checkout</button>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                            
                        </div>
                    ))
                )}
                <div className="line"></div> {/* Divider line */}
                {cart.length > 0 && <div className='totalAmount'>
                    <p>Total: $33</p>
                </div>}

                {/* Display sign-in button if the user is not signed in */}
                {!signin ? (
                    cart.length > 0 ? (
                        <ConfirmOrderBtn handleSignin={handleSignin}/>
                    ) : (
                        <Signinbtn handleSignin={handleSignin} />
                    )
                ) : null}

            </div>

            {/* Contact section for customer support */}
            <div className="contact">
                <div className="need-help">
                    <h3>Need help?</h3>
                    <p>
                        Contact our global Customer Service team, you can reach us by phone or
                        email. Alternatively, you may find the answer in our Frequently Asked
                        Questions page.
                    </p>
                </div>

                {/* Call us section */}
                <div className="call-us">
                    <div className="title-flex">
                        <i className="fa-solid fa-phone"></i>
                        <h3>Call us</h3>
                    </div>
                    <p>+1 (800) 123-4567</p>
                    <span>
                        Monday to Friday: 8:00am to 5:00pm <br /> GMT
                    </span>
                </div>

                {/* Email us section */}
                <div className="email-us">
                    <div className="title-flex">
                        <i className="fa-solid fa-envelope"></i>
                        <h3>Click here to send us an email</h3>
                    </div>
                    <p>Customer Service</p>
                </div>

                {/* FAQs section */}
                <div className="faqs">
                    <div className="title-flex">
                        <i className="fa-solid fa-question"></i>
                        <h3>FAQs</h3>
                    </div>
                    <p>
                        Find the answers you need in our <Link to="/faqs">FAQs</Link>
                    </p>
                </div>
            </div>

            {/* Footer component */}
            <Footer />
            <Checkout />
        </div>
    );
}

export default Cart;
