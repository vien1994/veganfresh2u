import React from 'react'
import './Header.css'
import SignIn from './SignIn';

function Header() {
  return (
    // <ul className="banner">
    //   <li>
    //     <a href="/" id="logo">VeganFresh2U</a>
    //   </li>
    //   <li>
    //     <a href="/about" className="navbar-item">About Us</a>
    //   </li>
    //   <li>
    //     <a href="/menu" className="navbar-item">Menu</a>
    //   </li>
    //   <li className="navbar-item">
    //     <SignIn />
    //   </li>
    // </ul>

    <div className="header-container banner">
     <div id="logo">VeganFresh2U</div>
      <div className="navbar">
        <div className="navbar-item">About Us</div>
        <div className="navbar-item">Menu</div>
        <SignIn />
      </div>         
     </div> 
  )
}

export default Header;
