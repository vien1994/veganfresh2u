import React from 'react';
import DummyPantry from '../Meals/DummyPantry';

function PantryMenu() {
    return (
    <div className="menu-container col-start-1 col-end-7 row-start-1 row-end-7">
      <div className="self-center text-gray-700 m-4 pt-4 text-4xl sm:text-5xl font-semibold">Sauces and Sides</div>
      <div className="self-center text-gray-700 my-2 text-xl sm:text-2xl font-normal italic">Looking to stock up?</div>
      <div className="self-center text-gray-700 mx-6 text-lg sm:text-xl">
        Certified fresh ingredients delivered to your doorstep. 
        Choose from a variety of individual sauces or sides for your kitchen.
      </div>
      {/* <div className="self-center text-gray-700 m-4 pt-4 text-4xl sm:text-5xl font-semibold">Sauces and Sides</div> */}
      <div>  
        <div className="menu-active-content mt-4">
          <DummyPantry />
        </div>                  
      </div>
    </div>
  )
}

export default PantryMenu;