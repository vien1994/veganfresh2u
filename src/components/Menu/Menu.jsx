import React from 'react';
import './MenuTabs.css';
import MenuTabs from './MenuTabs.jsx';
import DummyMeals from '../Meals/DummyMeals';

function Menu() {
  return (
      <div className="col-start-1 col-end-7 row-start-1 row-end-7">
        <MenuTabs />
      </div>
  )
}

export default Menu;