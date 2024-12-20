import React, {useState} from 'react'
import Header from './Header'
import ShopNowBtn from './ShopNowBtn'
import ConfirmBtn from './ConfirmBtn'
import { Link } from 'react-router-dom'


import './OrderAndReturn.css'
import { tab } from '@testing-library/user-event/dist/tab'

function OrderAndReturn() {

    const [orderTab, setOrderTab] = useState(true);
    const [returnTab, setReturnTab] = useState(false);

    const [tabActive, setTabActive] = useState(null);

    const handleActiveTab = (tab) => {
        setTabActive(tab);
    }


  return (
    <div>
        <Header />
        <div className="or-wrapper">
            <div className="or-header">
                <h1>Orders and Returns</h1>
            </div>

            <div className="or-tabs">
                <div className={`orders ${tabActive === 'orders' ? 'activee' : ''}`} onClick={() => handleActiveTab('orders')}>
                    <h2>Orders</h2>
                </div>

                <div className={`returns ${tabActive === 'returns' ? 'activee' : ''}`} onClick={() => handleActiveTab('returns')}>
                    <h2>Returns</h2>
                </div>
            </div>
            <div className="line"></div>

            {tabActive === 'orders' && <div>
                <div>
                    <p>Manage your orders, initiate a return, or view your order history.</p>
                </div>

                <div className='no-orders-wrapper'>
                    <div className="no-orders">
                        <i class="fa-solid fa-boxes-packing"></i>
                        <h2>You currently have no orders</h2>
                        <p>Check back soon for your first order.</p>

                        <div className="shop-now">
                            <Link to='/Shop'><button>Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>}

            {tabActive === 'returns' && <div>
                <div>
                    <p>Track your return status, adjust collection schedules, and print your return documents.</p>
                </div>

                <div className='no-orders-wrapper'>
                    <div className="no-orders">
                        <i class="fa-solid fa-rotate-left"></i>
                        <h2>You currently have no returns</h2>
                        <p>You can start a return process by clicking the "View Orders" button below.</p>

                        <div className="view-orders-btn">
                            <button>View Orders</button>
                        </div>
                    </div>
                </div>
            </div>}




            
            
        </div>
      
    </div>
  )
}

export default OrderAndReturn

{/* <p>Please note that all orders are subject to customs and taxes. Please ensure you have the necessary documentation before placing an order.</p> */}
