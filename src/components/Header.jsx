import React from 'react'
import './Header.css'
import SignIn from './SignIn';

function Header() {
  return (
    <div className="header-container banner">
     <div id="logo">VeganFresh2U</div>
      <div className="navbar">
        <a href='/about' className="navbar-item">About Us</a>
        <a href='/menu' className="navbar-item">Menu</a>
        <SignIn />
      </div>         
     </div> 
  )
}

export default Header;
