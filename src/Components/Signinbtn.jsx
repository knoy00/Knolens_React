import React from 'react'


import './Signinbtn.css'

function Signinbtn({handleSignin}) {
  return (
    <div className='sign-in'>
      <button onClick={handleSignin}>Sign In</button>
    </div>
  )
}

export default Signinbtn
