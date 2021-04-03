import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { MdPhoneIphone } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { BiDollar } from 'react-icons/bi'
import { HiOutlineUser } from 'react-icons/hi'
class TopBar extends Component {
  state = {}
  render() {
    return (
      <div className="main-navbar">
        <div className="topbar-container">
          <div className="topbar-left-container">
            <ul>
              <li>
                <a href="#3">
                  <IconContext.Provider
                    value={{ className: 'topbar-left-icon' }}
                  >
                    <MdPhoneIphone />
                  </IconContext.Provider>
                  <span>+250 782 301 208</span>
                </a>
              </li>
              <li>
                <a href="#2">
                  <IconContext.Provider
                    value={{ className: 'topbar-left-icon' }}
                  >
                    <AiOutlineMail />
                  </IconContext.Provider>
                  <span>moiserushanika2006@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="topbar-right-container">
            <ul>
              <li>
                <a className="dropdown" href="#2">
                  <span>English</span>
                  <ul className="custom-list-one">
                    <li>
                      <a href="#2">French</a>
                    </li>
                    <li>
                      <a href="#4">Spanish</a>
                    </li>
                    <li>
                      <a href="#0">Japanese</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="#2" className="dropdown">
                  <IconContext.Provider
                    value={{ className: 'topbar-right-icons' }}
                  >
                    <BiDollar />
                  </IconContext.Provider>
                  <span>US dollars</span>
                  <ul className="custom-list">
                    <li>
                      <a href="#2">Euro</a>
                    </li>
                    <li>
                      <a href="#4">GPB British Pound</a>
                    </li>
                    <li>
                      <a href="#0">JPY Japanese Yen</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="#2" className="auth register">
                  <IconContext.Provider
                    value={{ className: 'topbar-right-icons' }}
                  >
                    <HiOutlineUser />
                  </IconContext.Provider>
                  <span>Register</span>
                </a>
              </li>
              <li>
                <a className="auth signin" href="#4">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
