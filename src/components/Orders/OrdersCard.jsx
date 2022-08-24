import React from 'react'

function OrdersCard(props) {
  return (
    <div className="text-gray-600 bg-white shadow-md border-2 rounded-xl">
      <div className="m-4">
        <div className="font-medium" >
          Name goes here {props.foodID}
          </div>
        <div>Total: ${props.total}</div>
        <div>Quantity: {props.qty}</div>
        <div>Status: {props.status}</div>
      </div>
    </div>
  )
}


export default OrdersCard;