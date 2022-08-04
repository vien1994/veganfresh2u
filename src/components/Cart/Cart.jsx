import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "./Cart.css";
import Modal from './Modal'

function Cart(props) {
    const cartItems = (<ul className="cart-items">{[ 
        {id:'c1', name: 'Glazed Tofu', quantity: 4, price: 12.99}
    ].map((item) => (<li>{item.name}</li>))}</ul>);

  return (
  <Modal>
    {cartItems}
    <div className="total">
        <span>Total Amount</span>
        <span>$69.420</span>
    </div>
    <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Place Order</button>
    </div>
  </Modal>
  )
}

export default Cart;
