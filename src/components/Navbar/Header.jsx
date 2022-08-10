import React from 'react'
import SignIn from '../SignIn';
import HeaderCart from '../Cart/HeaderCart';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    // All the following styles will be ran as default
    // until screen size of 640px is reached, then 
    // all the 'sm' styles will be active
    <div className="header-container-sm flex justify-evenly h-24 w-screen bg-white border-gray-300 border-b-2 font-sans text-slate-500 overflow-x-hidden">
      {/* Hamburger Icon - Appears only when the screen is mobile size */}
      <div className="space-y-2 sm:hidden self-center p-4 font-medium cursor-pointer">
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div>
      <Link to="/" className="logo-sm text-3xl text-green-500 font-bold self-center cursor-pointer" >VeganFresh2U</Link>
      <div className="hidden sm:flex sm:items-center">
        <Link to='/about' className="navbar-items-sm">ABOUT US</Link>
        <Link to="/pricing" className="navbar-items-sm" >PRICING</Link>
        <Link to="/menu" className="navbar-items-sm">MENU</Link>
        <SignIn />
        <HeaderCart onClick={props.onShowCart} />
      </div>
      <div className="sm:hidden self-center"><SignIn /></div>
     </div> 
  )
}

export default Header;

// add a menu dropdown 