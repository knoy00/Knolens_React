import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

import LandingPage from "./Components/LandingPage";
import ProductPage from './Components/ProductPage';
import ProductOverview from './Components/ProductOverview';
import Cart from './Components/Cart';
import AuthPage from './Components/AuthPage';

import { useState, useEffect } from 'react';

import './App.css'
import Signinbtn from './Components/Signinbtn';

function App() {
  const [cart, setCart] = useState([]);
  const [showSignin, setShowSignin] = useState(false);


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleSignin = () => {
    setShowSignin(true);
  }

  const handleCloseSignin = () => {
    setShowSignin(false);
  }

  // disable scrolling when Auth Page is opened
  useEffect(() => {
    if (showSignin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showSignin]);
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage cart={cart} />} />
          <Route path='/Product' element={<ProductPage cart={cart}/>}/>
          <Route path='/Product/:id' element={<ProductOverview addToCart={addToCart} cart={cart}/>}/>
          <Route path='/Cart' element={<Cart cart={cart} handleSignin={handleSignin}/>}/>
        </Routes>

        {showSignin && <AuthPage onClose={handleCloseSignin}/>}

      </div>
      
    </Router>
  );
}

export default App;
