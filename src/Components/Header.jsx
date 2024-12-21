import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logoutUser } from "../firebase/Auth";

import "./Header.css";
function Header({ cart = [], handleSignin }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const gotoCart = () => navigate("/Cart");

  const handleAccountMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleLogout = async () => {
    try {
      setIsMenuOpen(false);
      setLoading(true);
      await logoutUser();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      alert("Error logging out: " + error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Product">Products</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </div>
        <div className="search-user">
          <input
            type="text"
            placeholder="Search item"
            className="search-bar"
            value={searchTerm}
            onChange={handleSearch}
          />
          {user ? (
            <div className="user-info">
              <span
                className="user"
                onClick={handleAccountMenu}
                aria-expanded={isMenuOpen}
              >
                {user.email}
              </span>
              {isMenuOpen && (
                <div className="account-setting" ref={menuRef}>
                  <Link to="/Account" onClick={() => setIsMenuOpen(false)} className="account-flex">
                    <i className="fa fa-cog"></i>
                    <span>Account</span> 
                  </Link>
                  <Link to="/OrderAndReturn" onClick={() => setIsMenuOpen(false)} className="account-flex">
                    <i className="fa fa-file-invoice"></i> 
                    <span>Orders</span>
                  </Link>
                  <Link onClick={handleLogout} className="account-flex">
                    <i className="fa fa-sign-out"></i> 
                    <span>Logout</span>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="user-icon">
              <i onClick={handleSignin} className="fa fa-user" id="user"></i>
              {loading && <div className="loader"></div>}
            </div>
          )}
          <div className="cart-count" onClick={gotoCart}>
            <i className="fa fa-shopping-cart" id="cart"></i>
            {cart.length > 0 && <div className="counter">{cart.length}</div>}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;