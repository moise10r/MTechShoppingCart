import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { CgSearch } from 'react-icons/cg'
import { CgDollar } from 'react-icons/cg'
import heart from '../../assets/images/heart.png'
import cart from '../../assets/images/cart.png'
class Header extends Component {
  state = {}

  handleCategories = () => {}
  render() {
    return (
      <div className="main-hero-header">
        <div className="main-header-container">
          <div className="header-logo">
            <a href="#logo">MoiseTech</a>
          </div>
          <div className="header-search-box">
            <form action="">
              <input
                type="text"
                name=""
                placeholder="Search for products..."
                id=""
              />
              <div className="search-dropdown-list">
                <div className="search-dropdown-container">
                  <a
                    href="#2"
                    onClick={this.handleCategories}
                    className="all-categories"
                  >
                    All Categories
                    <ul className="dropdown-search">
                      <li>
                        <a href="#4">All Categories</a>
                      </li>
                      <li>
                        <a href="#4">Computer</a>
                      </li>
                      <li>
                        <a href="#4">Laptop</a>
                      </li>
                      <li>
                        <a href="#4">Cameras</a>
                      </li>
                      <li>
                        <a href="#4">Hardwares</a>
                      </li>
                      <li>
                        <a href="#4">Smart Phones</a>
                      </li>
                    </ul>
                    <IconContext.Provider
                      value={{ className: 'research-icon' }}
                    >
                      <HiOutlineChevronDown />
                    </IconContext.Provider>
                  </a>
                </div>
              </div>
              <button>
                <IconContext.Provider value={{ className: 'research-icon2' }}>
                  <CgSearch />
                </IconContext.Provider>
              </button>
            </form>
          </div>
          <div className="right-container">
            <div className="container">
              <img src={heart} alt="" />
              <div className="about-like">
                <a href="#2">Wishlist</a>
                <span>115</span>
              </div>
            </div>
            <div className="container">
              <div className="cart">
                <img src={cart} className="image-cart" alt="" />
                <span className="cart-number">10</span>
              </div>
              <div className="about-cart">
                <a href="#2">Cart</a>
                <span>
                  <IconContext.Provider
                    value={{ className: 'cart-dollars-icon' }}
                  >
                    <CgDollar />
                  </IconContext.Provider>
                  115
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
