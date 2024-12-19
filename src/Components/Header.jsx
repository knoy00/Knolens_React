import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logoutUser } from "../firebase/Auth";

import "./Header.css";

function Header({ cart = [], handleSignin }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Handle Navigation to Cart page
  const navigate = useNavigate();
  const gotoCart = () => {
    navigate("/Cart");
  };

  // Handling the state of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleAccountMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Handling clicks outside the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Close menu when an option is clicked
  const handleOptionClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Product">Products</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </div>

        <div className="search-user">
          <input
            type="text"
            placeholder="Search item"
            className="search-bar"
          />
          {user ? (
            <div className="user-info">
              <span className="user" onClick={handleAccountMenu}>
                {user.email}
              </span>
              {isMenuOpen && (
                <div className="account-setting" ref={menuRef}>
                  <div>
                    <Link
                      to="/Account"
                      className="account-flex"
                      onClick={handleOptionClick}
                    >
                      <i className="fa fa-cog"></i>
                      <span>Account</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/Orders"
                      className="account-flex"
                      onClick={handleOptionClick}
                    >
                      <i className="fa fa-cog"></i>
                      <span>Orders</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="account-flex"
                      onClick={() => {
                        handleOptionClick();
                        logoutUser();
                      }}
                    >
                      <i className="fa fa-sign-out"></i>
                      <span>Logout</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <i
              onClick={handleSignin}
              className="fa fa-user"
              id="user"
            ></i>
          )}

          <div className="cart-count" onClick={gotoCart}>
            <i className="fa fa-shopping-cart" id="cart"></i>
            {cart.length > 0 && (
              <div className="counter">{cart.length}</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
