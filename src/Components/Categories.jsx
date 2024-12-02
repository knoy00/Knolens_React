import React from 'react'
import camera from '../assets/images/camera-resize.jpg'
import lens from '../assets/images/lens-resize.jpg'
import accessory from '../assets/images/accessory-resize.jpg'

import './Categories.css'

function Categories() {
  return (
    <div>
        <div className="categories">
                <div className="categories_top">
                    <div className="line"></div>
                    <h2>EXPLORE OUR CATEGORIES</h2>
                    <div className="line"></div>
                </div>

                <div className="categories_img">

                    <div className="category_item">
                        <img src={camera} alt='Canon Camera'/>
                        <div className="category_text">
                            <h3>CAMERAS</h3>
                        </div>
                    </div>

                    <div className="category_item">
                        <img src={lens} alt='Canon Lens'/>
                        <div className="category_text">
                            <h3>LENS</h3>
                        </div>
                    </div>

                    <div className="category_item">
                        <img src={accessory} alt='Canon Accessory'/>
                        <div className="category_text">
                            <h3>ACCESSORIES</h3>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Categories
