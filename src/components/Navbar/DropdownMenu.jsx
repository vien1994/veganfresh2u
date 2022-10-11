import { Link } from 'react-router-dom'
import Context from '../../store/Context';
import { useContext } from 'react';
import '../../../src/animations/animations.css'

function DropdownMenu() {
  const { closeHamburger, auth } = useContext(Context);
  
    return (
        <div className="absolute left-0 top-24 bg-white w-1/2 h-full border-r-2 border-grey z-10 dropdown overflow-clip">
            <div className="text-gray-500" >
              <h1 className="mobile-dropdown-header" >VEGAN STUFF</h1>
              <Link to="/about" className="mobile-dropdown-items" onClick={closeHamburger}>About Us</Link>
              <Link to="/merch" className="mobile-dropdown-items" onClick={closeHamburger}>Merch</Link>
              <Link to="/menu" className="mobile-dropdown-items" onClick={closeHamburger}>Menu</Link>
              <Link to="/orders" className="mobile-dropdown-items" onClick={closeHamburger}>Orders</Link>
              <Link to="/profile" className="mobile-dropdown-items" onClick={closeHamburger}>Profile</Link>
              <button className="mobile-dropdown-items" onClick={() => auth.signOut()}>Sign Out</button> 
            </div>
        </div>
    );

}

export default DropdownMenu;

