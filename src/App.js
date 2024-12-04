import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

import LandingPage from "./Components/LandingPage";
import ProductPage from './Components/ProductPage';
import ProductOverview from './Components/ProductOverview';
import Cart from './Components/Cart';
import AuthPage from './Components/AuthPage';

import { useState } from 'react';

import './App.css'
import Signinbtn from './Components/Signinbtn';

function App() {
  const [cart, setCart] = useState([]);
  const [showSignin, setShowSignin] = useState(false);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSignin = () => {
    setShowSignin(true);
  }

  const handleCloseSignin = () => {
    setShowSignin(false);
  }
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Product' element={<ProductPage />}/>
          <Route path='/Product/:id' element={<ProductOverview addToCart={addToCart}/>}/>
          <Route path='/Cart' element={<Cart cart={cart} handleSignin={handleSignin}/>}/>
        </Routes>

        {showSignin && <AuthPage onClose={handleCloseSignin}/>}

      </div>
      
    </Router>
  );
}

export default App;
