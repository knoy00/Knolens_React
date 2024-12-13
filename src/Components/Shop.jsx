import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import { cameras, lenses, drones, salesOff, AdOne } from "./Data/Data.js";
import ProductCard from './ProductCard.jsx';
import ChatBot from './ChatBot.jsx';


import './Shop.css'

function Shop({handleSignin, cart=[]}) {
    return(
        <div>
            <Header handleSignin={handleSignin}/>
            <div className="shop-page">
                <div className="arrow-top">
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="shop_top">
                        <h1>Shop</h1>
                        {/* <div className="shop_links stick">
                            <Link to="lnk-cam">Camera</Link>
                            <Link>Lens</Link>
                            <Link>Drones</Link>
                            <Link>Accessories</Link>
                        </div> */}
                </div>

                <div className="shop_cameras" id="lnk-cam">
                    <h2 className='sticky-header'>Cameras</h2>
                    <div className="shop-row">
                        {cameras.map((item) => {
                            return (
                            <ProductCard 
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                img={item.img}
                                discount={item.discount}
                                description={item.description}
                                code={item.code}
                            />
                        )})}
                    </div>
                </div>
            {/* <Footer /> */}

                <div className="shop_lenses">
                    <h2 className='sticky-header'>Lenses</h2>
                    <div className="shop-row">
                        {lenses.map((item) => {
                            return (
                            <ProductCard 
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                img={item.img}
                                discount={item.discount}
                                description={item.description}
                                code={item.code}
                            />
                        )})}
                    </div>
                </div>

                <div className="shop_drones">
                    <h2 className="sticky-header">Drones</h2>
                    <div className="shop-row">
                        {drones.map((item) => {
                            return (
                                <ProductCard 
                                  key={item.id}
                                  name={item.name}
                                  price={item.price}
                                  img={item.img}
                                  discount={item.discount}
                                  description={item.description}
                                  code={item.code}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <ChatBot />
        </div>
    )
}

export default Shop