import { useContext } from "react";
import { Link } from "react-router-dom";
import HeaderCart from "../Cart/HeaderCart";
import Provider from "../../store/Provider";
import Context from "../../store/Context";

export default function ProfileDropdown(props) {
  const { showCartHandler, auth } = useContext(Context);

  return(
    <ul className="absolute -translate-x-1/4 z-10 border border-gray-300 bg-white">
      <li className="navbar-profile-dropdown-li sm:hidden">
        <Link to='/about'>ABOUT US</Link>
      </li>
      <li className="navbar-profile-dropdown-li sm:hidden">
        <Link to="/pricing">PRICING</Link>
      </li>
      <li className="navbar-profile-dropdown-li sm:hidden">
        <Link to='/menu'>MENU</Link>
      </li>
      <li className="navbar-profile-dropdown-li">
        <Link to="/profile">PROFILE</Link>
      </li>
      <li className="navbar-profile-dropdown-li">
        <Link to='/orders'>ORDERS</Link>
      </li>
      <li>
        <button className="navbar-profile-dropdown-li" onClick={() => auth.signOut()}>SIGN OUT</button> 
      </li>
      <li className="navbar-profile-dropdown-li">
        <HeaderCart onClick={() => showCartHandler(true)} />
      </li>
    </ul>
  )
}