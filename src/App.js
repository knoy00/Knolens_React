import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing routing components from react-router-dom for navigation

import '@fortawesome/fontawesome-free/css/all.css';
// Importing FontAwesome CSS for icons

import LandingPage from "./Components/LandingPage";
import ProductPage from './Components/ProductPage';
import ProductOverview from './Components/ProductOverview';
import Cart from './Components/Cart';
import AuthPage from './Components/AuthPage';
import Checkout from './Components/Checkout';
import ContactUs from './Components/ContactUs';
import Shop from './Components/Shop';

import { registerUser, loginUser, logoutUser, checkUser, auth } from './firebase/Auth';

// Importing page components

import { useState, useEffect } from 'react';
// Importing React hooks for state management and side effects

import './App.css';
// Importing global styles

import Signinbtn from './Components/Signinbtn';
// Importing the Sign-in button component

function App() {
  const [cart, setCart] = useState([]);
  // State to keep track of items in the cart

  const [showSignin, setShowSignin] = useState(false);
  // State to manage the visibility of the authentication (sign-in) page

  const [signin, setSignin] = useState(false);
  // State to manage the visibility of the sign-in button

  const showSigninBtn = () => {
    setShowSignin(true);
  }
  // Function to show the sign-in button

  const hideSigninBtn = () => {
    setShowSignin(false);
  }
  // Function to hide the sign-in button

  const addToCart = (product) => {
    // Function to add a product to the cart
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    // Function to remove a product from the cart
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const handleSignin = () => {
    // Function to show the sign-in page
    setShowSignin(true);
  };

  const handleCloseSignin = () => {
    // Function to close the sign-in page
    setShowSignin(false);
  };

  // Side effect: Disable scrolling when the authentication page is open
  useEffect(() => {
    if (showSignin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showSignin]); // Re-run this effect whenever `showSignin` changes
  
  return (
    <Router>
      {/* Router provides navigation between different pages */}
      <div>
        <Routes>
          {/* Define application routes */}

          <Route path='/' element={<LandingPage cart={cart} handleSignin={handleSignin}/>} />
          {/* Landing page route */}

          <Route path='/Product' element={<ProductPage cart={cart} handleSignin={handleSignin}/>} />
          {/* Product listing page route */}

          <Route path='/Product/:id' element={<ProductOverview addToCart={addToCart} cart={cart} handleSignin={handleSignin}/>} />
          {/* Product details page route with dynamic product ID */}

          <Route path='/Cart' element={<Cart removeFromCart={removeFromCart} cart={cart} handleSignin={handleSignin} showSigninBtn={showSigninBtn} hideSigninBtn={hideSigninBtn}/>} />
          {/* Cart page route */}

          <Route path='/Contact' element={<ContactUs handleSignin={handleSignin} />}  />
          {/* Contact page route */}

          <Route path='/Shop' element={<Shop handleSignin={handleSignin} />}  />
          {/* Shop page route */}

          <Route path='/Checkout'  element={<Checkout cart={cart}/>}/>
        </Routes>

        {/* Render the authentication page if `showSignin` is true */}
        {showSignin && <AuthPage showSignin={showSignin} onClose={handleCloseSignin} />}

        
      </div>
    </Router>
  );
}

export default App;
// Exporting the App component as the default export
