import Hamburger from 'hamburger-react';
import {Link} from 'react-router-dom'

// RUN NPM RUN BUILD-CSS in a new terminal

function DropdownMenu(props) {
    return (
        <div className="absolute overflow-y-scroll left-0 top-24 bg-white w-1/2 h-full border-r-2 border-grey z-10">
            <div className="text-gray-500" >
             <Link to="/about" className="block text-lg p-3 ml-2 mt-2" >About Us</Link>
             <Link to="/pricing" className="block text-lg p-3 ml-2" >Pricing</Link>
             <Link to="/menu" className="block text-lg p-3 ml-2">Menu</Link>
             {/* Add visual effects for hover and active state of each tab */}
            </div>
        </div>
    );
}


export default DropdownMenu;