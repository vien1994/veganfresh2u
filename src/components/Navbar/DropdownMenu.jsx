import { Link } from 'react-router-dom'
import Context from '../../store/Context';
import { useContext } from 'react';
import '../../../src/animations/animations.css'
import { useLocation } from 'react-router-dom'

function DropdownMenu() {
  const { closeHamburger, auth } = useContext(Context);
  const location = useLocation();
  console.log(location.pathname);
  
    return (
        <div className="absolute left-0 top-24 bg-white w-1/2 h-full border-r-2 border-grey z-10 dropdown overflow-clip">
            <div className="text-gray-500" >
              <h1 className="mobile-dropdown-header" >VEGAN STUFF</h1>
              <Link to="/about" className={`mobile-dropdown-items ${location.pathname === '/about' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>About Us</Link>
              <Link to="/merch" className={`mobile-dropdown-items ${location.pathname === '/merch' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Merch</Link>
              <Link to="/menu" className={`mobile-dropdown-items ${location.pathname === '/menu' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Menu</Link>
              <Link to="/orders" className={`mobile-dropdown-items ${location.pathname === '/orders' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Orders</Link>
              <Link to="/profile" className={`mobile-dropdown-items ${location.pathname === '/profile' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Profile</Link>
              <button className='mobile-dropdown-items' onClick={() => auth.signOut()}>Sign Out</button> 
            </div>
        </div>
    );

}

export default DropdownMenu;

