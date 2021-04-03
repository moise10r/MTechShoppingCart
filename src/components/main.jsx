import React, { Component } from 'react'

import TopBar from './common/topbar'
import NavBar from './common/navBar'
import Header from './common/header'
import Banner from './banner'
import Characteristic from './characteristic'
import Features from './features'
import PopularCategory from './popularCategory'
import Banner2 from './banner_2'
import NewArrival from './newArrivals'
import BestSeller from './bestSeller'
import Advert from './advert'
import Trends from './trendOverlay'
import LastReviews from './lastReviews'
import RecentReview from './RecentReview'
import Brands from './brands'
import NewLetter from './common/newLetter'
import Footer from './common/footer'

class Main extends Component {
  state = {}
  render() {
    return (
      <div className="main-container-area">
        <TopBar />
        <Header />
        <NavBar />
        <Banner />
        <Characteristic />
        <Features />
        <PopularCategory />
        <Banner2 />
        <NewArrival />
        <BestSeller />
        <Advert />
        <Trends />
        <LastReviews />
        <RecentReview />
        <Brands />
        <NewLetter />
        <Footer />
      </div>
    )
  }
}

export default Main
