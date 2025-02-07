import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './OrderAndReturn.css';



function OrderAndReturn({ orders, user, handleSignin, cart, setOrders, getOrders, returns=[], fetchOrders }) {

  const [tabActive, setTabActive] = useState('orders');
  const [loader, setLoader] = useState(false);


  useEffect(() => {
    if (user) {
      setLoader(true);
      const timeout = setTimeout(() => {
        getOrders();
        setLoader(false);
      }, 2000);
  
      return () => clearTimeout(timeout);
    }
  }, [user, getOrders]);
  
  const handleGetOrders = () => {
    if (user) {
      setLoader(true);
      setTimeout(() => {
        getOrders();
        setLoader(false);
      }, 2000);
    }
  };
  

  console.log("orders:" + orders)
  console.log("returns: " + returns)

  const handleActiveTab = (tab) => {
    setTabActive(tab);
  };

  return (
    <div>      
      <Header cart={cart} handleSignin={handleSignin} />
      <div className="or-wrapper">
        <div>
          <div className="or-header">
            <h1>Orders and Returns</h1>
            {orders && <div className='refresh' onClick={handleGetOrders}><button>Refresh</button></div>}
            {loader && <p>Fetching Orders. Please wait...</p>}
          </div>
          <div className="or-tabs-wrapper">
            <div className="or-tabs">
              <div
                className={`orders ${tabActive === 'orders' ? 'activee' : ''}`}
                onClick={() => handleActiveTab('orders')}
              >
                <h2>Orders</h2>
              </div>
              <div
                className={`returns ${tabActive === 'returns' ? 'activee' : ''}`}
                onClick={() => handleActiveTab('returns')}
              >
                <h2>Returns</h2>
              </div>
            </div>
            <div className="line"></div>
            
          </div>

          {!user || (user && orders) < 1 ? (
            <div>
              {tabActive === 'orders' && (
                <div>
                  <p>Manage your orders, initiate a return, or view your order history.</p>
                  <div className="no-orders-wrapper">
                    <div className="no-orders">
                      <i className="fa-solid fa-boxes-packing"></i>
                      <h2>You currently have no orders</h2>
                      <p>Check back soon for your first order.</p>
                      <div className="shop-now">
                        <Link to="/Shop">
                          <button>Shop Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )}
              {tabActive === 'returns' && user && (
                <div>
                  <p>Track your return status, adjust collection schedules, and print your return documents.</p>
                  <div className="no-orders-wrapper">
                    <div className="no-orders">
                      <i className="fa-solid fa-rotate-left"></i>
                      <h2>You currently have no returns</h2>
                      <p>You can start a return process by clicking the "View Orders" button below.</p>
                      <div className="view-orders-btn">
                        <button onClick={() => handleActiveTab('orders')}>View Orders</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            tabActive === 'orders' && user &&
            orders.map((order, index) => {
              console.log('Orders:', orders); // Check the entire orders array
              console.log('Order Items:', order.items); // Check the items of the current order
              
              return(
              <div className="order-ticket-container">
                <div className="order-ticket" key={index}>
                  <div className="ticket-header">
                    <h2>ORDER ID: {order.order_ID}</h2>
                    <div className="ticket-date">
                      <p>{order.date}</p>
                      <p>{order.time}</p>
                    </div>
                  </div>

                  <div className="ticket-details">
                    <div>
                      {order.products && order.products.map((item, itemIndex) => {
                        console.log("item:" + item); // Log the item object here
                        return (
                          <div className="ticket-item-details" key={itemIndex}>
                            <div className="ticket-img">
                              <img src={item.img} alt={item.name} />
                            </div>
                        
                            <div>
                              <h4>Product Name</h4>
                              <p>{item.name}</p>
                            </div>
                        
                            <div>
                              <h4>Quantity</h4>
                              <p>{item.quantity}</p>
                            </div>
                        
                            <div>
                              <h4>Price</h4>
                              <p>${item.price}</p>
                            </div>
                          </div>
                        );
                      })}

                    </div>

                    <div className="ticket-item-info">
                      <div>
                        <h4>Subtotal</h4>
                        {/* <p>${order.subtotal}</p> */}
                      </div>
                      <div>
                        <h4>Tracking ID</h4>
                        <p>{order.Tracking_ID}</p>
                      </div>
                      <div>
                        <h4>Order Status</h4>
                        <p>{order.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )})
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderAndReturn;
