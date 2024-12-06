import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({cart = []}) {
  console.log(cart);  // Add this inside Header to check if cart is being passed properly

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Product">Products</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </div>

        <div className="search-user">
          <input type="text" placeholder="Search item" className="search-bar" />
          <i className="fa fa-user" id="user"></i>
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
