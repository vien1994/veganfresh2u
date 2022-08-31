import { Link } from 'react-router-dom'
import Context from '../../store/Context';
import { useContext } from 'react';
import '../../../src/animations/animations.css'

function DropdownMenu() {
  const {closeHamburger} = useContext(Context);
  
    return (
        <div className="absolute left-0 top-24 bg-white w-1/2 h-full border-r-2 border-grey z-10 dropdown overflow-clip">
            <div className="text-gray-500" >
              <h1 className="mobile-dropdown-header" >VEGAN STUFF</h1>
              <Link to="/about" className="mobile-dropdown-items" onClick={closeHamburger}>About Us</Link>
              <Link to="/pricing" className="mobile-dropdown-items" onClick={closeHamburger}>Pricing</Link>
              <Link to="/menu" className="mobile-dropdown-items" onClick={closeHamburger}>Menu</Link>
            </div>
        </div>
    );
