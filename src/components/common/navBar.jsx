import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
class NavBar extends Component {
  state = {}
  render() {
    return (
      <nav className="main-hero-navbar">
        <div className="navbar-container">
          <div className="navbar-all-categories-menu">
            <div className="navbar-menu-container">
              <div className="category-container">
                <div className="cart-burger">
                  <IconContext.Provider value={{ className: 'menu-icon' }}>
                    <AiOutlineMenu />
                  </IconContext.Provider>
                </div>
                <div className="cat-menu">
                  <Link to="/shop">Categories</Link>
                </div>
              </div>

              <ul>
                <li>
                  <a href="#2">Computers & Laptops </a>
                </li>
                <li>
                  <a href="#3">Cameras & Photos</a>
                </li>
                <li>
                  <a href="#3">Hardware</a>
                </li>
                <li>
                  <a href="#3">Smartphones & Tablets</a>
                </li>
                <li>
                  <a href="#3">TV & Audio</a>
                </li>
                <li>
                  <a href="#3">Gadgets</a>
                </li>
                <li>
                  <a href="#4">Car Electronics</a>
                </li>
                <li>
                  <a href="#4">Video Games & Consoles</a>
                </li>
                <li>
                  <a href="#2">Accessories</a>
                </li>
              </ul>
              <div className="left-menu">
                <a href="#2">Menu</a>

                <IconContext.Provider value={{ className: 'menu-icon' }}>
                  <AiOutlineMenu />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="navbar-content-list">
            <ul>
              <li>
                <a href="#2">Home</a>
              </li>
              <li>
                <a href="#2">
                  Super Detail
                  <IconContext.Provider
                    value={{ className: 'navbar-dropdown-icon' }}
                  >
                    <MdKeyboardArrowDown />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a href="#2">
                  Featured Bands
                  <IconContext.Provider
                    value={{ className: 'navbar-dropdown-icon' }}
                  >
                    <MdKeyboardArrowDown />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a href="#2">
                  Pages
                  <IconContext.Provider
                    value={{ className: 'navbar-dropdown-icon' }}
                  >
                    <MdKeyboardArrowDown />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a href="#2">Blog</a>
              </li>
              <li>
                <a href="#2">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
