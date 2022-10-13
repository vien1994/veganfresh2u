import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import Context from '../../store/Context';
// import 'animate.css';

function NewModal(props) {
  const {showModalHandler, modalData} = useContext(Context);
  const [animate, setAnimate] = useState(false);

  //animates the element and then resets the animation state after 2 seconds
  const animateHandler = () => {
    setAnimate(true);
    
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }

  return (
    <React.Fragment>
      <div className="h-screen w-screen opacity-70 bg-gray-800 fixed z-10" onClick={() => {showModalHandler(false)}} ></div>
      <div className="fixed flex flex-col h-4/6 w-2/3 z-20 bg-white rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2">
        <div className="w-11/12 self-center text-center border-1 border-black h-3/5" >IMAGE</div>
        <div className="">
          <h1 className="font-semibold" >{modalData.name}</h1>
          <p>Item Description. YouTube Link goes here as well</p>
          <p>Allergy Info{modalData.allergies}</p>
          <p>Nutrition Info{modalData.nutrition}</p>
        </div>
        <button className={`absolute bottom-5 right-5 font-medium text-green-900 ${animate === true ? 'animate__animated animate__tada' : ''}`} onClick={animateHandler}>Add to Cart</button>
      </div>
    </React.Fragment>
  )
}

export default NewModal;