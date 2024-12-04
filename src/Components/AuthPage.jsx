import React from 'react'
import { Link } from 'react-router-dom'
import './Authtest.css'
import google from '../assets/images/google-small.png'
import apple from '../assets/images/apple-logo.png'
import { useState } from 'react'


function AuthPage({onClose}) {

    const [isSignin, setSignin] = useState(true);

    const handleClick = () => {
        setSignin(!isSignin);
        if(isSignin) {
            document.querySelector('.authPage-signin').style.marginLeft = '-532px';
            document.querySelector('.authPage-signup').style.marginLeft = '0px';
        }
        else{
            document.querySelector('.authPage-signin').style.marginLeft = '0px';
            document.querySelector('.authPage-signup').style.marginLeft = '532px';
        }
    }

    // const closeBox = () => {
    //     document.querySelector('.authPage').style.display = 'none';
    // }

  return (
    <div className='container'>
        <div className='authPage'>
            <div className='form-container'>
                <form className='authPage-signin'>
                    <div className='authPage-header'>
                        <h3>Sign in</h3>
                        <i className='fa-solid fa-close closebtn' onClick={onClose}></i>
                    </div>

                    <div className='email'>
                        <p className='email-title'>Email address</p>
                        <input type="text" name='email'/>
                    </div>

                    <div className='password'>
                        <p className='password-title'>Password</p>
                        <input type="password" name='password'/>
                    </div>

                    <Link className='forgot-password'>Forgot your Password?</Link>

                    <div className='submit-btn'>
                        <button>Sign in</button>
                    </div>

                    <h3>OR</h3>

                    <div className='google'>
                        <img src={google} alt="" />
                        <p>Sign in with Google</p>
                    </div>

                    <div className='apple'>
                        <img src={apple} alt="" />
                        <p>Sign in with Apple</p>
                    </div>

                    <Link className='register'  onClick={handleClick}>New to KNOLENS? Register.</Link>
                </form>

                <form action="" className='authPage-signup'>
                    <div className='authPage-header'>
                        <h3>Sign up</h3>
                        <i className='fa-solid fa-close closebtn' onClick={onClose}></i>
                    </div>

                    <div className='name'>
                        <p className='name-title'>Name</p>
                        <input type="text" name='name'/>
                    </div>

                    <div className='email'>
                        <p className='email-title'>Email address</p>
                        <input type="text" name='email'/>
                    </div>

                    <div className='password'>
                        <p className='password-title'>Password</p>
                        <input type="password" name='password'/>
                    </div>

                    <p className='terms'>By signing up, you agree to our <Link>Terms of Use</Link> and <Link>Privacy Policy</Link></p>

                    <div className='submit-btn'>
                        <button>Sign up</button>
                    </div>

                    <h3>OR</h3>
                    <div className='google'>
                        <img src={google} alt="" />
                        <p>Sign up with Google</p>
                    </div>
                    <div className='apple'>
                        <img src={apple} alt="" />
                        <p>Sign up with Apple</p>
                    </div>

                    <Link className='register' onClick={handleClick}>Have an account?   Sign in.</Link>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default AuthPage
