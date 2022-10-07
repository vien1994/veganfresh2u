import React from 'react'

function EditAdminOrdersCard({editOrdersToFalse}, props) {
    let orderItems = [];
  return (
    <div className="bg-white shadow border-2 rounded-xl mt-4 mb-4 p-4">
      <h3 className=" font-bold text-lg pb-2">Saturday Jan 03{props.dateOrdered}</h3>
      {orderItems}
      <div className='pt-2 sm:inline-flex'>
        <p className="mr-2 font-medium">
            Order status:
            <input className="border-1 sm:ml-1 rounded border-gray-400" />
        </p>
        <div className="flex mt-1" >
            <button className="edit-status-button mr-2" onClick={() => editOrdersToFalse()}>Back</button>
            <button className="edit-status-button">Save</button>
        </div>
      </div>
      <p className='font-bold pt-2 flex justify-end'>Total: ${props.total}</p>
    </div>
  )
}

export default EditAdminOrdersCard;