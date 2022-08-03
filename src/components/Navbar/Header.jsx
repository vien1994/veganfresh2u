import React from 'react'
import SignIn from '../SignIn';
import HeaderCart from '../Cart/HeaderCart';
import { Link } from "react-router-dom";

function Header() {
  return (
    // All the following styles will be ran as default
    // until screen size of 640px is reached, then 
    // all the 'sm' styles will be active
    <div className="header-container-sm flex justify-evenly h-24 w-screen bg-white border-gray-300 border-b-2">
      <div className="sm:hidden self-center p-4 font-medium cursor-pointer">Dropdown</div>    
     <a href="/" className="logo-sm pl-12 text-4xl text-green-500 self-center cursor-pointer" >VeganFresh2U</a>
      <div className="hidden sm:flex sm:items-center">
        <Link to='/about' className="navbar-items-sm">About Us</Link>
        <Link to="/pricing" className="navbar-items-sm" >Pricing</Link>
        <Link to="/menu" className="navbar-items-sm">Menu</Link>
        <SignIn />
        <HeaderCart />
      </div>
      <div className="sm:hidden self-center"><SignIn /></div>
     </div> 
  )
}

export default Header;

// add a menu dropdown 