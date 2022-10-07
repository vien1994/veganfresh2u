import React from 'react';
import { useState } from 'react';
import EditAdminOrdersCard from './EditAdminOrdersCard';

// Card that is created for each group of orders
// Each card displays all the items ordered, the date, and the total
function AdminOrdersCard({editProfToFalse}, props) {
    const [editMode, setEditMode] = useState(false);
    
    function editToFalse () {
      setEditMode(false);
    }
  
    let orderItems = [];

    // Generate the list of orders to be displayed
    if(props.items) {
        let key = 0;
        orderItems = props.items.map(item => {
            key++;
            return (
                <p key={key} className='pl-4 pt-1 pb-1 italic'>{item.description} <span className='font-bold not-italic'>x{item.quantity}</span></p>
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
        <h3 className=" font-bold text-lg pb-2">Saturday Jan 03{props.dateOrdered}</h3>
        {orderItems}
        <div className='pt-2 inline-flex'>
          <p className="mr-2 font-medium">Order status:</p>
          <p className="mr-2">Order placed</p> {props.status}
          <button className="edit-status-button" onClick={() => setEditMode(true)}>Edit</button>
        </div>
        <p className='font-bold pt-2 flex justify-end'>Total: ${props.total}</p>
      </div>)}
    </div>
  )
}


export default AdminOrdersCard;