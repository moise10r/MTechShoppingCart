import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import logo_1 from '../../assets/images/logos_1.png'
import logo_2 from '../../assets/images/logos_2.png'
import logo_3 from '../../assets/images/logos_3.png'
import logo_4 from '../../assets/images/logos_4.png'

class Footer extends Component {
  state = {}
  render() {
    return (
      <div className="main-hero-footer-area">
        <div className="main-hero-container">
          <div className="left-area-main-container">
            <div className="left-contents">
              <h1>MoiseTech</h1>
              <h4>Got Question? Call Us 24/7</h4>
              <h3>+250 782 301 208</h3>
              <p>752 Street Gisozi,Kigali,Rwanda,RW </p>
              <ul>
                <li>
                  <IconContext.Provider value={{ className: 'icons' }}>
                    <FaFacebook />
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider value={{ className: 'icons' }}>
                    <FaTwitter />
                  </IconContext.Provider>
                </li>{' '}
                <li>
                  <IconContext.Provider value={{ className: 'icons' }}>
                    <FaInstagram />
                  </IconContext.Provider>
                </li>{' '}
                <li>
                  <IconContext.Provider value={{ className: 'icons' }}>
                    <FaLinkedin />
                  </IconContext.Provider>
                </li>{' '}
                <li>
                  <IconContext.Provider value={{ className: 'icons' }}>
                    <FaGithub />
                  </IconContext.Provider>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-right-container">
            <div className="main-content">
              <div className="col_1">
                <h2>Find it Fast</h2>
                <ul>
                  <li>
                    <a href="#2">Computers & Laptops</a>
                  </li>
                  <li>
                    <a href="#2">Cameras & Photos</a>
                  </li>
                  <li>
                    <a href="#2">Hardware</a>
                  </li>
                  <li>
                    <a href="#2">Smartphones & Tablets</a>
                  </li>
                  <li>
                    <a href="#2">TV & Audio</a>
                  </li>
                </ul>
              </div>
              <div className="col_2">
                <h2>Gadgets</h2>
                <ul>
                  <li>
                    <a href="#2">Computers & Laptops</a>
                  </li>
                  <li>
                    <a href="#2">Cameras & Photos</a>
                  </li>
                  <li>
                    <a href="#2">Hardware</a>
                  </li>
                  <li>
                    <a href="#2">Smartphones & Tablets</a>
                  </li>
                  <li>
                    <a href="#2">TV & Audio</a>
                  </li>
                </ul>
              </div>{' '}
              <div className="col_3">
                <h2>Customer Care</h2>
                <ul>
                  <li>
                    <a href="#2">Computers & Laptops</a>
                  </li>
                  <li>
                    <a href="#2">Cameras & Photos</a>
                  </li>
                  <li>
                    <a href="#2">Hardware</a>
                  </li>
                  <li>
                    <a href="#2">Smartphones & Tablets</a>
                  </li>
                  <li>
                    <a href="#2">TV & Audio</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <div className="footer-main-container">
            <div class="copyright_content">
              Copyright ©2021 All rights reserved | This template is made with
              <IconContext.Provider value={{ className: 'love' }}>
                <AiFillHeart />
              </IconContext.Provider>
              by
              <a href="/" target="_blank">
                MoiseTechnology
              </a>
            </div>
            <div className="other-services">
              <ul>
                <li>
                  <img src={logo_1} alt="" />
                </li>
                <li>
                  <img src={logo_2} alt="" />
                </li>
                <li>
                  <img src={logo_3} alt="" />
                </li>
                <li>
                  <img src={logo_4} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
