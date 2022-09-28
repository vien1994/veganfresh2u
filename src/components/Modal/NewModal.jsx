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
        <div>IMAGE</div>
        <h1 className="font-semibold" >{modalData.name}</h1>
        <p>Item Description. YouTube Link goes here as well</p>
        <p>Allergy Info{modalData.allergies}</p>
        <p>Nutrition Info{modalData.nutrition}</p>
        <button>Add to Cart</button>
      </div>
    </React.Fragment>
  )
}

export default NewModal;