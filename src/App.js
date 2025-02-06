import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from './firebase/firebase';
import { collection, addDoc, onSnapshot, query, where, setDoc, doc, arrayUnion, updateDoc, arrayRemove, getDoc, getDocs } from 'firebase/firestore';
import { registerUser, loginUser, logoutUser, checkUser, auth } from './firebase/Auth';
import './App.css';

import LandingPage from './Components/LandingPage';
import ProductPage from './Components/ProductPage';
import ProductOverview from './Components/ProductOverview';
import Cart from './Components/Cart';
import AuthPage from './Components/AuthPage';
import Checkout from './Components/Checkout';
import ContactUs from './Components/ContactUs';
import Shop from './Components/Shop';
import OrderAndReturn from './Components/OrderAndReturn';
import Signinbtn from './Components/Signinbtn';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [returns, setReturns] = useState([]);
  const [showSignin, setShowSignin] = useState(false);
  const [signin, setSignin] = useState(false);
  const [addresses, setAddresses] = useState([]);

  const handleSignin = () => setShowSignin(true);
  const handleCloseSignin = () => setShowSignin(false);

  function generateTrackingId() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    return `ID-${timestamp}-${randomNum}`;
  }

  function generateOrderId() {
    const randomNum = Math.floor(Math.random() * 100000);
    return `KL-${randomNum}`;
  }

  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cart));
  // }, [cart]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
  
        const cartDocRef = doc(db, 'carts', currentUser.uid);
        const cartDocSnapshot = await getDoc(cartDocRef);
        let firestoreCart = [];
  
        if (cartDocSnapshot.exists()) {
          const cartData = cartDocSnapshot.data();
          firestoreCart = cartData.products || [];
        }
  
        const sessionCart = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  
        const uniqueSessionCart = sessionCart.filter(
          (sessionItem) =>
            !firestoreCart.some((firestoreItem) => firestoreItem.code === sessionItem.code)
        );
  
        const mergedCart = [...firestoreCart, ...uniqueSessionCart];
  
        setCart(mergedCart);
  
        await setDoc(cartDocRef, { products: mergedCart }, { merge: true });
  
        sessionStorage.removeItem('cartItems');
      } else {
        setUser(null);
        setCart([]);
      }
    });
  
    return () => unsubscribe();
  }, []);
  
  

  useEffect(() => {
    if (user) {
      const cartDocRef = doc(db, 'carts', user.uid);

      const unsubscribe = onSnapshot(cartDocRef, (doc) => {
        if (doc.exists()) {
          const cartData = doc.data();
          if (Array.isArray(cartData.products)) {
            setCart(cartData.products);
          } else {
            console.warn('Cart products is not an array:', cartData.products);
            setCart([]);
          }
        } else {
          setCart([]);
        }
      });

      return () => unsubscribe();
    }
  }, [user]);

  const safeStringify = (obj) => {
    const seen = new Set();

    const filterOutGlobals = (key, value) => {
      if (value instanceof Window || value instanceof Document || value instanceof HTMLElement) {
        return undefined;
      }
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return; 
        }
        seen.add(value);
      }
      return value;
    };

    return JSON.stringify(obj, filterOutGlobals);
  };

  useEffect(() => {
    localStorage.setItem('orders', safeStringify(orders));
  }, [orders]);

  useEffect(() => {
    if (showSignin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showSignin]);

  const showSigninBtn = () => setShowSignin(true);
  const hideSigninBtn = () => setShowSignin(false);

  const addToCart = async (product, quantity) => {
    if (user) {
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
              addedAt: new Date(),
              quantity: quantity || 1,
            }),
          },
          { merge: true }
        );
  
        const cartDocSnapshot = await getDoc(cartDocRef);
        if (cartDocSnapshot.exists()) {
          const cartData = cartDocSnapshot.data();
          setCart(cartData.products);
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    } else {
      const currentCart = JSON.parse(sessionStorage.getItem('cartItems')) || [];
      const updatedCart = [
        ...currentCart,
        {
          name: product.name,
          price: product.price,
          code: product.code,
          img: product.img,
          description: product.description,
          addedAt: new Date(),
        },
      ];
  
      sessionStorage.setItem('cartItems', JSON.stringify(updatedCart));
  
      setCart(updatedCart);
    }
  };
  
  
  

  const removeFromCart = async (product) => {
    if (user) {
      try {
        const cartDocRef = doc(db, 'carts', user.uid);
        const cartDocSnapshot = await getDoc(cartDocRef);
  
        if (cartDocSnapshot.exists()) {   
          const cartData = cartDocSnapshot.data();
  
          const productToRemove = cartData.products.find((item) => item.code === product.code);
  
          if (productToRemove) {
            await updateDoc(cartDocRef, {
              products: arrayRemove(productToRemove), 
            });
  
            console.log('Product removed from Firestore.');
          }
        }
  
        setCart((prevCart) => prevCart.filter((item) => item.code !== product.code));
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    } else {
      const cart = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  
      const updatedCart = cart.filter((item) => item.code !== product.code);
      sessionStorage.setItem('cartItems', JSON.stringify(updatedCart));

      setCart(updatedCart)
  
      console.log('Product removed from session storage.');
    }
  };
  
  useEffect(() => {
    console.log('Updated cart:', cart);
  }, [cart]);

  

  const createOrder = async (cart) => {
    if (!user) {
      alert('Please log in to place an order');
      return;
    }

    try {
      const ordersRef = doc(db, 'orders', user.uid);

      const calculateTotal = (cart) =>
        cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      const orderData = {
        products: [...cart],
        totalAmount: calculateTotal(cart),
        timestamp: new Date(),
        status: 'pending',
        Tracking_ID: generateTrackingId(),
        order_ID: generateOrderId(),
      };

      const ordersDoc = await getDoc(ordersRef);

      if (ordersDoc.exists()) {
        await updateDoc(ordersRef, {
          orders: arrayUnion(orderData),
        });
      } else {
        await setDoc(ordersRef, {
          orders: [orderData],
        });
      }

      setCart([]);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place the order. Please try again later.');
    }
  };

  const fetchOrders = async (userId) => {

    try {
      const ordersRef = doc(db, 'orders', userId);
      const ordersDoc = await getDoc(ordersRef);

      if (ordersDoc.exists()) {
        const data = ordersDoc.data();
        return data.orders || [];
      } else {
        alert('No orders found for this user.');
        return [];
      }
    } catch (error) {
      alert('Error fetching orders:', error);
      return [];
    }
  };

  const getOrders = async () => {
    if (!user) return;
    const userOrders = await fetchOrders(user.uid);
    setOrders(userOrders);
    console.log(userOrders);
  };

  // useEffect(() => {
  //   if (user) {
  //     getOrders();
  //   }
  // }, [user]);

  // const addToAddress = async (addressInfo) => {
  //   if(user){
  //     try{
  //       const addressRef = doc(db, 'addresses', user.uid);
  
  //       await setDoc(
  //         addressRef,
  //         {
  //           userId: user.uid,
  //           address: arrayUnion({
  //             Firstname: addressInfo.Firstname,
  //             Lastname: addressInfo.Lastname,
  //             Address: addressInfo.Address,
  //             City: addressInfo.City,
  //             State: addressInfo.State,
  //             Zip: addressInfo.Zip,
  //             Phone: addressInfo.Phone,
  //             Email: addressInfo.Email
              
  //           })
  //         },
  //         { merge: true }
  //       );
  
  //       //Fetch the address from Firestore
  //       const addressDocSnapshot = await getDoc(addressRef);
  //       if(addressDocSnapshot.exists()){
  //         const addressData = addressDocSnapshot.data();
  //         setAddresses(addressData.address);
  //         alert("data addes")
  //       }
  //     } catch (error){
  //       console.error("Error adding address" + error);
  //       alert("Error adding address" + error);
  //     }
  //   }
  // }

  const addToAddress = async (addressInfo) => {
    if (user) {
      try {
        const addressRef = doc(db, 'addresses', user.uid);
  
        await setDoc(
          addressRef,
          {
            userId: user.uid,
            address: arrayUnion({
              firstName: addressInfo.firstName || "",
              lastName: addressInfo.lastName || "",
              address: addressInfo.address || "",
              city: addressInfo.city || "",
              state: addressInfo.state || "",
              zip: addressInfo.zip || "",
              phone: addressInfo.phone || "",
              email: addressInfo.email || "",
            }),
          },
          { merge: true } 
        );
  
        console.log("Address added successfully!");
      } catch (error) {
        console.error("Error adding address:", error.message);
      }
    }
  };
  
  
  const fetchAddress = async () => {
    if (user) {
      try{
        const addressRef = doc(db, 'addresses', user.uid);
        const addressDoc = await getDoc(addressRef);
  
        if(addressDoc.exists()){
          const data = addressDoc.data();
          console.log("Fetched data na: ", data)
          setAddresses(data.address || [])
        } else {
          alert("No address found for this user.");
        }
      } catch(error){
        
        console.error("Error fetching address: " + error.message)
      }
    } 
  }

  useEffect(() => {
    fetchAddress()
  }, [])

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage cart={cart} handleSignin={handleSignin} />} />
          <Route path="/Product" element={<ProductPage cart={cart} handleSignin={handleSignin} />} />
          <Route path="/Product/:id" element={<ProductOverview addToCart={addToCart} cart={cart} handleSignin={handleSignin} />} />
          <Route path="/Cart" element={<Cart removeFromCart={removeFromCart} cart={cart} handleSignin={handleSignin} showSigninBtn={showSigninBtn} hideSigninBtn={hideSigninBtn} addToCart={addToCart} setCart={setCart}/>} />
          <Route path="/Contact" element={<ContactUs handleSignin={handleSignin} cart={cart}/>} />
          <Route path="/Shop" element={<Shop handleSignin={handleSignin} cart={cart}/>} />
          <Route path="/Checkout" element={<Checkout cart={cart} createOrder={createOrder} removeFromCart={removeFromCart} setCart={setCart} user={user} getOrders={getOrders} fetchAddress={fetchAddress} addToAddress={addToAddress} addresses={addresses}/>} />
          <Route path="/OrderAndReturn" element={<OrderAndReturn handleSignin={handleSignin} orders={orders} returns={returns} user={user} cart={cart} setOrders={setOrders} getOrders={getOrders}fetchOrders={fetchOrders} />} />
        </Routes>
        {showSignin && <AuthPage showSignin={showSignin} onClose={handleCloseSignin} />}
      </div>
    </Router>
  );
}

export default App;
