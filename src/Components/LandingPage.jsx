import React from 'react'

//Importing Components to render
import Header from './Header'
import Hero from './Hero'
import Categories from './Categories'
import Collection from './Collection'
import ShopWithUS from './ShopWithUS'
import Carousel from './Carousel'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom';

import './LandingPageMediaQuery.css'

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Collection />
      <ShopWithUS />
      <Carousel />
      <Footer />
    </div>
  )
}

export default LandingPage
