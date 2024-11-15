import SignIn from './SignIn';
import DropdownMenu from './DropdownMenu';
import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react'
import { useEffect, useContext } from 'react';
import Context from '../../store/Context';
import CartIcon from '../Cart/CartIcon';
import { useAuthState } from 'react-firebase-hooks/auth';



function Header() {
  const { dropdownOpen, setDropdown, closeHamburger, items, showCartHandler, auth, isAdmin} = useContext(Context);

  // Check if user is signed in. Signed in - User is an object. Signed out - User is null. 
  const [user] = useAuthState(auth);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    // All the following styles will be ran as default
    // until screen size of 640px is reached, then 
    // all of the 'sm' styles will be active
    <div className="flex justify-evenly h-24 w-screen bg-white font-sans text-slate-500 overflow-x-hidden z-10">

      {/* Hamburger Icon - Appears only when the screen is mobile size. Changes the state of hamburgerOpen when clicked */}
      <div className='sm:hidden cursor-pointer self-center decoration-transparent'>
        <Hamburger toggled={dropdownOpen} toggle={setDropdown} hideOutline={true} />
      </div>

      <Link to="/" className="logo-sm text-xl sm:text-2xl md:text-3xl lg:text-5xl text-green-500 font-bold self-center cursor-pointer font-CabinSketch whitespace-nowrap" onClick={closeHamburger}>VEGANFRESH 2 U</Link>

      <div className="hidden sm:flex sm:items-center">
        <Link to='/about' className="navbar-items whitespace-nowrap">WHY US</Link>
        <Link to="/merch" className="navbar-items" >MERCH</Link>
        <Link to='/menu' className="navbar-items">MENU</Link>
        <Link to='/pantry' className="navbar-items">PANTRY</Link>

        {/* Admins get an extra option */}
        { isAdmin ? 
          <Link to="/admin" className="navbar-items">Active Orders</Link>
        :
          null
        }

        {/* Sign in button as well as Profile Icon + Dropdown options */}
        <div className='pr-8 md:pr-1 lg:pr-8'>
          <SignIn />
        </div>
        <div className='w-9' onClick={() => showCartHandler(true)}>
          <CartIcon />
        </div>
        { numberOfCartItems > 0 ? 
          <span className="badge_option2 -translate-x-4 -translate-y-4 scale-75">{numberOfCartItems}</span>
        :
          null
        }
      </div>

      {/* This section is for mobile and removes the profile picture and only shows the cart */}
      {/* If user exists, then we are logged in. Hide Cart and display Login Button instead */}
      {user ?
        <div className="sm:hidden self-center flex">
          <div className='w-9' onClick={() => showCartHandler(true)}>
            <CartIcon />
          </div>
          { numberOfCartItems > 0 ? 
            <span className="badge_option2 -translate-x-4 -translate-y-3 scale-75">{numberOfCartItems}</span>
          :
            null
          }
        </div>
      :
        <div className='sm:hidden self-center flex'>
          <SignIn />
        </div>
      }
        

      {/* If the hamburger is open, shows dropdown menu (for mobile), if hamburger is closed displays nothing */}
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