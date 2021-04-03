import React, { Component } from 'react'
import char_1 from '../assets/images/char_1.png'
import char_2 from '../assets/images/char_2.png'
import char_3 from '../assets/images/char_3.png'
import char_4 from '../assets/images/char_4.png'

class Characteristic extends Component {
  state = {}
  render() {
    return (
      <div className="characteristic-main-area-page">
        <div className="characteristic-main-container">
          <div className="main-container-content">
            <div className="single-characteristic">
              <img src={char_1} alt="" />
              <div className="content">
                <h3>Free Delivery</h3>
                <p>from $50</p>
              </div>
            </div>
          </div>
          <div className="main-container-content">
            <div className="single-characteristic">
              <img src={char_2} alt="" />
              <div className="content">
                <h3>Free Delivery</h3>
                <p>from $50</p>
              </div>
            </div>
          </div>
          <div className="main-container-content">
            <div className="single-characteristic">
              <img src={char_3} alt="" />
              <div className="content">
                <h3>Free Delivery</h3>
                <p>from $50</p>
              </div>
            </div>
          </div>{' '}
          <div className="main-container-content">
            <div className="single-characteristic">
              <img src={char_4} alt="" />
              <div className="content">
                <h3>Free Delivery</h3>
                <p>from $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Characteristic
