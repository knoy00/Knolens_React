import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth, checkUser} from '../firebase/Auth';

import './Header.css';

function Header({cart = [],handleSignin}) {
  console.log(cart);  // Add this inside Header to check if cart is being passed properly

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

const navigate = useNavigate();
  const gotoCart = () => {
    navigate("/Cart");
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAccountMenu = () => {
    setIsMenuOpen(true);
  }

  return (
    <header>
      <div className="navbar">
        <div className="logo">
            <Link to="/">
              <span className="logo_black">KNO</span>
              <span className="logo_red">LENS</span>
            </Link>
        </div>
        <div className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Product">Products</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </div>

        <div className="search-user">
          <input type="text" placeholder="Search item" className="search-bar" />
          {user ? (
                    <div className="user-info">
                      <span className='user' onClick={handleAccountMenu}>{user.email}</span>
                      {isMenuOpen && <div className="account-setting">
                        <div>
                          <Link to="/Account" className="account-flex">
                            <i className="fa fa-cog"></i>
                            <span>Account</span>
                          </Link>
                        </div>

                        <div>
                          <Link to="/Orders" className="account-flex">
                            <i className="fa fa-cog"></i>
                            <span>Orders</span>
                          </Link>
                        </div>
                        
                        <div className="">
                          <Link className="account-flex">
                            <i className="fa fa-sign-out"></i>
                            <span onClick={() => auth.signOut()}>Logout</span>
                          </Link>
                          
                        </div>
                      </div>}
                    </div>
                  ) : (
                    <i onClick={handleSignin} className="fa fa-user" id="user"></i>
                  )
          }

          <div className="cart-count" onClick={gotoCart}>
            <i className="fa fa-shopping-cart" id="cart" ></i>
            {cart.length > 0 && <div className='counter'>{cart.length}</div>}
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
