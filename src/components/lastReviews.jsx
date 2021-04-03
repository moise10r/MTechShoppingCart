import React, { Component } from 'react'
import review_1 from '../assets/images/review_1.jpg'
import review_2 from '../assets/images/review_2.jpg'
import review_3 from '../assets/images/review_3.jpg'

class LastReviews extends Component {
  state = {}
  render() {
    return (
      <div className="main-area-review">
        <div className="main-review-area-container">
          <div className="navbar-reviews">
            <h1>Latest Reviews</h1>
            <a href="#2">VIEW ALL REVIEWS</a>
          </div>
          <div className="main-reviews-content">
            <div className="single-review">
              <div className="img-wrapper">
                <img src={review_1} alt="" />
              </div>
              <div className="review-details">
                <h3>Robert Sanchez</h3>
                <h5>2 day ago</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="single-review">
              <div className="img-wrapper">
                <img src={review_2} alt="" />
              </div>
              <div className="review-details">
                <h3>Robert Sanchez</h3>
                <h5>2 day ago</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>{' '}
            <div className="single-review">
              <div className="img-wrapper">
                <img src={review_3} alt="" />
              </div>
              <div className="review-details">
                <h3>Robert Sanchez</h3>
                <h5>2 day ago</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default LastReviews
