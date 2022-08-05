import React from 'react'
// import StockCuttingBoard from '../img/StockCuttingBoard.jpg';
import wave from '../img/wave.svg';

function Home() {
  return (
    <div className="row-start-1 row-end-2 col-span-full grid grid-cols-7 grid-rows-4">
      {/* <div className="col-start-1 col-end-8 row-start-1 row-end-4 max-h-80 overflow-hidden"></div> */}
      {/* <img src={wave} className=" h-4/6 w-full col-start-1 col-end-8 row-start-1"/> */}
      <div className="bg-green-500 h-full w-full col-start-1 col-end-8 row-start-1" />
      <div className="col-start-3 row-start-1 text-6xl text-gray-800">Test</div>
    </div> 
  )
}
 
export default Home;