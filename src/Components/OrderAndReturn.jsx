import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './OrderAndReturn.css';

function OrderAndReturn({ orders }) {
  const [tabActive, setTabActive] = useState('orders');

  const handleActiveTab = (tab) => {
    setTabActive(tab);
  };

  return (
    <div>
      <Header />
      <div className="or-wrapper">
        <div>
          <div className="or-header">
            <h1>Orders and Returns</h1>
          </div>
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

          {orders.length === 0 ? (
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

              {tabActive === 'returns' && (
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
            tabActive === 'orders' &&
            orders.map((order, index) => (
              <div className="order-ticket" key={index}>
                <div className="ticket-header">
                  <h2>ORDER ID: {order.id}</h2>
                  <div className="ticket-date">
                    <p>{order.date}</p>
                    <p>{order.time}</p>
                  </div>
                </div>

                <div className="ticket-details">
                  <div>
                    {order.map((item, itemIndex) => (
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
                    ))}
                  </div>

                  <div className="ticket-item-info">
                    <div>
                      <h4>Subtotal</h4>
                      <p>${order.subtotal}</p>
                    </div>
                    <div>
                      <h4>Tracking ID</h4>
                      <p>{order.trackingId}</p>
                    </div>
                    <div>
                      <h4>Order Status</h4>
                      <p>{order.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderAndReturn;
