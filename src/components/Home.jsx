import React from 'react'
import StockCuttingBoard from './StockCuttingBoard.jpg'

function Home() {
  return (
    <div className="row-start-1 row-end-2 col-span-full grid grid-cols-7 grid-rows-3">
      <img className="col-start-1 col-end-8 row-start-1 row-end-4" src={StockCuttingBoard}></img>
      <div className="col-start-4 row-start-2 row-end-3 text-6xl text-emerald-600">Home Content</div>
    </div>
  )
}
 
export default Home;

// Have the homepage image take up the whole row
// and overlay text onto the image

// .home-wrapper {
//   grid-row-start: 1;
//   grid-row-end: 2;
//   grid-column-start: 1;
//   grid-column-end: 7;

//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   grid-template-rows: 1fr;
// }

// .home-image {
//   grid-column-start: 1;
//   grid-column-end: 7;
// }

// .homepage-text {
//   font-size: 3rem;
//   color: rgb(13, 121, 13);
// }