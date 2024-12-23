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
import OrderAndReturn from './Components/OrderAndReturn';

import { registerUser, loginUser, logoutUser, checkUser, auth } from './firebase/Auth';
import {db} from './firebase/firebase'

import { collection, addDoc, onSnapshot, query, where, setDoc, doc, arrayUnion } from 'firebase/firestore';


// Importing page components

import { useState, useEffect } from 'react';
// Importing React hooks for state management and side effects

import './App.css';
// Importing global styles

import Signinbtn from './Components/Signinbtn';
import { onAuthStateChanged } from 'firebase/auth';
// Importing the Sign-in button component

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if(user) {
      const cartQuery = query(
        collection(db, 'carts'),
        where('userId', '==', user.uid)
      );

      const unsubscribe = onSnapshot(cartQuery, (snapshot) => {
        const cartItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setCart(cartItems);
      })

      return () => unsubscribe();
    }
  }, [user]);

  const [orders, setOrders] = useState(() => {
    const ordersData = JSON.parse(localStorage.getItem('orders'));
    return ordersData? ordersData : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);
  
  // State to manage the visibility of the authentication (sign-in) page
  const [showSignin, setShowSignin] = useState(false);
  
  // State to manage the visibility of the sign-in button
  const [signin, setSignin] = useState(false);
  
  // Function to show the sign-in button
  const showSigninBtn = () => {
    setShowSignin(true);
  }
  
  // Function to hide the sign-in button
  const hideSigninBtn = () => {
    setShowSignin(false);
  }
  

  // Function to add a product to the cart
  const addToCart = async (product) => {
    console.log("Adding to cart");
  
    if (!user) {
      alert('You need to log in to add items to your cart.');
      return;
    }
  
    try {
      // Create a reference to the user's cart document
      const cartDocRef = doc(db, 'carts', user.uid); // User's cart document
  
      // Add the new product to the user's cart document
      await setDoc(
        cartDocRef,
        {
          userId: user.uid,
          products: arrayUnion({ // Use arrayUnion to avoid overwriting the cart items
            name: product.name,
            price: product.price,
            code: product.code,
            description: product.description,
            addedAt: new Date() // Optionally include a timestamp
          })
        },
        { merge: true } // Merge the new item with existing cart data
      );
  
      // Optionally, update local state to reflect the new item added
      setCart((prevCart) => [
        ...prevCart,
        {
          name: product.name,
          price: product.price,
          code: product.code,
          description: product.description
        }
      ]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  useEffect(() => {
    if (user) {
      // Directly reference the user's cart document
      const cartDocRef = doc(db, 'carts', user.uid);
  
      const unsubscribe = onSnapshot(cartDocRef, (doc) => {
        if (doc.exists()) {
          const cartData = doc.data();
          // Ensure that the products array exists in the document and update the state
          setCart(cartData?.products || []);
        } else {
          setCart([]); // If there's no cart for the user yet, initialize with an empty array
        }
      });
  
      return () => unsubscribe(); // Cleanup on unmount or user change
    }
  }, [user]);
  
  
  


  const addToOrders = (cart) => {
    setOrders((prevOrders) => [...prevOrders, cart]);
    setCart([]);
  }

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };



  // Function to show the sign-in page
  const handleSignin = () => {
    setShowSignin(true);
  };

  // Function to close the sign-in page
  const handleCloseSignin = () => {
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

          <Route path='/Checkout'  element={<Checkout cart={cart} addToOrders={addToOrders}/>}/>

          <Route path='/OrderAndReturn'  element={<OrderAndReturn handleSignin={handleSignin} orders={orders} addToOrders={addToOrders}/>}/>
        </Routes>

        {/* Render the authentication page if `showSignin` is true */}
        {showSignin && <AuthPage showSignin={showSignin} onClose={handleCloseSignin} />}

        
      </div>
    </Router>
  );
}

export default App;
// Exporting the App component as the default export
