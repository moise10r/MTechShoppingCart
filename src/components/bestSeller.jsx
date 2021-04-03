import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { AiFillHeart } from 'react-icons/ai'
import best_1 from '../assets/images/best_1.png'
import best_2 from '../assets/images/best_2.png'
import best_3 from '../assets/images/best_3.png'
import best_4 from '../assets/images/best_4.png'
import best_5 from '../assets/images/best_5.png'
import best_6 from '../assets/images/best_6.png'

class BestSeller extends Component {
  state = {}
  render() {
    return (
      <div className="main-area-best-seller">
        <div className="main-hero-best-seller-container">
          <div className="best-seller-navbar">
            <div className="title">
              <p>Hot New Arrivals</p>
            </div>
            <ul className="clearfic">
              <li>
                <a href="#2">Features</a>
              </li>
              <li>
                <a href="#2">Audio&Video </a>
              </li>
              <li>
                <a href="#2">Laptops&Computers</a>
              </li>
            </ul>
          </div>
          <div className="main-best-seller-content">
            <div className="best-seller-content">
              <div className="sngle-best-seller-item">
                <div className="first-line">
                  <p>
                    <span>$25</span>
                  </p>
                  <IconContext.Provider value={{ className: 'like-item' }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                </div>
                <div className="item-details">
                  <div className="img-wrapper">
                    <img src={best_1} alt="" />
                  </div>
                  <div className="content">
                    <h4>HeadPhones</h4>
                    <h2>Xiamo Redmi Note 4</h2>
                    <p>
                      $225<span>$300</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sngle-best-seller-item">
                <div className="first-line">
                  <p>
                    <span>$25</span>
                  </p>
                  <IconContext.Provider value={{ className: 'like-item' }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                </div>
                <div className="item-details">
                  <div className="img-wrapper">
                    <img src={best_2} alt="" />
                  </div>
                  <div className="content">
                    <h4>HeadPhones</h4>
                    <h2>Xiamo Redmi Note 4</h2>
                    <p>
                      $225<span>$300</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sngle-best-seller-item">
                <div className="first-line">
                  <p>
                    <span>$25</span>
                  </p>
                  <IconContext.Provider value={{ className: 'like-item' }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                </div>
                <div className="item-details">
                  <div className="img-wrapper">
                    <img src={best_3} alt="" />
                  </div>
                  <div className="content">
                    <h4>HeadPhones</h4>
                    <h2>Xiamo Redmi Note 4</h2>
                    <p>
                      $225<span>$300</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sngle-best-seller-item">
                <div className="first-line">
                  <p>
                    <span>$25</span>
                  </p>
                  <IconContext.Provider value={{ className: 'like-item' }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                </div>
                <div className="item-details">
                  <div className="img-wrapper">
                    <img src={best_4} alt="" />
                  </div>
                  <div className="content">
                    <h4>HeadPhones</h4>
                    <h2>Xiamo Redmi Note 4</h2>
                    <p>
                      $225<span>$300</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sngle-best-seller-item">
                <div className="first-line">
                  <p>
                    <span>$25</span>
                  </p>
                  <IconContext.Provider value={{ className: 'like-item' }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                </div>
                <div className="item-details">
                  <div className="img-wrapper">
                    <img src={best_5} alt="" />
                  </div>
                  <div className="content">
                    <h4>HeadPhones</h4>
                    <h2>Xiamo Redmi Note 4</h2>
                    <p>
                      $225<span>$300</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sngle-best-seller-item">
                <div className="first-line">
                  <p>
                    <span>$25</span>
                  </p>
                  <IconContext.Provider value={{ className: 'like-item' }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                </div>
                <div className="item-details">
                  <div className="img-wrapper">
                    <img src={best_6} alt="" />
                  </div>
                  <div className="content">
                    <h4>HeadPhones</h4>
                    <h2>Xiamo Redmi Note 4</h2>
                    <p>
                      $225<span>$300</span>
                    </p>
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

export default BestSeller
