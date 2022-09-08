import React from 'react'

function PaymentPage() {
  return (
    <form>
      <div className="mb-2 overflow-auto">
        <label className="block font-medium sm:text-lg">Your Address: </label>
        <input className="border-1 border-gray-600 rounded" type="text" id="address"></input>
      </div>
      <div className="mb-2">
        <label className="block font-medium sm:text-lg">Postal Code: </label>
        <input className="border-1 border-gray-600 rounded" type="text" id="postal"></input>
      </div>
      <div className="mb-2">
        <label className="block font-medium sm:text-lg">City: </label>
        <input className="border-1 border-gray-600 rounded" type="text" id="city"></input>
      </div>
      {/* <input type='time' min='16:30' max='20:00' required></input> */}
      {/* Add a note that will state deliveries will happen somewhere from 4:30 to 8:00PM */}
    </form>
  )
}

export default PaymentPage;
