import React from 'react'

// Card that is created for each group of orders
// Each card displays all the items ordered, the date, and the total
function OrdersCard(props) {

  // Generate the list of orders to be displayed
  const orderItems = props.items.map(item => {
    return (
      <p className='pl-4 pt-1 pb-1 italic'>{item.description} <span className='font-bold not-italic'>x{item.quantity}</span></p>
    )
  })

  return (
    <div className="bg-white shadow border-2 rounded-xl mt-4 mb-4 p-4">
      <h3 className=" font-bold text-lg pb-2">{props.dateOrdered}</h3>
      {orderItems}
      <div className='pt-2'>Status: {props.status}</div>
      <p className='font-bold pt-2 flex justify-end'>Total: ${props.total}</p>
    </div>
  )
}


export default OrdersCard;