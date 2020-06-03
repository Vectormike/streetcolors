import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Street Colors & Interiors</strong>, a residential and commercial
        wall changer
        <br />
        managed by <a href="https://web.facebook.com/Jobia1">Joseph Abia</a>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
