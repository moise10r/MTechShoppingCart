import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'
import popular_1 from '../assets/images/popular_1.png'
import popular_2 from '../assets/images/popular_2.png'
import popular_3 from '../assets/images/popular_3.png'
import popular_4 from '../assets/images/popular_4.png'
import popular_5 from '../assets/images/popular_5.png'

class PopularCategory extends Component {
  state = {}
  render() {
    return (
      <div className="main-container-popular-category">
        <div className="hero-container-category">
          <div className="left-container">
            <h2>Popular Categories</h2>
            <div className="icons-categories">
              <IconContext.Provider value={{ className: 'left icon' }}>
                <IoIosArrowBack />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: 'right icon' }}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </div>
            <a href="#2">FULL CATALOG</a>
          </div>
          <div className="right-container-categories">
            <div className="right-hero-container">
              <div className="single-category">
                <img src={popular_1} alt="" />
                <p>Gadgets</p>
              </div>
              <div className="single-category">
                <img src={popular_2} alt="" />
                <p>Gadgets</p>
              </div>
              <div className="single-category">
                <img src={popular_3} alt="" />
                <p>Gadgets</p>
              </div>{' '}
              <div className="single-category">
                <img src={popular_4} alt="" />
                <p>Gadgets</p>
              </div>
              <div className="single-category">
                <img src={popular_5} alt="" />
                <p>Gadgets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PopularCategory
