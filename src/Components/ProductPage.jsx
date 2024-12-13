import React from 'react'
import { Link } from 'react-router-dom';

import Header from './Header'
import ProductCard from './ProductCard'
import Advertisement from './Advertisement.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { cameras, lenses, drones, salesOff, AdOne } from "./Data/Data.js";
import CanonRebel from '../assets/images/Canon_rebel.webp';

import './ProductPage.css'

function ProductPage({cart=[], handleSignin}) {

  const cameraSlice = cameras.slice(0, 5);
  const lensSlice = lenses.slice(0, 5);
  const droneSlice = drones.slice(0, 5);
  return (
    <div>
      <ScrollToTop />
      <Header cart={cart} handleSignin={handleSignin}/>
      <div className="product-page">
        <div className = 'row'>
          <h2>Cameras</h2>
          <div className='product-row'>
              {cameraSlice.map((camera) => (
                  <ProductCard
                  key={camera.id}
                  name={camera.name}
                  price={camera.price}
                  img={camera.img}
                  discount={camera.discount}
                  description={camera.description}
                  code={camera.code}
                  attribute_1={camera.attribute_1}
                  attribute_2={camera.attribute_2}
                  attribute_3={camera.attribute_3}
                  />
              ))}
          </div>
        </div>
      

        {/* ADVERTISEMENT SECTION */}
        <div className='Ad-row'>
          {AdOne.map((ad) => (
            <Advertisement
            key={ad.id}
            img={ad.img}
            title={ad.title}
            description={ad.description}
            />
          ))}
        </div>

          {/* LENSES */}
        <div className = 'row'>
          <h2>Lenses</h2>
          <div className='product-row'>
              {lensSlice.map((lens) => (
                  <ProductCard
                  key={lens.id}
                  name={lens.name}
                  price={lens.price}
                  img={lens.img}
                  img_2={lens.img_2}
                  img_3={lens.img_3}
                  img_4={lens.img_4}
                  img_5={lens.img_5}
                  discount={lens.discount}
                  description={lens.description}
                  code={lens.code}
                  attribute_1={lens.attribute_1}
                  attribute_2={lens.attribute_2}
                  attribute_3={lens.attribute_3}
                  productOverview={lens.productOverview}
                  disclaimer={lens.disclaimer}
                  RF200_shot1={lens.RF200_shot1}
                  RF200_shot2={lens.RF200_shot2}
                  RF200_shot3={lens.RF200_shot3}
                  RF200_shot4={lens.RF200_shot4}
                  RF200_shot5={lens.RF200_shot5}
                  />
              ))}
          </div>
        </div>

        {/* NEW ENTRY BANNER */}
        <div className="newEntry">
          <div className="newEntry_header">
              <h2>Introducing our new entry from DJI</h2>
              <p>Capture your moments from above with
                  a mini drone, FPV, or professional aerial camera.
              </p>
          </div>
          <div className="newEntry_image_container">
              <h3>Dual-Camera Drone for Travel Photography</h3>
              <h2>DJI AIR 3<span>S</span></h2>
              <p>Chase the view</p>
              <Link href=""><p>Learn more</p></Link>
          </div>
        </div>

        {/* DRONE SECTION */}
        <div className = 'row'>
          <h2>Drones</h2>
          <div className='product-row'>
              {droneSlice.map((drone) => (
                  <ProductCard
                  key={drone.id}
                  name={drone.name}
                  price={drone.price}
                  img={drone.img}
                  img_2={drone.img_2}
                  discount={drone.discount}
                  description={drone.description}
                  code={drone.code}
                  attribute_1={drone.attribute_1}
                  attribute_2={drone.attribute_2}
                  attribute_3={drone.attribute_3}
                  disclaimer={drone.disclaimer}
                  />
              ))}
          </div>
        </div>
        <Footer />
    </div>
  </div>
  );
}

export default ProductPage
