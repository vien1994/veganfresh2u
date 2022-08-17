import { useContext } from 'react';
import React from "react";
import "./Cart.css";
import CartItem from './CartItem';
import Modal from './Modal'
import CartContext from '../../store/cart-context';

function Cart(props) {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
      cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
      cartCtx.addItem(item);
    };

    const cartItems = (
      <ul className="cart-items">{cartCtx.items.map((item) => (
        <CartItem 
        key={item.id}
        name={item.name} 
        amount={item.amount}
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)} 
        onAdd={cartItemAddHandler.bind(null, item)} 
        />
      ))}</ul>
    );

    console.log({cartCtx});

  return (
  <Modal onClose={props.onClose} >
    {cartItems}
    <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
    <div className="actions">
        <button className="button--alt" onClick={props.onClose} >Close</button>
        {hasItems && <button className="button">Place Order</button>}
    </div>
  </Modal>
  )
}

export default Cart;

// .cart-items {
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   max-height: 20rem;
//   overflow-y: scroll;
// }

// .total {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: bold;
//   font-size: 1.5rem;
//   margin: 1rem 0;
// }

// .actions {
//   text-align: right;
// }

// .actions button {
//   font: inherit;
//   cursor: pointer;
//   background-color: transparent;
//   border: 1px solid grey;
//   padding: 0.5rem 2rem;
//   border-radius: 25px;
//   margin-left: 1rem;
// }

// .actions button:hover,
// .actions button:active {
//   background-color: rgb(68, 184, 68);
//   border-color: grey;
//   color: white;
// }

// .actions .button--alt {
//   color: rgb(21, 121, 21);
//   font-weight: 500;
// }

// .actions .button {
//   background-color: rgb(24, 150, 24);
//   color: white;
//   font-weight: 500;
// }
