import React from 'react'

function PaymentPage() {
  return (
    <form>
      <div className="mb-2 overflow-auto">
        <label className="block">Your Address: </label>
        <input className="border-1 border-gray-600 rounded" type="text" id="address"></input>
      </div>
      <div className="mb-2">
        <label className="block">Postal Code: </label>
        <input className="border-1 border-gray-600 rounded" type="text" id="postal"></input>
      </div>
      <div className="mb-2">
        <label className="block">City: </label>
        <input className="border-1 border-gray-600 rounded" type="text" id="city"></input>
      </div>
      <button className="font-bold text-gray-900">Confirm</button>
    </form>
  )
}

export default PaymentPage;
