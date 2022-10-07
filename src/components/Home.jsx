import React, { useContext } from 'react'
// import StockCuttingBoard from '../img/StockCuttingBoard.jpg';
import wave from '../img/wave.svg';
import veggiebox from '../img/veggiebox.jpg';
import '../../src/animations/animations.css';
import Context from '../store/Context';
import { Link } from "react-router-dom";

function Home() {
  const { dropdownOpen } = useContext(Context)

  return (
    <React.Fragment>
      <div className={`row-start-1 row-end-2 col-span-full grid grid-cols-7 grid-rows-2 ${dropdownOpen === true ? 'overflow-clip' : ''}`}>
        {/* <div className="col-start-1 col-end-8 row-start-1 row-end-4 max-h-80 overflow-hidden"></div> */}
        <img src={wave} alt='bg' className="w-full col-start-1 col-end-8 row-start-1 row-end-5 opacity-50 -z-10"/>
        {/* <div className="bg-green-500 h-full w-full col-start-1 col-end-8 row-start-1" /> */}
        <div className="col-start-2 col-end-7 sm:col-end-6 row-start-1 xl:row-start-2 text-2xl sm:text-4xl md:text-6xl text-gray-800 appear">
          Coming soon...  A mealkit delivery service 
        </div>
        <div className="sm:col-start-4 sm:col-end-6 col-start-2 col-end-7 text-xl sm:text-4xl font-bold m-10">
          Sample Text Banner 
        </div>
      </div> 
      <div className="row-start-2 row-end-3 col-span-full flex flex-wrap justify-center">
        <div className="m-1 mb-20 relative">
          <img className="h-96" src={veggiebox} alt='bg'></img> 
          <Link to='/menu' className="homepage-buttons">
            Meal Kits
          </Link>
        </div>
        <div className="m-1 relative">
          <img className="h-96" src={veggiebox} alt='bg'></img>
          <Link to='/pantry' className="homepage-buttons">
            The Pantry
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
 
export default Home;