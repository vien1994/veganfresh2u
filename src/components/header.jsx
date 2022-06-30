
import React from "react";
// import logo from '../../globals/img/doof2.png';

import './header.styles.scss';

const Header = (props) => (
  <div className="header">
      <img src={logo} alt="Doofenshmirtz" className="logo"></img>
      <div className="title">{props.children}</div>
  </div>
);

export default Header;