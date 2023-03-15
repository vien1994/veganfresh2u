import React from 'react';
import { useState } from 'react';
import EditAdminOrdersCard from './EditAdminOrdersCard';

// Card that is created for each group of orders
// Each card displays all the items ordered, the date, and the total
function AdminOrdersCard(props) {
  const [editMode, setEditMode] = useState(false);
  
  function editToFalse() {
    setEditMode(false);
  }

  let orderItems = [];

  // Generate the list of orders to be displayed
  if(props.items) {
    let key = 0;
    orderItems = props.items.map(item => {
      key++;
      return (
        <p key={key} className='pl-4 pt-1 pb-1 italic'>{item.item} <span className='font-bold not-italic'>x{item.quantity}</span></p>
      )
    })
  }

  return (
    <div>
      {editMode === true ? (
        <div>
          <EditAdminOrdersCard editOrdersToFalse={editToFalse}/>
        </div>
      ) : (
        <div className="bg-white shadow border-2 rounded-xl mt-4 mb-4 p-4">
          <h3 className="font-bold text-lg pb-2">{props.dateOrdered}</h3>
          <h4 className='italic text-lg'>{props.address}</h4>                  {/* Customer address */}
         <h5 className='italic text-lg'>{props.customer}</h5>                  {/* Customer email */}
          {orderItems}
          <div className='pt-2 inline-flex'>
            <p className="mr-2 font-medium">Order status:</p>
            <p className="mr-2">{props.status}</p> 
            <button className="edit-status-button" onClick={() => setEditMode(true)}>Edit</button>
          </div>
          <p className='font-bold pt-2 flex justify-end'>Total: ${props.total}</p>
        </div>
      )}
    </div>
  )
}


export default AdminOrdersCard;