import React from 'react';
import { useState } from 'react';

// Card that is created for each group of orders
// Each card displays all the items ordered, the date, and the total
function AdminOrdersCard({editProfToFalse}, props) {
    const [editMode, setEditMode] = useState(false);
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
    <div className="bg-white shadow border-2 rounded-xl mt-4 mb-4 p-4">
      <h3 className=" font-bold text-lg pb-2">{props.dateOrdered}</h3>
      {orderItems}
      <div className='pt-2'>
        Status: {props.status}
        <button className="edit-profile-buttons" onClick={() => setEditMode(true)}>Edit</button>
      </div>
      <p className='font-bold pt-2 flex justify-end'>Total: ${props.total}</p>
    </div>
    // <button className="edit-profile-buttons mr-2" onClick={() => editProfToFalse()}>Back</button>
    // <button className="edit-profile-buttons">Save</button>
  )
}


export default AdminOrdersCard;