import React, { useContext } from 'react'
// import StockCuttingBoard from '../img/StockCuttingBoard.jpg';
import wave from '../img/wave.svg';
import veggiebox from '../img/veggiebox.jpg';
import homeWallpaper from '../img/home_wallpaper_2.png';
import '../../src/animations/animations.css';
import Context from '../store/Context';
import { Link } from "react-router-dom";

function Home() {
  const { dropdownOpen } = useContext(Context)

  return (
    <React.Fragment>
      <div className={`row-start-1 row-end-2 col-span-full grid grid-cols-15 grid-rows-6 ${dropdownOpen === true ? 'overflow-clip' : ''}`}>
        <img src={homeWallpaper} alt='bg' className="w-full col-start-1 col-end-13 row-start-1 row-end-7 -z-10"/>
        <p className='col-start-5 col-end-9 row-start-3 appear md:text-3xl sm:text-xl lg:text-6xl text-gray-800'>VeganFresh2U</p>
        <p className='col-start-5 col-end-9 row-start-4 appear md:text-3xl sm:text-xl lg:text-6xl text-gray-800'>Eat Fresh</p>
      </div> 
      {/* Meal Kits Section */}
      <div className='col-span-full grid grid-col-15 grid-rows-6'>
        <h2 className='md:text-3xl sm:text-xl lg:text-6xl text-gray-800 col-span-full'>Pick Your Favorite Meal Kits</h2>
        <p className='col-span-full'>Start with either a Meal Kit or Fresh, Prepared Meal plan and then customize your weekly delivery.</p>
      </div>
      <div className='col-span-full'>
        <h2 className='md:text-3xl sm:text-xl lg:text-6xl text-gray-800'>Check Out Our Pantry</h2>
        <p className='col-span-full'>Start with either a Meal Kit or Fresh, Prepared Meal plan and then customize your weekly delivery.</p>
      </div>
      {/* <div className="row-start-2 row-end-3 col-span-full flex flex-wrap justify-center">
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
      </div> */}
    </React.Fragment>
  )
}
 
export default Home;