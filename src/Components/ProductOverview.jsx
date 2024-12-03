import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import ProductPage from './ProductPage';
import { useState } from 'react';
import { S_A_Lens } from './Data/Data';
import { allProducts } from './Data/Data';
import './ProductPage.css'

import './ProductOverview.css'

function ProductOverview() {
    const location = useLocation();
    const product = location.state;
    console.log(location)

  return (
    <>
        <Header />
        <div className="product_overview">
            <div className="overview_left">
                <div className="img_overview">
                    <img src={product.img} alt="" />
                </div>

                <div className='img_overview'>
                    <img src={product.img_2} alt="" />
                </div>

                <div className='img_overview'>
                    <img src={product.img_3} alt="" />
                </div>

                <div className='img_overview'>
                    <img src={product.img_4} alt="" />
                </div>

                <div className='img_overview'>
                    <img src={product.img_5} alt="" />
                </div>

            </div>
            <div className="overview_right">
                <h1 className="item_name">{product.name}</h1>
                <p className="item_code">{product.code}</p>
                <div className="divider"></div>
                <p className="item_price">${product.price}</p>
               {product.price > 800 && <div className="shipping_text">
                    <i className="fa-solid fa-check"></i>
                    <p>Free shipping on orders over $800.00</p>
                </div>}
                <div className="divider"></div>
                <div className="item_description">
                    <ul>
                        <li>{product.attribute_1}</li>
                        <li>{product.attribute_2}</li>
                        <li>{product.attribute_3}</li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="insurance">
                    <i className="fa-solid fa-shield-halved"></i>
                    <p>Insure your purchase with NIT insurance</p>
                </div>
                <div className="addToCart">
                    <Link href=""><button>ADD TO CART</button></Link>
                </div>
            </div>
        </div>

        <div class="overview_description">
            <div class="overview_description_header">
                <h2>Product Overview</h2>
            </div>
            <div class="overview_description_text">
                <p>{product.productOverview}
                </p>
            </div>
            <div class="divider"></div>
            <div class="disclaimer">
                <h2>Product Disclaimer</h2>
                <p>{product.disclaimer}
                </p>
            </div>
            <div class="divider"></div>
        </div>

            {/* PHOTOS TAKEN WITH LENS */}
        <div class="photos">
            <div class="photos_header">
                <h2>See Some Photos Taken With This Lens</h2>
            </div>
            <div class="photos_img">
                <div class="photo_img_wrapper">
                    <img src={product.RF200_shot1} alt="New York City" />
                </div>
                <div class="photo_img_wrapper">
                    <img src={product.RF200_shot2} alt="" />
                </div>
                <div class="photo_img_wrapper">
                    <img src={product.RF200_shot3} alt="" />
                </div>
                <div class="photo_img_wrapper">
                    <img src={product.RF200_shot4} alt="" />
                </div>
                <div class="photo_img_wrapper">
                    <img src={product.RF200_shot5} alt="" />
                </div>
            </div>
        </div>
        {/* <div className='product-row'>
            <h2>Similar Lenses</h2>
            <div className='row'>
                {
                    S_A_Lens.map((lens) => (
                        <ProductCard 
                            img = {lens.img}
                            name={lens.name}
                            description={lens.description}
                            price={lens.price}
                        />
                    ))
                }
            </div>
        </div> */}
        <Footer />
    </>
    
  )
}

export default ProductOverview
