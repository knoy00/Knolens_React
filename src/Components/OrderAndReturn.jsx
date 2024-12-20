import React from 'react'
import Header from './Header'

import './OrderAndReturn.css'

function OrderAndReturn() {
  return (
    <div>
        <Header />
        <div className="or-wrapper">
            <div className="or-header">
                <h1>Orders and Returns</h1>
            </div>

            <div className="or-tabs">
                <div className="orders">
                    <h2>Orders</h2>
                </div>

                <div className="returns">
                    <h2>Returns</h2>
                </div>
            </div>
            <div className="line"></div>

            
            
        </div>
      
    </div>
  )
}

export default OrderAndReturn

{/* <p>Please note that all orders are subject to customs and taxes. Please ensure you have the necessary documentation before placing an order.</p> */}
