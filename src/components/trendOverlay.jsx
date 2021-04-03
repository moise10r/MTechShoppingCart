import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import trends_1 from '../assets/images/trends_1.jpg'
import trends_2 from '../assets/images/trends_2.jpg'
import trends_3 from '../assets/images/trends_3.jpg'

class Trends extends Component {
  state = {}
  render() {
    return (
      <div className="main-trends-area">
        <div className="main-hero-trends">
          <div className="main-container-trends">
            <div className="trend-left-container">
              <h1>Trends 2018</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing Donec et.
              </p>
              <ul>
                <li>
                  <IconContext.Provider value={{ className: 'icons' }}>
                    <IoIosArrowBack />
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider value={{ className: 'icons' }}>
                    <IoIosArrowForward />
                  </IconContext.Provider>
                </li>
              </ul>
            </div>
            <div className="trend-right-container">
              <div className="right-main-container">
                <div className="single-trend">
                  <div className="status">
                    <p>new</p>
                    <IconContext.Provider value={{ className: 'right-icon' }}>
                      <AiFillHeart />
                    </IconContext.Provider>
                  </div>
                  <div className="img-wrapper">
                    <img src={trends_1} alt="" />
                  </div>
                  <div className="trend-details">
                    <a href="#2">SmarthPhones</a>
                    <div className="span">
                      <p>Jump White </p>
                      <span>$379</span>
                    </div>
                  </div>
                </div>
                <div className="single-trend">
                  <div className="status">
                    <IconContext.Provider value={{ className: 'right-icon' }}>
                      <AiFillHeart />
                    </IconContext.Provider>
                  </div>
                  <div className="img-wrapper">
                    <img src={trends_2} alt="" />
                  </div>
                  <div className="trend-details">
                    <a href="#2">SmarthPhones</a>
                    <div className="span">
                      <p>Jump White </p>
                      <span>$379</span>
                    </div>
                  </div>
                </div>{' '}
                <div className="single-trend">
                  <div className="status">
                    <p>new</p>
                    <IconContext.Provider value={{ className: 'right-icon' }}>
                      <AiFillHeart />
                    </IconContext.Provider>
                  </div>
                  <div className="img-wrapper">
                    <img src={trends_3} alt="" />
                  </div>
                  <div className="trend-details">
                    <a href="#2">SmarthPhones</a>
                    <div className="span">
                      <p>Jump White </p>
                      <span>$379</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Trends
