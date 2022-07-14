import React from 'react'
import './Header.css'

function Header() {
  return (
    <ul className="banner">
      <li>
        <a href="/" id="logo">VeganFresh2U</a>
      </li>
      <li>
        <a href="/about" className="navbar-item">About Us</a>
      </li>
      <li>
        <a href="/menu" className="navbar-item">Menu</a>
      </li>
      <li>
        <a href="/login" className="navbar-item">Sign In</a>
      </li>
    </ul>
    //  <div className="banner">
    //    <div className="navbar-item">About Us</div>
    //    <div className="navbar-item">Menu</div>
    //    <div className="navbar-item">Sign In</div>
    //    <div id="logo">VeganFresh2U</div>
    //  </div> 
  )
}

export default Header;
