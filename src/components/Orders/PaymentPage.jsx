import React from 'react'

function PaymentPage() {
  return (
    <form>
      <div className="m-4 overflow-auto">
        <label className="font-bold mb-2 block">Your Address: </label>
        <input className="border-1 border-gray-600" type="text" id="address"></input>
      </div>
      <div className="mb-2">
        <label className="font-bold mb-2 block">Postal Code: </label>
        <input className="border-1 border-gray-600" type="text" id="postal"></input>
      </div>
      <div className="mb-2">
        <label className="font-bold mb-2 block">City: </label>
        <input className="border-1 border-gray-600" type="text" id="city"></input>
      </div>
      <button>Confirm</button>
    </form>
  )
}

export default PaymentPage;
