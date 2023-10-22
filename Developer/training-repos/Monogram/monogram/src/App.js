//Global Style
import React, { useState } from "react";
import './App.css';
//Import SASS
import './components/nav/Nav.scss'
import './components/banner/Banner.scss'
import './global/Fonts.scss'
import './global/Global.scss'
import './components/toggle-button/toggleButton.scss'
import './components/featured-items/featuredItems.scss'
import "./components/featured-cta/featuredCta.scss"
import "./components/shop/shop.scss"

//Components
import Nav from "../src/components/nav/Nav";
import Banner from "../src/components/banner/Banner";
import FeaturedItems from './components/featured-items/featuredItems';
import FeaturedCta from './components/featured-cta/featuredCta';
import Shop from './components/shop/shop';


import data from "./productData/featuredProductData";

function App() {
  //State
  const [featuredProductData] = useState(data());
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <FeaturedItems featuredProductData={featuredProductData}/>
      <FeaturedCta/>
      <Shop/>
    </div>
  );
}

export default App;
