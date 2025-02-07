import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import './ProductPage.css';
import './ProductOverview.css';

function ProductOverview({ addToCart, cart, handleSignin }) {
  const location = useLocation();
  const product = location.state;

  const type = () => {
    if (product.type === 'cameras') return 'Cameras';
    if (product.type === 'lenses') return 'Lenses';
    if (product.type === 'drones') return 'Drones';
    return 'Product';
  };

  return (
    <>
      <ScrollToTop />
      <Header cart={cart} handleSignin={handleSignin} />

      <div className="product_overview">
        <div className="overview_left">
          {[product.img, product.img_2, product.img_3, product.img_4, product.img_5].map(
            (img, index) => img && <div key={index} className="img_overview"><img src={img} alt={`Product ${index + 1}`} /></div>
          )}
        </div>

        <div className="overview_right">
          <h1 className="item_name">{product.name}</h1>
          <p className="item_code">{product.code}</p>
          <div className="divider"></div>
          <p className="item_price">${product.price}</p>

          {product.price > 800 && (
            <div className="shipping_text">
              <i className="fa-solid fa-check"></i>
              <p>Free shipping on orders over $800.00</p>
            </div>
          )}

          <div className="divider"></div>
          <div className="item_description">
            <ul>
              {[product.attribute_1, product.attribute_2, product.attribute_3].map(
                (attr, index) => attr && <li key={index}>{attr}</li>
              )}
            </ul>
          </div>
          <div className="divider"></div>

          <div className="insurance">
            <i className="fa-solid fa-shield-halved"></i>
            <p>Insure your purchase with NIT insurance</p>
          </div>

          <div className="addToCart">
            <button onClick={() => addToCart(product)}>ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="overview_description">
        <div className="overview_description_header">
          <h2>Product Overview</h2>
        </div>
        <div className="overview_description_text">
          <p>{product.productOverview}</p>
        </div>
        <div className="divider"></div>

        <div className="disclaimer">
          <h2>Product Disclaimer</h2>
          <p>{product.disclaimer}</p>
        </div>
        <div className="divider"></div>
      </div>

      <div className="photos">
        <div className="photos_header">
          <h2>See Some Photos Taken With This {type()}</h2>
        </div>
        <div className="photos_img">
          {[product.RF200_shot1, product.RF200_shot2, product.RF200_shot3, product.RF200_shot4, product.RF200_shot5].map(
            (shot, index) => shot && <div key={index} className="photo_img_wrapper"><img src={shot} alt={`Product ${index + 1}`} /></div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductOverview;