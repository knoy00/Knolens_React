import React from 'react'
import ShopNowBtn from './ShopNowBtn.jsx';


import './Advertisement.css'

function Advertisement({title, img, id, description}) {
  return (
    <div>
      <div className="advertisement">
                <div className="ad_img">
                    <img src={img} alt="" />
                </div>
                <div className="ad_content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <ShopNowBtn />
                </div>
            </div>
    </div>
  )
}

export default Advertisement
