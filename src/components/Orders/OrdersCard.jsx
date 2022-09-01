import React from 'react'

function OrdersCard(props) {
  return (
    <div className="text-gray-700 bg-white shadow border-2 rounded-xl m-4">
      <div className="m-4">
        <div className="font-medium" >
          Name: {props.foodID}
        </div>
        <div>Total: ${props.total}</div>
        <div>Quantity: {props.qty}</div>
        <div>Status: {props.status}</div>
      </div>
    </div>
  )
}


export default OrdersCard;