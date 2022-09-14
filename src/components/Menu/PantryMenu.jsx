import React from 'react';
import DummyPantry from '../Meals/DummyPantry';

function PantryMenu() {
    return (
      <div className="col-start-1 col-end-7 row-start-1 row-end-7">
      <div className="self-center text-gray-700 m-4 pt-4 text-4xl sm:text-5xl font-semibold">Sauces and Sides</div>
      <div>  
          <div className="menu-active-content mt-4">
            <DummyPantry />
          </div>                  
        </div>
    </div> 
  )
}

export default PantryMenu;