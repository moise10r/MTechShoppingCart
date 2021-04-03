import React, { Component } from 'react'
import send from '../../assets/images/send.png'
class NewLetter extends Component {
  state = {}
  render() {
    return (
      <div className="main-newletter-area">
        <div className="main-new-letter-container">
          <div className="letf-container">
            <img src={send} alt="" />
            <div className="signup">
              <h2>Sign up for Newsletter</h2>
              <p>...and receive %20 coupon for first shopping.</p>
            </div>
          </div>
          <div className="right-content">
            <form action="">
              <input
                autoFocus
                type="text"
                placeholder="Enter your email address "
              />
              <button type="submit">Subscribe</button>
            </form>
            <a href="#2">Unsubscribe</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewLetter
