import {useState} from 'react';
import DummyMeals from '../Meals/DummyMeals';
import './MenuTabs.css';

function MenuTabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="menu-container">
      <div className="self-center text-gray-700 m-4 pt-4 text-4xl sm:text-5xl font-semibold">Meal Kits</div>
      <div className="self-center text-gray-700 my-2 text-xl sm:text-2xl font-normal italic">What's cooking this week...</div>
      <div className="self-center text-gray-700 mx-6 text-lg sm:text-xl">
        Certified fresh recipes delivered to your doorstep. 
        Choose from a variety of healthy meals and put your chef's hat on.
      </div>
      <div className="menu-bloc-tabs">  
        {/* //Sets the clicked tab to the current index (tab 1 2 or 3) */}
        <button className={toggleState === 1 ? "menu-tabs menu-active-tabs" : "menu-tabs"} onClick={() => toggleTab(1)}>BREAKFASTS</button>
        <button className={toggleState === 2 ? "menu-tabs menu-active-tabs" : "menu-tabs"} onClick={() => toggleTab(2)}>LUNCHES</button>
        <button className={toggleState === 3 ? "menu-tabs menu-active-tabs" : "menu-tabs"} onClick={() => toggleTab(3)}>DINNERS</button>
      </div>

        <div className="grow"> {/* The content of the active tab will fill the whole container */}
          {/* Checks which tab is active and displays the content of the currently active tab  */}
          {/* VIEN: Removed menu-content here. */}
          {toggleState === 1 ? 
            <div key={1} className="menu-active-content mt-4">
              <div className="flex justify-center">
                <h1 className="menu-tab-header inline-flex">Breakfasts</h1>
                <div className="font-normal italic text-base pl-4 pt-1">Available in 2-4 servings</div>
              </div>
              <DummyMeals />
            </div>
          : toggleState === 2 ?
            <div key={2} className="menu-active-content mt-4">
              <div className="flex justify-center">
                <h1 className="menu-tab-header inline-flex">Lunches</h1>
                <div className="font-normal italic text-base pl-4 pt-1">Available in 2-4 servings</div>
              </div>
              <DummyMeals />
            </div>
          : 
            <div key={3} className="menu-active-content mt-4">
              <div className="flex justify-center">
                <h1 className="menu-tab-header inline-flex">Dinner</h1>
                <div className="font-normal italic text-base pl-4 pt-1">Available in 2-4 servings</div>
              </div>
              <DummyMeals />
            </div>
          }
        </div>

    </div>
  )
}

export default MenuTabs;