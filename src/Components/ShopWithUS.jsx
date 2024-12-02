import React from 'react'
import street from '../assets/images/Street_photo-resize-min.jpg'

import './ShopWithUs.css'

function ShopWithUS() {
  return (
    <div>
        <div className="shop">
                <div className="shop_top">
                    <div className="line"></div>
                    <h2>WHY YOU SHOULD SHOP FROM US</h2>
                    <div className="line"></div>
                </div>
                <div className="video">
                    <img src={street} alt="" loading="lazy" />
                </div>

                <div className="grid_container">
                    <div className="grid_items">
                        <div className="shop_item_header">
                            <div className="shop_item_header_icon">
                                <i className="fa-solid fa-boxes-packing"></i>
                            </div>
                            <h2>Wide Range of products</h2>
                        </div>
                        <p>Discover an extensive selection of high-quality products, including cameras, lenses, accessories, and more.</p>
                    </div>
                    <div className="grid_items">
                        <div className="shop_item_header">
                            <div className="shop_item_header_icon">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <h2>Genuine products</h2>
                        </div>
                        <p>Shop with confidence, knowing that all our products are authentic and of the highest quality.</p>
                    </div>
                    <div className="grid_items">
                        <div className="shop_item_header">
                            <div className="shop_item_header_icon">
                                <i className="fa-solid fa-coins"></i>
                            </div>
                            <h2>Easy Returns</h2>
                        </div>
                        <p>If you're not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
                    </div>
                    <div className="grid_items">
                        <div className="shop_item_header">
                            <div className="shop_item_header_icon">
                                <i className="fa-solid fa-lightbulb"></i>
                            </div>
                            <h2>Expert Knowledge</h2>
                        </div>
                        <p>Our team of experts is ready to answer any questions you may have about our products and services.</p>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default ShopWithUS
