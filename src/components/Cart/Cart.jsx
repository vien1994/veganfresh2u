import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import classes from "./Cart.modules.css";
import Modal from './Modal'

function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[ 
        {id:'c1', name: 'Glazed Tofu', quantity: 4, price: 12.99}
    ].map(item => <li>{item.name}</li>)}</ul>;

  return (
  <Modal>
    {cartItems}
    <div className={classes['total-price']}>
        <span>Total Amount</span>
        <span>$69.420</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Place Order</button>
    </div>
  </Modal>
  )
}

export default Cart;
