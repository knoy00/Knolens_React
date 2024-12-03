import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
const navigate = useNavigate();
  const gotoCart = () => {
    navigate("/Cart");
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
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/Product">Products</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </div>

        <div className="search-user">
          <input type="text" placeholder="Search item" className="search-bar" />
          <i className="fa fa-user" id="user"></i>
          <i className="fa fa-shopping-cart" id="cart" onClick={gotoCart}></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
