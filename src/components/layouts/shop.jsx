import React, { Component } from 'react'
// import { IoIosArrowBack } from 'react-icons/io'
// import { IoIosArrowForward } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import featured_1 from '../../assets/images/featured_1.png'
import featured_2 from '../../assets/images/featured_2.png'
import featured_3 from '../../assets/images/featured_3.png'
import featured_4 from '../../assets/images/featured_4.png'
import featured_5 from '../../assets/images/featured_5.png'
import featured_6 from '../../assets/images/featured_6.png'
import featured_7 from '../../assets/images/featured_7.png'
import featured_8 from '../../assets/images/featured_8.png'
import TopBar from '../common/topbar'
import NavBar from '../common/navBar'
import Header from '../common/header'
import NewLetter from '../common/newLetter'
import Footer from '../common/footer'

class Shop extends Component {
  state = {}
  render() {
    return (
      <div className="main-shop-area">
        <TopBar />
        <Header />
        <NavBar />
        <div className="main-features-area">
          <div className="main-features-content">
            <div className="features-left-container_2">left</div>
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
              <div className="features-container-item_2">
                <div className="right-features-main-container_2">
                  <div className="single-item">
                    <div className="first-line">
                      <p className="change-color">
                        <span>$25</span>
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
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  <div className="single-item">
                    <div className="first-line">
                      {/* <p>
                      <span>$25</span>
                    </p> */}
                      <IconContext.Provider value={{ className: 'like-item' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                    </div>
                    <div className="img-wrapper">
                      <img src={featured_2} alt="" />
                    </div>
                    <div className="second-line">
                      <p>
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  </div>{' '}
                  <div className="single-item">
                    <div className="first-line">
                      <p>
                        <span>$25</span>
                      </p>
                      <IconContext.Provider value={{ className: 'like-item' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                    </div>
                    <div className="img-wrapper">
                      <img src={featured_3} alt="" />
                    </div>
                    <div className="second-line">
                      <p>
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  </div>{' '}
                  <div className="single-item">
                    <div className="first-line">
                      <p className="change-color">
                        <span>$25</span>
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
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  <div className="single-item">
                    <div className="first-line">
                      {/* <p>
                      <span>$25</span>
                    </p> */}
                      <IconContext.Provider value={{ className: 'like-item' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                    </div>
                    <div className="img-wrapper">
                      <img src={featured_4} alt="" />
                    </div>
                    <div className="second-line">
                      <p>
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  <div className="single-item">
                    <div className="first-line">
                      <p>
                        <span>$25</span>
                      </p>
                      <IconContext.Provider value={{ className: 'like-item' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                    </div>
                    <div className="img-wrapper">
                      <img src={featured_5} alt="" />
                    </div>
                    <div className="second-line">
                      <p>
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  </div>{' '}
                  <div className="single-item">
                    <div className="first-line">
                      <p className="change-color">
                        <span>$25</span>
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
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  <div className="single-item">
                    <div className="first-line">
                      {/* <p>
                      <span>$25</span>
                    </p> */}
                      <IconContext.Provider value={{ className: 'like-item' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                    </div>
                    <div className="img-wrapper">
                      <img src={featured_6} alt="" />
                    </div>
                    <div className="second-line">
                      <p>
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  </div>{' '}
                  <div className="single-item">
                    <div className="first-line">
                      <p className="change-color">
                        <span>$25</span>
                      </p>
                      <IconContext.Provider value={{ className: 'like-item' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                    </div>
                    <div className="img-wrapper">
                      <img src={featured_7} alt="" />
                    </div>
                    <div className="second-line">
                      <p>
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  </div>{' '}
                  <div className="single-item">
                    <div className="first-line">
                      {/* <p>
                      <span>$25</span>
                    </p> */}
                      <IconContext.Provider value={{ className: 'like-item' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                    </div>
                    <div className="img-wrapper">
                      <img src={featured_8} alt="" />
                    </div>
                    <div className="second-line">
                      <p>
                        $<span>255</span>
                      </p>
                      <p className="special">
                        $<span>300</span>
                      </p>
                    </div>
                    <div className="mark">
                      <p>Huawei MediaPad...</p>
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
                  </div>{' '}
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
        <div className="imported-component">
          <NewLetter />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Shop
