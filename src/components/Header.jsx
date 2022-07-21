import React from 'react'
import SignIn from './SignIn';

function Header() {
  return (
    <div className="header-container">
     <a href="/" className="self-center pl-12 text-4xl text-green-500 cursor-pointer" >VeganFresh2U</a>
      <div className="flex items-center">
        <a href='/about' className="m-4 font-semibold">About Us</a>
        <a href='/menu' className="m-4 font-semibold">Menu</a>
        <SignIn />
      </div>         
     </div> 
  )
}

export default Header;
