import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import deals from '../assets/images/deals.png'

import featured_1 from '../assets/images/featured_1.png'

import data from '../services/features'
class Features extends Component {
  state = {
    classes: true,
    list: [1, 2],
  }
  handleGenre = () => {
    this.setState({
      classes: !this.state.classes,
    })
  }
  render() {
    console.log(data.features.featured_1)

    return (
      <div className="main-features-area">
        <div className="main-features-content">
          <div className="features-left-container">
            <div className="first-container">
              <h2>Deals of the Week</h2>
              <div className="features-carousel-icons">
                <IconContext.Provider value={{ className: 'icons right-icon' }}>
                  <IoIosArrowBack />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: 'icons top-left-icons' }}
                >
                  <IoIosArrowForward />
                </IconContext.Provider>
              </div>
            </div>
            <div className="middle-container">
              <div className="img-carousol">
                <img src={deals} alt="" />
              </div>
            </div>
            <div className="last-container">
              <div className="line-one">
                <h3>HeadPhones</h3>
                <span>$300</span>
              </div>
              <div className="line-two">
                <h3>Beoplay H7</h3>
                <span>$225</span>
              </div>
              <div className="line-three">
                <p>
                  Available: <span>6</span>
                </p>
                <p>
                  Already solid: <span>28</span>
                </p>
              </div>
              <div className="progress"></div>
              <div className="line-four">
                <div className="right-line-four">
                  <h4>Hurry Up</h4>
                  <p>Offer ends in:</p>
                </div>
                <div className="left-line-four">
                  <ul className="remaining-hours">
                    <li>
                      <span>35</span>
                    </li>
                    <li>
                      <span>01</span>
                    </li>
                    <li>
                      <span>45</span>
                    </li>
                  </ul>
                  <ul className="corresponding-time">
                    <li>Hours</li>
                    <li>min</li>
                    <li>secs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="features-right-container">
            <div className="features-nav-bar">
              <ul>
                <li>
                  <a href="#2">Featured</a>
                </li>
                <li>
                  <a href="#3">On Sale</a>
                </li>
                <li>
                  <a href="#4">Best Rated</a>
                </li>
              </ul>
            </div>
            <div className="features-container-item">
              <div className="right-features-main-container">
                {data.features.map((item) => (
                  <div key={item._id} className="single-item">
                    <div className="first-line">
                      <p className="change-color">
                        <span>${item.price}</span>
                      </p>
                      <IconContext.Provider value={{ className: 'like-item' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                    </div>
                    <div className="img-wrapper">
                      <img src={featured_1} alt="" />
                    </div>
                    <div className="second-line">
                      <p>
                        $<span>{item.lastPrice}</span>
                      </p>
                      <p className="special">
                        $<span>{item.actualPrice}</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>{item.type}...</p>
                    </div>
                    <div className="circles">
                      <div className="circles-container">
                        <div className="cir circle1"></div>
                        <div className="cir circle2"></div>
                        <div className="cir circle3"></div>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <a href="#2">Add to cart</a>
                    </div>
                  </div>
                ))}
              </div>

              <ul className="pagination">
                <li
                  onClick={this.handleGenre}
                  className={!this.state.classes ? 'active' : ''}
                ></li>
                <li
                  onClick={this.handleGenre}
                  className={!this.state.classes ? 'active' : ''}
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Features
