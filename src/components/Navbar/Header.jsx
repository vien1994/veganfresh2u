import SignIn from './SignIn';
import HeaderCart from '../Cart/HeaderCart';
import DropdownMenu from './DropdownMenu';
import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react'
import { useEffect, useContext } from 'react';
import Context from '../../store/Context';


function Header() {
  const { dropdownOpen, setDropdown, closeHamburger } = useContext(Context);

  return (
    // All the following styles will be ran as default
    // until screen size of 640px is reached, then 
    // all of the 'sm' styles will be active
    <div className="flex justify-evenly h-24 w-screen bg-white font-sans text-slate-500 overflow-x-hidden z-10">

      {/* Hamburger Icon - Appears only when the screen is mobile size. Changes the state of hamburgerOpen when clicked */}
      <div className='sm:hidden cursor-pointer self-center decoration-transparent'>
        <Hamburger toggled={dropdownOpen} toggle={setDropdown} hideOutline={true} />
      </div>

      <Link to="/" className="logo-sm text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 font-bold self-center cursor-pointer font-CabinSketch" onClick={closeHamburger}>VEGANFRESH 2 U</Link>

      <div className="hidden sm:flex sm:items-center">
        <Link to='/about' className="navbar-items" >ABOUT US</Link>
        <Link to="/pricing" className="navbar-items" >PRICING</Link>
        <Link to='/menu' className="navbar-items">MENU</Link>
        <Link to='/pantry' className="navbar-items">PANTRY</Link>
        <SignIn />
      </div>

      <div className="sm:hidden self-center"><SignIn /></div>

      {/* If the hamburger is open, shows dropdown menu, if hamburger is closed displays nothing */}
      { dropdownOpen === true ?

         <DropdownMenu /> 
         :
         null 
      }
     </div> 
  )
}

export default Header;

// add a menu dropdown 