import React from 'react';

// Card that is created for each group of orders
// Each card displays all the items ordered, the date, and the total
function OrdersCard(props) {
  let orderItems = [];
  
  // Calculate if we need to display shipping information
  let calcIfShipping = 0;

  // Cancelled orders may not have items
  if(props.items) {
    for(let i = 0; i < props.items.length; i++) {
      calcIfShipping += props.items[i].amount_total;
    } 
  }
 
  // If order total is under $30, then shipping must have been charged
  if(calcIfShipping < 3000) {
    console.log(calcIfShipping);
    calcIfShipping = true;
  }

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
      {/* Add Shipping info if applicable */}
      { calcIfShipping === true ?
        <div className='pt-2'>Delivery: <b>$5</b></div>
      : 
        null
      }
      <div className='pt-2'>Status: {props.status}</div> 
      <p className='font-bold pt-2 flex justify-end'>Total: ${props.total}</p>
    </div>
  )
}


export default OrdersCard;