import React from 'react'

import './ConfirmBtn.css'

function ConfirmBtn({onClick}) {
  return (
    <div className='payment_method'>
        <button className='payment_method_btn' onClick={onClick}> Confirm</button>
    </div>
  )
}

export default ConfirmBtn;
