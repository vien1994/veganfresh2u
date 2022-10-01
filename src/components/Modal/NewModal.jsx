import React from 'react'
import { useContext } from 'react';
import Context from '../../store/Context';

function NewModal(props) {
    const {showModalHandler, modalData} = useContext(Context);
    console.log(modalData);

  return (
    <React.Fragment>
      <div className="h-screen w-screen opacity-70 bg-gray-800 fixed z-10" onClick={() => {showModalHandler(false)}} ></div>
      <div className="fixed flex flex-col h-4/6 w-2/3 z-20 bg-white rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2">
        <div className="border-1 border-black self-center w-full h-2/5" >IMAGE</div>
        <h1 className="font-semibold text-lg mb-2" >{modalData.name}</h1>
        <p className="my-3" >Item Description. <br/> Click HERE for cooking tutorial!</p>
        <p className="italic" >Allergy Info{modalData.allergies}</p>
        <p className="italic" >Nutrition Info{modalData.nutrition}</p>
        <button className="absolute bottom-0 right-0 m-4" >Add to Cart</button>
      </div>
    </React.Fragment>
  )
}

export default NewModal;