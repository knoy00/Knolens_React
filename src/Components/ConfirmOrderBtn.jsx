import React from 'react'


import './ConfirmOrderBtn.css'

function ConfirmOrderBtn({handleSignin}) {
  return (
    <div className='confirm-order'>
      <button onClick={handleSignin}>Confirm Order</button>
    </div>
  )
}

export default ConfirmOrderBtn;
