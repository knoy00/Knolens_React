import React from 'react';
import { Link } from 'react-router-dom';
// Importing Link for navigation between routes

import './Authtest.css';
// Importing styles for the component

import google from '../assets/images/google-small.png';
import apple from '../assets/images/apple-logo.png';
// Importing images for Google and Apple login options

import { useState } from 'react';
// Importing useState for managing component state

function AuthPage({ onClose }) {
  const [isSignin, setSignin] = useState(true);
  // State to toggle between Sign-in and Sign-up forms

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
              <input type="text" name='email' />
            </div>

            <div className='password'>
              {/* Password input field */}
              <p className='password-title'>Password</p>
              <input type="password" name='password' />
            </div>

            <Link className='forgot-password'>Forgot your Password?</Link>
            {/* Link to recover password */}

            <div className='submit-btn'>
              {/* Submit button */}
              <button>Sign in</button>
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
              <input type="text" name='name' />
            </div>

            <div className='email'>
              {/* Email input field */}
              <p className='email-title'>Email address</p>
              <input type="text" name='email' />
            </div>

            <div className='password'>
              {/* Password input field */}
              <p className='password-title'>Password</p>
              <input type="password" name='password' />
            </div>

            <p className='terms'>
              {/* Terms of Use and Privacy Policy links */}
              By signing up, you agree to our <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>
            </p>

            <div className='submit-btn'>
              {/* Submit button */}
              <button>Sign up</button>
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
