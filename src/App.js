import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
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
import { db } from './firebase/firebase';
import { collection, addDoc, onSnapshot, query, where, setDoc, doc, arrayUnion, updateDoc, arrayRemove, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import './App.css';
import Signinbtn from './Components/Signinbtn';
import { onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(() => {
    const ordersData = JSON.parse(localStorage.getItem('orders'));
    return ordersData ? ordersData : [];
  });
  const [showSignin, setShowSignin] = useState(false);
  const [signin, setSignin] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const cartQuery = query(
        collection(db, 'carts'),
        where('userId', '==', user.uid)
      );

      const unsubscribe = onSnapshot(cartQuery, (snapshot) => {
        const cartItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setCart(cartItems);
      });

      return () => unsubscribe();
    }
  }, [user]);

  // Fetching data
  useEffect(() => {
    if (user) {
      const cartDocRef = doc(db, 'carts', user.uid);

      const unsubscribe = onSnapshot(cartDocRef, (doc) => {
        if (doc.exists()) {
          const cartData = doc.data();
          setCart(cartData?.products || []);
        } else {
          setCart([]);
        }
      });

      return () => unsubscribe();
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (showSignin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showSignin]);

  const showSigninBtn = () => {
    setShowSignin(true);
  };

  const hideSigninBtn = () => {
    setShowSignin(false);
  };

 
  const addToCart = async (product) => {
    console.log(product)

    if (!user) {
      alert('You need to log in to add items to your cart.');
      return;
    }
    try {
      const cartDocRef = doc(db, 'carts', user.uid);

      await setDoc(
        cartDocRef,
        {
          userId: user.uid,
          products: arrayUnion({
            name: product.name,
            price: product.price,
            code: product.code,
            img: product.img,
            description: product.description,
            addedAt: new Date()
          })
        },
        { merge: true }
      );

      setCart((prevCart) => [
        ...prevCart,
        {
          name: product.name,
          price: product.price,
          code: product.code,
          description: product.description,
          img: product.img,
        }
      ]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (product) => {

    if (!user) {
      alert('You need to log in to add items to your cart.');
      return;
    }

    try {
      // Fetch the current cart data to get the exact object
      const cartDocRef = doc(db, 'carts', user.uid);
      const cartDocSnapshot = await getDoc(cartDocRef);
      const cartData = cartDocSnapshot.data();


      console.log("Updating Firestore")

      const productToRemove = cartData.products.find((item) => item.code === product.code);

      if(productToRemove) {
        await updateDoc(cartDocRef, {
          products: arrayRemove(productToRemove)
        });
      }

      // Remove from UI state
      setCart((prevCart) => prevCart.filter((item) => item.code !== product.code));

      console.log("removed product from cart");
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const addToOrders = (cart) => {
    setOrders((prevOrders) => [...prevOrders, cart]);
    setCart([]);
  };


  const handleSignin = () => {
    setShowSignin(true);
  };

  const handleCloseSignin = () => {
    setShowSignin(false);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage cart={cart} handleSignin={handleSignin} />} />
          <Route path='/Product' element={<ProductPage cart={cart} handleSignin={handleSignin} />} />
          <Route path='/Product/:id' element={<ProductOverview addToCart={addToCart} cart={cart} handleSignin={handleSignin} />} />
          <Route path='/Cart' element={<Cart removeFromCart={removeFromCart} cart={cart} handleSignin={handleSignin} showSigninBtn={showSigninBtn} hideSigninBtn={hideSigninBtn} />} />
          <Route path='/Contact' element={<ContactUs handleSignin={handleSignin} />} />
          <Route path='/Shop' element={<Shop handleSignin={handleSignin} />} />
          <Route path='/Checkout' element={<Checkout cart={cart} addToOrders={addToOrders} />} />
          <Route path='/OrderAndReturn' element={<OrderAndReturn handleSignin={handleSignin} orders={orders} addToOrders={addToOrders} />} />
        </Routes>

        {showSignin && <AuthPage showSignin={showSignin} onClose={handleCloseSignin} />}
      </div>
    </Router>
  );
}

export default App;
