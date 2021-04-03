import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'
import view_1 from '../assets/images/view_1.jpg'
import view_2 from '../assets/images/view_2.jpg'
import view_3 from '../assets/images/view_3.jpg'
import view_4 from '../assets/images/view_4.jpg'
import view_5 from '../assets/images/view_5.jpg'
import view_6 from '../assets/images/view_6.jpg'

class RecentReview extends Component {
  state = {}
  render() {
    return (
      <div className="main-area-recent-rewiew">
        <div className="main-recent-review-container">
          <div className="navbar-recent-container">
            <h2>Recently Viewed</h2>
            <ul className="right-side">
              <li>
                <IconContext.Provider value={{ value: 'icon' }}>
                  <IoIosArrowBack />
                </IconContext.Provider>
              </li>
              <li>
                <IconContext.Provider value={{ value: 'icon' }}>
                  <IoIosArrowForward />
                </IconContext.Provider>
              </li>
            </ul>
          </div>
          <div className="recent-reviews-main-container">
            <div className="single-recent-review">
              <img src={view_1} alt="" />
              <p>
                $255 <span>$300</span>
              </p>
              <h2>LUNA Smartphone</h2>
            </div>
            <div className="single-recent-review">
              <div className="first-line">
                <span>-25%</span>
              </div>
              <img src={view_2} alt="" />
              <p>
                $255 <span>$300</span>
              </p>
              <h2>LUNA Smartphone</h2>
            </div>
            <div className="single-recent-review">
              <img src={view_3} alt="" />
              <p>
                $255 <span>$300</span>
              </p>
              <h2>LUNA Smartphone</h2>
            </div>{' '}
            <div className="single-recent-review">
              <img src={view_4} alt="" />
              <p>
                $255 <span>$300</span>
              </p>
              <h2>LUNA Smartphone</h2>
            </div>{' '}
            <div className="single-recent-review">
              <div className="first-line">
                <span>-25%</span>
              </div>
              <img src={view_5} alt="" />
              <p>
                $255 <span>$300</span>
              </p>
              <h2>LUNA Smartphone</h2>
            </div>{' '}
            <div className="single-recent-review">
              <div className="first-line">
                <span>-25%</span>
              </div>
              <img src={view_6} alt="" />
              <p>
                $255 <span>$300</span>
              </p>
              <h2>LUNA Smartphone</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecentReview
