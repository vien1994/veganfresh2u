import { Link } from 'react-router-dom'
import Context from '../../store/Context';
import { useContext } from 'react';
import '../../../src/animations/animations.css'
import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';

// Mobile navbar that appears on the left side of the page
function DropdownMenu() {
  const { closeHamburger, auth, isAdmin } = useContext(Context);

  // Check if user is signed in. Signed in - User is an object. Signed out - User is null. 
  const [user] = useAuthState(auth);
  
  // Get URL path to determine what page we're on
  const location = useLocation();
  
  return (
    <div className="absolute left-0 top-24 bg-white w-1/2 h-full border-r-2 border-grey z-10 dropdown overflow-clip">
        <div className="text-gray-500" >
          <h1 className="mobile-dropdown-header" >VEGAN STUFF</h1>
          <Link to="/about" className={`mobile-dropdown-items ${location.pathname === '/about' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>About Us</Link>
          <Link to="/merch" className={`mobile-dropdown-items ${location.pathname === '/merch' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Merch</Link>
          <Link to="/menu" className={`mobile-dropdown-items ${location.pathname === '/menu' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Menu</Link>
          <Link to="/pantry" className={`mobile-dropdown-items ${location.pathname === '/pantry' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Pantry</Link>
          <Link to="/orders" className={`mobile-dropdown-items ${location.pathname === '/orders' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Orders</Link>
          <Link to="/profile" className={`mobile-dropdown-items ${location.pathname === '/profile' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Profile</Link>
          
          {/* Admins get an extra option */}
          { isAdmin ? 
            <Link to="/admin" className={`mobile-dropdown-items ${location.pathname === '/admin' ? 'border-l-3 border-green-600 bg-green-100 text-green-500' : ''} `} onClick={closeHamburger}>Active Orders</Link>
          :
            null
          }

          {/* If signed in, provide Sign Out button */}
          { user ? 
            <button className='mobile-dropdown-items' onClick={() => auth.signOut()}>Sign Out</button> 
          :
            null
          }
        </div>
    </div>
  );

}

export default DropdownMenu;

