import React from 'react'

function PaymentPage() {
  return (
    <form>
      <div className="">
        <label>Your Address: </label>
        <input type="text" id="address"></input>
      </div>
      <div className="">
        <label>Postal Code: </label>
        <input type="text" id="postal"></input>
      </div>
      <div className="">
        <label>City: </label>
        <input type="text" id="city"></input>
      </div>
      <button>Confirm</button>
    </form>
  )
}

export default PaymentPage;
