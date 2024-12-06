import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import necessary components from React Router
import Header from './Header'; // Header component for the top of the page
import Footer from './Footer'; // Footer component for the bottom of the page
import ProductCard from './ProductCard'; // ProductCard component for displaying individual product cards (commented out in this file)
import ProductPage from './ProductPage'; // ProductPage component (not directly used here)
import { useState } from 'react'; // State management (though not used in this component)
import { S_A_Lens } from './Data/Data'; // Array of specific lenses (commented out in this file)
import { allProducts } from './Data/Data'; // All products data (not directly used here)
import ScrollToTop from './ScrollToTop'; // Component to ensure the page scrolls to the top when navigating
import './ProductPage.css'; // CSS file for product page styles
import './ProductOverview.css'; // CSS file specifically for this component's styles

// Main ProductOverview component
function ProductOverview({ addToCart, removeFromCart, cart }) {
  // `useLocation` hook to access the state passed via the `Link` component
  const location = useLocation();
  const product = location.state; // The product details passed via state

  return (
    <>
      {/* Ensure the page scrolls to the top when this component is rendered */}
      <ScrollToTop />

      {/* Render the Header, passing the cart as a prop */}
      <Header cart={cart} />

      {/* Main product overview section */}
      <div className="product_overview">
        {/* Left section: displays product images */}
        <div className="overview_left">
          {/* Render all product images if they exist */}
          <div className="img_overview"><img src={product.img} alt="" /></div>
          <div className='img_overview'><img src={product.img_2} alt="" /></div>
          <div className='img_overview'><img src={product.img_3} alt="" /></div>
          <div className='img_overview'><img src={product.img_4} alt="" /></div>
          <div className='img_overview'><img src={product.img_5} alt="" /></div>
        </div>

        {/* Right section: displays product details */}
        <div className="overview_right">
          <h1 className="item_name">{product.name}</h1> {/* Product name */}
          <p className="item_code">{product.code}</p> {/* Product code */}
          <div className="divider"></div> {/* Visual divider line */}
          <p className="item_price">${product.price}</p> {/* Product price */}

          {/* Conditional rendering: free shipping text if price > 800 */}
          {product.price > 800 && (
            <div className="shipping_text">
              <i className="fa-solid fa-check"></i>
              <p>Free shipping on orders over $800.00</p>
            </div>
          )}
          <div className="divider"></div>

          {/* Product attributes listed as bullet points */}
          <div className="item_description">
            <ul>
              <li>{product.attribute_1}</li>
              <li>{product.attribute_2}</li>
              <li>{product.attribute_3}</li>
            </ul>
          </div>
          <div className="divider"></div>

          {/* Insurance information */}
          <div className="insurance">
            <i className="fa-solid fa-shield-halved"></i>
            <p>Insure your purchase with NIT insurance</p>
          </div>

          {/* Button to add product to the cart */}
          <div className="addToCart">
            <button onClick={() => addToCart(product)}>ADD TO CART</button>
          </div>
        </div>
      </div>

      {/* Additional product information section */}
      <div className="overview_description">
        {/* Product overview */}
        <div className="overview_description_header">
          <h2>Product Overview</h2>
        </div>
        <div className="overview_description_text">
          <p>{product.productOverview}</p> {/* Detailed product description */}
        </div>
        <div className="divider"></div>

        {/* Product disclaimer */}
        <div className="disclaimer">
          <h2>Product Disclaimer</h2>
          <p>{product.disclaimer}</p>
        </div>
        <div className="divider"></div>
      </div>

      {/* Section showcasing photos taken with the product (e.g., a lens) */}
      <div className="photos">
        <div className="photos_header">
          <h2>See Some Photos Taken With This Lens</h2>
        </div>
        <div className="photos_img">
          {/* Display all photos if available */}
          <div className="photo_img_wrapper"><img src={product.RF200_shot1} alt="New York City" /></div>
          <div className="photo_img_wrapper"><img src={product.RF200_shot2} alt="" /></div>
          <div className="photo_img_wrapper"><img src={product.RF200_shot3} alt="" /></div>
          <div className="photo_img_wrapper"><img src={product.RF200_shot4} alt="" /></div>
          <div className="photo_img_wrapper"><img src={product.RF200_shot5} alt="" /></div>
        </div>
      </div>

      {/* Section for similar lenses (commented out for now) */}
      {/* <div className='product-row'>
        <h2>Similar Lenses</h2>
        <div className='row'>
          {S_A_Lens.map((lens) => (
            <ProductCard 
              img={lens.img}
              name={lens.name}
              description={lens.description}
              price={lens.price}
            />
          ))}
        </div>
      </div> */}

      {/* Render the Footer */}
      <Footer />
    </>
  );
}

export default ProductOverview; // Export the component to make it reusable
