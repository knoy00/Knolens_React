import React from 'react'
import './Carousel.css'


//Importing Images for Carousel
import streetPhoto from '../assets/images/Street_photo-resize-min.jpg'
import fullShot from '../assets/images/full-shot-woman-posing-chair-resize-min.jpg'
import portrait from '../assets/images/portrait-smiling-afro-american-guy-leather-jacket-resize.jpg'
import photographer from '../assets/images/fascinating-young-female-photographer-having-fun-after-photoshoot-resize-min.jpg'
import amazingForestSunset from '../assets/images/amazing-forest-sunset-resize-min.jpg'
import woodenDock from '../assets/images/brown-wooden-dock-resize-min.jpg'

function Carousel() {
  return (
    <div>
      <div className="carousel_section">
                <div className="slider_wrapper">
                    <div className="slider">
                        <img src={streetPhoto} id="slide-1" />
                        <img src={fullShot} alt="full shot woman posing chair" id="slide-2" />
                        <img src="Images/portrait-smiling-afro-american-guy-leather-jacket-resize.jpg" alt="portrait smiling afro american guy leather jacket" id="slide-3" />
                        <img src={photographer} alt="Fascinating Young Female Photographer Having Fun After Photoshoot" id="slide-4" />
                        <img src={amazingForestSunset} alt="Amazing Forest Sunset" id="slide-5" />
                        <img src={woodenDock} alt="Brown Wooden Dock" id="slide-6" />
                    </div>
                    <div className="slider_nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                        <a href="#slide-5"></a>
                        <a href="#slide-6"></a>
                    </div>
                </div>
                
                <div className="carousel_header">
                    <h2>Capture Life in Stunning Detail Every Time</h2>
                </div>
                <div className="carousel_content">
                    <p>Hold on to life's moments in stunning detail - because every memory deserves to be as vibrant as the day you created it. With your cameras, you'll never miss a beat, ensuring every shot is as perfect as the moment itself.</p>
                </div>
                <div className="carousel_btn">
                    <p>Shop Now</p>
                        <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
    </div>
  )
}

export default Carousel
