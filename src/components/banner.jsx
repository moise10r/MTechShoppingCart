import React, { Component } from 'react'
import banner from '../assets/images/banner_product.png'
class Banner extends Component {
  state = {}
  render() {
    return (
      <div className="main-banner-area">
        <div className="banner-main-container">
          <div className="banner-left-contents">
            <h1>NEW ERA OF SMARTPHONES</h1>
            <p>
              <span>$530</span>$460
            </p>
            <h3>Apple Iphone 6s</h3>
            <a href="#2">Shop Now</a>
          </div>
          <div className="banner-product-image">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
