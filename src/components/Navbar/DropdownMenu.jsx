import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom'
import SignIn from './SignIn';

// RUN NPM RUN BUILD-CSS in a new terminal

function DropdownMenu(props) {

    return (
        <div className="absolute left-0 top-24 bg-white w-1/2 h-full border-r-2 border-grey z-10">
            <div className="text-gray-500" >
              <h1 className="mobile-dropdown-header" >VEGAN STUFF</h1>
             <Link to="/about" className="mobile-dropdown-items" >About Us</Link>
             <Link to="/pricing" className="mobile-dropdown-items" >Pricing</Link>
             <Link to="/menu" className="mobile-dropdown-items">Menu</Link>
             {/* Add visual effects for hover and active state of each tab */}
            </div>
        </div>
    );
}


export default DropdownMenu;