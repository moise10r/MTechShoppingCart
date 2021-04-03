import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'
import brands_1 from '../assets/images/brands_1.jpg'
import brands_2 from '../assets/images/brands_2.jpg'
import brands_3 from '../assets/images/brands_3.jpg'
import brands_4 from '../assets/images/brands_4.jpg'
import brands_5 from '../assets/images/brands_5.jpg'
import brands_6 from '../assets/images/brands_6.jpg'
import brands_7 from '../assets/images/brands_7.jpg'
import brands_8 from '../assets/images/brands_8.jpg'

class Brands extends Component {
  state = {}
  render() {
    return (
      <div className="main-brands-area">
        <div className="main-brands-container">
          <div className="icons">
            <IconContext.Provider value={{ className: 'icon' }}>
              <IoIosArrowBack />
            </IconContext.Provider>
          </div>
          <div className="brands-contents">
            <div className="single-brand">
              <div className="img-wrapper">
                <img src={brands_1} alt="" />
              </div>
            </div>
            <div className="single-brand">
              <div className="img-wrapper">
                <img src={brands_2} alt="" />
              </div>
            </div>
            <div className="single-brand">
              <div className="img-wrapper">
                <img src={brands_3} alt="" />
              </div>
            </div>{' '}
            <div className="single-brand">
              <div className="img-wrapper">
                <img src={brands_4} alt="" />
              </div>
            </div>{' '}
            <div className="single-brand">
              <div className="img-wrapper">
                <img src={brands_5} alt="" />
              </div>
            </div>{' '}
            <div className="single-brand">
              <div className="img-wrapper">
                <img src={brands_6} alt="" />
              </div>
            </div>{' '}
            <div className="single-brand">
              <div className="img-wrapper">
                <img src={brands_7} alt="" />
              </div>
            </div>
            <div className="single-brand">
              <div className="img-wrapper">
                <img src={brands_8} alt="" />
              </div>
            </div>
          </div>
          <div className="icons">
            <IconContext.Provider value={{ className: 'icon' }}>
              <IoIosArrowForward />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    )
  }
}

export default Brands
