import React, { useState } from 'react';
import Header from './Header';
import Signinbtn from './Signinbtn';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import './Cart.css';

function Cart({ cart }) {
    const [signIn, setSignIn] = useState(false);

    return (
        <div>
            <Header />
            <div className="cart">
                <h1>Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty. Add some items to continue shopping.</p>
                ) : (
                    cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                        </div>
                    ))
                )}
                <Signinbtn />
            </div>

            <div className="contact">
                <div className="need-help">
                    <h3>Need help?</h3>
                    <p>
                        Contact our global Customer Service team, you can reach us by phone or
                        email. Alternatively, you may find the answer in our Frequently Asked
                        Questions page.
                    </p>
                </div>

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

                <div className="email-us">
                    <div className="title-flex">
                        <i className="fa-solid fa-envelope"></i>
                        <h3>Click here to send us an email</h3>
                    </div>
                    <p>Customer Service</p>
                </div>

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

            <Footer />
        </div>
    );
}

export default Cart;
