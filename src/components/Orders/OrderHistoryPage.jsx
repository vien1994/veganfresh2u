import React from 'react'

export default function OrderHistoryPage() {
    const dummyOrder = {
        total: 52,
        order1: {
          foodID: "1", //Need a database for food to reference ID
          qty: 2
        },
        order2: {
          foodID:"2", 
          qty: 1
        },
        status: "order placed", // Need to figure out what status we want to use
        date: serverTimestamp(), //Timestamp
        uid: user.uid,  // Keep track of WHOSE order it is - Need user table and address info
        customer_id: "", //ID from Stripe payment processing company
        payment_succeeded: false // Make this dynamic
      }

    //   Print all the dummy order info (quantity, price, id(name) of the item, image of the item) onto a page(dynamically) and style it
      
  return (
    <div>
      <div>{dummyOrder.total}</div>
    </div>
  )
}
