import { Link } from 'react-router-dom'
import Context from '../../store/Context';
import { useContext } from 'react';
import '../../../src/animations/animations.css'

// RUN NPM RUN BUILD-CSS in a new terminal

function DropdownMenu() {
  const {closeHamburger} = useContext(Context);
  return (
    <div className="absolute left-0 top-24 bg-white w-1/2 h-full border-r-2 border-grey z-10 dropdown overflow-clip">
      <div className="text-gray-500" >
        <Link to="/about" className="block text-lg p-3 ml-2 mt-2" onClick={closeHamburger}>About Us</Link>
        <Link to="/pricing" className="block text-lg p-3 ml-2" onClick={closeHamburger}>Pricing</Link>
        <Link to="/menu" className="block text-lg p-3 ml-2" onClick={closeHamburger}>Menu</Link>
        {/* Add visual effects for hover and active state of each tab */}
      </div>
    </div>
  );
}


export default DropdownMenu;