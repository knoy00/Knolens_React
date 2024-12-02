import React from 'react'

import canonr5 from '../assets/images/canonr5-min.png'
import sony200 from '../assets/images/sony200-min.png'
import canonef from '../assets/images/canonEF-min.png'
import mavicPro from '../assets/images/MavicPro-min.png'

import './Collection.css'

function Collection() {
  return (
    <div>
      <div className="collection">
                <div className="collection_top">
                    <div className="line"></div>
                    <h2>OUR LATEST COLLECTION</h2>
                    <div className="line"></div>
                </div>

                <div className="collection_grid">
                    <div className="collection_item">
                        <div className="collection_img">
                            <img src={canonr5} loading="lazy" alt='Canon R5'/>
                        </div>
                        
                        <div className="item_description">
                            <h2>Canon EOS R5</h2>
                            <p>A high-performance, full-frame mirrorless camera designed for professional photographers and videographers</p>
                            <p>$1,100</p>
                        </div>

                    </div>
                    <div className="collection_item">
                        <div className="collection_img">
                            <img src={sony200} loading="lazy" alt='Sony 200'/>
                        </div>

                        <div className="item_description">
                            <h2>SONY 200</h2>
                            <p>A high-performance, full-frame mirrorless camera designed for professional photographers and videographers</p>
                            <p>$1,100</p>
                        </div>

                        
                    </div>
                    <div className="collection_item">
                        <div className="collection_img">
                            <img src={canonef} loading="lazy" alt='Canon EF'/>
                        </div>

                        <div className="item_description">
                            <h2>Canon E2S 88 Lens</h2>
                            <p>A high-performance, full-frame lens designed for professional photographers and videographers.</p>
                            <p>$3,000</p>
                        </div>

                        
                    </div>
                    <div className="collection_item">
                        <div className="collection_img">
                            <img src={mavicPro} loading="lazy" alt='Mavic Pro'/>
                        </div>

                        <div className="item_description">
                            <h2>Mavic Pro Drone</h2>
                            <p>A high-performance, advanced drone designed for professional aerial photographers and videographers.</p>
                            <p>$2,700</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Collection
