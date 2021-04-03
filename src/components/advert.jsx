import React, { Component } from 'react'
import adv_1 from '../assets/images/adv_1.png'
import adv_2 from '../assets/images/adv_2.png'
import adv_3 from '../assets/images/adv_3.png'
class Advert extends Component {
  state = {}
  render() {
    return (
      <div className="main-advert-area">
        <div className="main-advert-container">
          <div className="single-advert-container">
            <div className="left-advert-container">
              <h3>Trends 2018</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ab quam,
              </p>
            </div>
            <div className="right-img-container">
              <img src={adv_1} alt="" />
            </div>
          </div>
          <div className="single-advert-container">
            <div className="left-advert-container">
              <h3>Trends 2018</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ab quam,
              </p>
            </div>
            <div className="right-img-container">
              <img src={adv_2} alt="" />
            </div>
          </div>{' '}
          <div className="single-advert-container">
            <div className="left-advert-container">
              <h3>Trends 2018</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ab quam,
              </p>
            </div>
            <div className="right-img-container">
              <img src={adv_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Advert
