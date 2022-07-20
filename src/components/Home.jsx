import React from 'react'
import StockCuttingBoard from './StockCuttingBoard.jpg'
import './Home.css'

function Home() {
  return (
    <div>
      <img src={StockCuttingBoard}></img>
      <div className="homepage-text">Home Content</div>
    </div>
  )
}
 
export default Home;