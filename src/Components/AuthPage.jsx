import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { registerUser, loginUser, auth } from '../firebase/Auth';
import { onAuthStateChanged } from 'firebase/auth';
import './Authtest.css';
import google from '../assets/images/google-small.png';
import apple from '../assets/images/apple-logo.png';

function AuthPage({ onClose, showSignin }) {
  const [isSignin, setSignin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const loadRef = useRef(null);

  // Display a message temporarily
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  // Observe authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isSignin) {
      if (!name || !email || !password) {
        showMessage('Please fill in all fields');
        return;
      }
      if (password.length < 8) {
        showMessage('Password should be at least 8 characters long');
        return;
      }

      try {
        if (loadRef.current) loadRef.current.style.width = '40%';
        await registerUser(email, password);
        if (loadRef.current) loadRef.current.style.width = '100%';
        showMessage('Registration successful!');
        setTimeout(() => {
          if (loadRef.current) loadRef.current.style.display = 'none';
        }, 800);
        setEmail('');
        setPassword('');
        setTimeout(() => {
          if (showSignin && onClose) onClose();
        }, 500);
      } catch {
        if (loadRef.current) loadRef.current.style.width = '0%';
        showMessage('Registration failed');
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setSignin(isSignin);
    if (isSignin) {
      if (!email || !password) {
        showMessage('Please enter credentials');
        return;
      }

      try {
        if (loadRef.current) loadRef.current.style.width = '40%';
        await loginUser(email, password);
        if (loadRef.current) loadRef.current.style.width = '100%';

        setTimeout(() => {
          if (loadRef.current) loadRef.current.style.display = 'none';
        }, 500);

        setTimeout(() => {
          if (showSignin && onClose) onClose();
        }, 300);

        setEmail('');
        setPassword('');
      } catch {
        showMessage('Login failed');
      }
    }
  };

  const handleClick = () => {
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
    <div className="container">
      <div className="authPage">
        <div className="form-container">
          <div className="load-animation" ref={loadRef}></div>
          <div className={`message ${isVisible ? 'visible' : ''}`}><p>{message}</p></div>

          {/* Sign-in Form */}
          <form className="authPage-signin">
            <div className="authPage-header">
              <h3>Sign in</h3>
              <i className="fa-solid fa-close closebtn" onClick={onClose}></i>
            </div>
            <div className="email">
              <p className="email-title">Email address</p>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
              <p className="password-title">Password</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Link className="forgot-password">Forgot your Password?</Link>
            <div className="submit-btn">
              <button onClick={handleLogin}>Sign in</button>
            </div>
            <h3>OR</h3>
            <div className="google">
              <img src={google} alt="Google" />
              <p>Sign in with Google</p>
            </div>
            <div className="apple">
              <img src={apple} alt="Apple" />
              <p>Sign in with Apple</p>
            </div>
            <Link className="register" onClick={handleClick}>
              New to KNOLENS? Register.
            </Link>
          </form>

          {/* Sign-up Form */}
          <form className="authPage-signup">
            <div className="authPage-header">
              <h3>Sign up</h3>
              <i className="fa-solid fa-close closebtn" onClick={onClose}></i>
            </div>
            <div className="name">
              <p className="name-title">Name</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="email">
              <p className="email-title">Email address</p>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
              <p className="password-title">Password</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="terms">
              By signing up, you agree to our <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>.
            </p>
            <div className="submit-btn">
              <button onClick={handleRegister}>Sign up</button>
            </div>
            <h3>OR</h3>
            <div className="google">
              <img src={google} alt="Google" />
              <p>Sign up with Google</p>
            </div>
            <div className="apple">
              <img src={apple} alt="Apple" />
              <p>Sign up with Apple</p>
            </div>
            <Link className="register" onClick={handleClick}>
              Have an account? Sign in.
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
