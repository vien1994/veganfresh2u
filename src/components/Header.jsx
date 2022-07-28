import React from 'react'
import SignIn from './SignIn';

function Header() {
  return (
    // <div className="header-container">
    //  <a href="/" className="self-center pl-12 text-4xl text-green-500 cursor-pointer" >VeganFresh2U</a>
    //   <div className="flex items-center">
    //     <a href='/about' className="m-4 font-semibold">About Us</a>
    //     <a href='/menu' className="m-4 font-semibold">Menu</a>
    //     <SignIn />
    //   </div>         
    //  </div>  sm:fixed sm:flex sm:justify-between sm:h-24 sm:w-screen sm:bg-gray-100  sm:border-gray-300 sm:border-b-2;

    <div className="header-container-sm flex justify-evenly h-24 w-screen bg-white border-gray-300 border-b-2">
      <div className="sm:hidden self-center p-4 font-medium cursor-pointer">Dropdown</div>    
     <a href="/" className="logo-sm pl-12 text-4xl text-green-500 self-center cursor-pointer" >VeganFresh2U</a>
      <div className="hidden sm:flex sm:items-center">
        <a href='/about' className="navbar-items-sm">About Us</a>
        <a href="/pricing" className="navbar-items-sm" >Pricing</a>
        <div><a href="/menu" className="navbar-items-sm">Menu</a></div>
        <SignIn />
      </div>
      <div className="sm:hidden self-center"><SignIn /></div>
     </div> 
  )
}

export default Header;

// add a menu dropdown 