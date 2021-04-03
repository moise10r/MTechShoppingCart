import React, { Component } from 'react'
import banner from '../assets/images/banner_2_product.png'

class Banner2 extends Component {
  state = {}
  render() {
    return (
      <div className="main-area-banner-two">
        <div className="main-hero-container-banner-two">
          <div className="left-container-banner-two">
            <div className="banner-category">
              <p>Laptops</p>
            </div>
            <div className="banner-title">
              <p>MacBook Air 13</p>
            </div>
            <div className="banner-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                fuga numquam
              </p>
            </div>
            <div className="explore">
              <a href="#2">Explore</a>
            </div>
            <ul className="slide">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="right-container-banner-two">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Banner2
