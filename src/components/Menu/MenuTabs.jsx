import {useState} from 'react';
import './MenuTabs.css'
import DummyMeals from '../Meals/DummyMeals';

function MenuTabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="menu-container">
      <div className="self-center text-5xl m-4 font-semibold">Meal Kits</div>
      <div className="self-center text-2xl font-medium">What's cooking this week</div>
      <div className="self-center text-xl">
        Certified fresh recipes delivered to your doorstep. 
        Choose from a variety of healthy meals and put your chef's hat on.
      </div>
      <div className="menu-bloc-tabs">
        
      <button
    //   Sets the clicked tab to the current index (tab 1 2 or 3)
          className={toggleState === 1 ? "menu-tabs menu-active-tabs" : "menu-tabs"}
          onClick={() => toggleTab(1)}
        >BREAKFASTS</button>

        <button
          className={toggleState === 2 ? "menu-tabs menu-active-tabs" : "menu-tabs"}
          onClick={() => toggleTab(2)}
        >LUNCHES</button>

        <button
          className={toggleState === 3 ? "menu-tabs menu-active-tabs" : "menu-tabs"}
          onClick={() => toggleTab(3)}
        >DINNERS</button>
      </div>

        <div className="grow"> {/* The content of the active tab will fill the whole container */}

            {/* Checks which tab is active and displays the content of the currently active tab  */}
            <div className={toggleState === 1 ? "menu-content  menu-active-content" : "menu-content"}>
              <div className="flex justify-center">
                <h1 className="tab-header inline-flex">Breakfasts
                <div className="font-normal italic text-base pl-4 pt-1">Available in 2-4 servings</div>
                </h1>
              </div>
                
                <DummyMeals />
            </div>

            <div className={toggleState === 2 ? "menu-content  menu-active-content" : "menu-content"}>
              <div className="flex justify-center">
                <h1 className="tab-header inline-flex">Lunches
                <div className="font-normal italic text-base pl-4 pt-1">Available in 2-4 servings</div>
                </h1>
              </div>
                <DummyMeals />
            </div>

            <div className={toggleState === 3 ? "menu-content  menu-active-content" : "menu-content"}>
              <div className="flex justify-center">
                <h1 className="tab-header inline-flex">Dinners
                <div className="font-normal italic text-base pl-4 pt-1">Available in 2-4 servings</div>
                </h1>
              </div>
                <DummyMeals />
            </div>

        </div>

    </div>
  )
}

export default MenuTabs;