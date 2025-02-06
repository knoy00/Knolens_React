import React, { useState, useEffect } from 'react';
import Header from './Header';
import Signinbtn from './Signinbtn';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ConfirmOrderBtn from './ConfirmOrderBtn';
import ScrollToTop from './ScrollToTop';
import { auth } from '../firebase/Auth';
import './Cart.css';

function Cart({ cart, setCart, handleSignin, removeFromCart }) {

    const navigate = useNavigate();
    
    const [user, setUser] = useState(null);
    const [quantities, setQuantities] = useState( 1 ||
        cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );

    const handleQuantityChange = (name, value) => {
        if (value === "" || isNaN(value)) {
            setQuantities(prev => ({ ...prev, [name]: "" })); 
        } else {
            const newQuantity = Math.max(1, Number(value)); 
            setQuantities(prev => ({ ...prev, [name]: newQuantity }));
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const getSubtotal = (item) => (item.price * (quantities[item.name] || 1)).toFixed(2);

    const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * (quantities[item.name] || 1),
        0
    ).toFixed(2);

    return (
        <div>
            <ScrollToTop />
            <Header cart={cart} handleSignin={handleSignin} />

            <div className="cart">
                <h1 style={{ paddingTop: '2rem' }}>Shopping Cart</h1>

                {cart.length === 0 ? (
                    <p style={{ paddingBottom: '15rem' }}>Your cart is empty. Add some items to continue shopping.</p>
                ) : (
                    cart.map((item) => (
                        <div className="cart-container" key={item.id}>
                            <p className="delivery-time">Estimated delivery between 10-15 business days</p>
                            <div className="line"></div>

                            <div className="cart-flex">
                                <div className="left">
                                    <div className="cart-item">
                                        <div className="cart-item-img">
                                            <img src={item.img} alt={item.name} />
                                        </div>

                                        <div className="cart-item-details">
                                            <h3>{item.name}</h3>
                                            <p>{item.code}</p>
                                        </div>

                                        <div className="quantity">
                                            <h3>Quantity</h3>
                                            <input
                                                type="number"
                                                value={quantities[item.name] === "" ? "" : quantities[item.name]} 
                                                min="1"
                                                onChange={(e) => handleQuantityChange(item.name, e.target.value)}
                                                onBlur={() => {
                                                    if (quantities[item.name] === "") {
                                                        setQuantities(prev => ({ ...prev, [item.name]: 1 }));
                                                       
                                                    }
                                                }} 
                                            />
                                        </div>

                                        <div className="price">
                                            <h3>Price</h3>
                                            <p>${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="right">
                                    <div className="subtotal">
                                        <h3>Subtotal:</h3>
                                        <p>${getSubtotal(item)}</p>
                                    </div>

                                    <div className="shipping">
                                        <h3>Shipping:</h3>
                                        <p>$0</p>
                                    </div>

                                    <div className='removeItem' onClick={() => removeFromCart(item)}>
                                        <i className='fa fa-times'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                {cart.length > 0 && (
                    <div className="total-amount-container">
                        <div className="line"></div>
                        <div className='totalAmount'>
                            <p>Total: ${totalAmount}</p>
                        </div>
                    </div>
                )}

                {!user ? (
                    cart.length > 0 ? (
                        <div className='confirm-order-btn-1'>
                            <ConfirmOrderBtn handleSignin={handleSignin} />
                        </div>
                    ) : (
                        <Signinbtn handleSignin={handleSignin} />
                    )
                ) : cart.length > 0 ? (
                    <div className='confirm-order-btn-2'><Link to="/Checkout" className='link_1'><ConfirmOrderBtn /></Link></div>
                ) : null}
            </div>

            <div className="footer-cart">
                <Footer />
            </div>
        </div>
    );
}

export default Cart;
