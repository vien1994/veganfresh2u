import React from 'react';
import './MenuTabs.css';
import MenuTabs from './MenuTabs.jsx';


function Menu() {
  // <script src="MenuTabs.jsx" defer></script>
  return (
    <div className="">
      <ul className="tabs">
        <li data-tab-target="#breakfasts" className="active tab">Breakfasts</li>
        <li data-tab-target="#lunches" className="tab">Lunches</li>
        <li data-tab-target="#dinners" className="tab">Dinners</li>
      </ul>
      <div className="tab-content">
        <div id="breakfasts active" data-tab-content>
          <h1>Breakfasts</h1>
          <p>Breakfast options</p>
        </div>
        <div id="lunches" data-tab-content>
          <h1>Lunches</h1>
          <p>Lunch options</p>
        </div>
        <div id="dinners" data-tab-content>
          <h1>Dinners</h1>
          <p>Dinner options</p>
        </div>
      </div>
    </div>
  )
}

export default Menu;