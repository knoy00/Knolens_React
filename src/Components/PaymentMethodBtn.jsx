import React from 'react'

import './PaymentMethodBtn.css'

function PaymentMethodBtn({onClick}) {
  return (
    <div className='payment_method'>
        <button className='payment_method_btn' onClick={onClick}> Confirm Payment Method</button>
    </div>
  )
}

export default PaymentMethodBtn
