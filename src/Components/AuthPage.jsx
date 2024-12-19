import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser, loginUser, logoutUser, checkUser, auth } from '../firebase/Auth';
// Importing Link for navigation between routes

import './Authtest.css';
// Importing styles for the component

import google from '../assets/images/google-small.png';
import apple from '../assets/images/apple-logo.png';
// Importing images for Google and Apple login options

import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
// Importing useState for managing component state

function AuthPage({ onClose, showSignin }) {

  const load = document.getElementById("load");
  const [isSignin, setSignin] = useState(true);
  // State to toggle between Sign-in and Sign-up forms

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // State to store email and password inputs for Sign-in and Sign-up forms

  const [user, setUser] = useState(null);

  // State to manage auth messages
  const [message, setMessage] = useState("");

  // State to manage auth messages visibility
  const [isVisible, setIsVisible] = useState(false);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  //load animation bar
  const loadRef = React.useRef(null);


  // observe authentication state
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);          // Update user state with current user
    });
    return () => unsubscribe();  // cleanup observer
  }, []);



  // Function to handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setSignin(isSignin);
  
    if (!isSignin) {
      if (!name && !email && !password) {
        showMessage("Please fill in all fields");
      } else if (!name) {
        showMessage("Enter a name");
      } else if (!email) {
        showMessage("Enter email address");
      } else if (!password) {
        showMessage("Enter a password");
      } else if (password.length <= 8) {
        showMessage("Password should be at least 8 characters long");
      } else {
        try {
          if (loadRef.current) {
            loadRef.current.style.width = "40%";
          }
          await registerUser(email, password);
          showMessage("Registration successful!");
          setEmail("");
          setPassword("");
        
        } catch (e) {
          showMessage("Registration failed");
        }
      }
    }
  };
  

  // Function to handle login
  const handleLogin = async (e) => {
  e.preventDefault();
  setSignin(isSignin);

  if (isSignin) {
    if (!email && !password) {
      showMessage("Please enter credentials");
    } else if (!email) {
      showMessage("Enter email address");
    } else if (!password) {
      showMessage("Enter password");
    } else if (!password) {
      showMessage("Password is incorrect");
    } else {
      try {
        if (loadRef.current) {
          loadRef.current.style.width = "40%";
        }
        await loginUser(email, password);
        loadRef.current.style.width = "100%";
        
        // showMessage("Login successful!");
        setTimeout(() => {
          loadRef.current.style.display = "none";
        }, 1000);

        setTimeout(() => {
          showSignin && onClose();
        }, 1000)

        setEmail("");
        setPassword("");
      } catch (e) {
        showMessage("Login failed");
      }
    }
  }
};


  // Function to handle logout
  const handleLogout = async (e) => {
    try{
      await logoutUser();
      alert("Logout successful!");
    } catch (error){
      console.error(error.message);
      alert("Error logging out: " + error.message);
    }
  };




  const handleClick = () => {
    // Toggle the form and adjust margins for animation
    setSignin(!isSignin);
    if (isSignin) {
      document.querySelector('.authPage-signin').style.marginLeft = '-532px';
      document.querySelector('.authPage-signup').style.marginLeft = '0px';
    } else {
      document.querySelector('.authPage-signin').style.marginLeft = '0px';
      document.querySelector('.authPage-signup').style.marginLeft = '532px';
    }
  };

  return (
    <div className='container'>
      {/* Container for the authentication page */}
      <div className='authPage'>
        {/* Main authentication page layout */}

         
         
        <div className='form-container'>
          {/* Container for the forms */}

          {/* Load animation */}
         <div className="load-animation" ref={loadRef}></div>

         {/* message */}
         <div className={`message ${isVisible ? 'visible' : ''}`}><p>{message}</p></div>

          <form className='authPage-signin'>
            {/* Sign-in form */}
            <div className='authPage-header'>
              <h3>Sign in</h3>
              <i className='fa-solid fa-close closebtn' onClick={onClose}></i>
              {/* Close button to exit the auth page */}
            </div>

            <div className='email'>
              {/* Email input field */}
              <p className='email-title'>Email address</p>
              <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='password'>
              {/* Password input field */}
              <p className='password-title'>Password</p>
              <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <Link className='forgot-password'>Forgot your Password?</Link>
            {/* Link to recover password */}

            <div className='submit-btn'>
              {/* Submit button */}
              <button onClick={handleLogin}>Sign in</button>
            </div>

            <h3>OR</h3>
            {/* Alternative sign-in options */}
            <div className='google'>
              <img src={google} alt="" />
              <p>Sign in with Google</p>
            </div>

            <div className='apple'>
              <img src={apple} alt="" />
              <p>Sign in with Apple</p>
            </div>

            <Link className='register' onClick={handleClick}>
              New to KNOLENS? Register.
            </Link>
            {/* Link to toggle to the Sign-up form */}
          </form>

          {/* SIGN UP FORM */}

          <form className='authPage-signup'>
            {/* Sign-up form */}
            <div className='authPage-header'>
              <h3>Sign up</h3>
              <i className='fa-solid fa-close closebtn' onClick={onClose}></i>
              {/* Close button to exit the auth page */}
            </div>

            <div className='name'>
              {/* Name input field */}
              <p className='name-title'>Name</p>
              <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className='email'>
              {/* Email input field */}
              <p className='email-title'>Email address</p>
              <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='password'>
              {/* Password input field */}
              <p className='password-title'>Password</p>
              <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <p className='terms'>
              {/* Terms of Use and Privacy Policy links */}
              By signing up, you agree to our <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>
            </p>

            <div className='submit-btn'>
              {/* Submit button */}
              <button onClick={handleRegister}>Sign up</button>
            </div>

            <h3>OR</h3>
            {/* Alternative sign-up options */}
            <div className='google'>
              <img src={google} alt="" />
              <p>Sign up with Google</p>
            </div>
            <div className='apple'>
              <img src={apple} alt="" />
              <p>Sign up with Apple</p>
            </div>

            <Link className='register' onClick={handleClick}>
              Have an account? Sign in.
            </Link>
            {/* Link to toggle to the Sign-in form */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
// Exporting AuthPage as the default export
