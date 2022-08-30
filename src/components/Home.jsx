import { useContext } from 'react'
// import StockCuttingBoard from '../img/StockCuttingBoard.jpg';
import wave from '../img/wave.svg';
import '../../src/animations/animations.css';
import Context from '../store/Context';

function Home() {
  const { dropdownOpen } = useContext(Context)

  return (
    <div className={`row-start-1 row-end-2 col-span-full grid grid-cols-7 grid-rows-4 ${dropdownOpen === true ? 'overflow-clip' : ''}`}>
      {/* <div className="col-start-1 col-end-8 row-start-1 row-end-4 max-h-80 overflow-hidden"></div> */}
      <img src={wave} alt='bg' className="w-full col-start-1 col-end-8 row-start-1 row-end-5 opacity-50 -z-10"/>
      {/* <div className="bg-green-500 h-full w-full col-start-1 col-end-8 row-start-1" /> */}
      <div className="col-start-2 row-start-2 text-2xl sm:text-4xl md:text-6xl text-gray-800 appear">Enjoy</div>
    </div> 
  )
}
 
export default Home;