import React from 'react'
import StockCuttingBoard from './StockCuttingBoard.jpg'

function Home() {
  return (
    <div className="row-start-1 row-end-2 col-span-full grid grid-cols-7 grid-rows-4">
      <div className="block col-start-1 col-end-8 row-start-1 row-end-4 max-h-80 overflow-hidden">
      <img alt="Sample" src={StockCuttingBoard}></img>
      </div>
      <div className="col-start-4 row-start-2 text-6xl text-emerald-600">Home Content</div>
    </div>
    
  )
}
 
export default Home;