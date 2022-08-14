import { useContext } from 'react';
import React from "react";
import "./Cart.css";
import CartItem from './CartItem';
import Modal from './Modal'
import CartContext from '../../store/cart-context';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";


function Cart(props) {
    const cartCtx = useContext(CartContext);
    const db = props.db;
    const auth = getAuth();
    // Check if user is signed in. Signed in - User is an object. Signed out - User is null. 
    const [user] = useAuthState(auth);

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


    const dummyOrder = {
      total: 50,
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


    // Writes order to DB. Need to implement validation. Did order go through?
    const placeOrder = async () => {
      console.log("placing order...");
      // Create a new record in the orders table. Ensure that a UID is included in the order to keep track of all orders.
      try {
        await addDoc(collection(db, `orders`), dummyOrder);
        console.log('order placed');
      } catch (error) {
        console.log(error);
      }
      
    }

  return (
  <Modal onClose={props.onClose} >
    {cartItems}
    <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
    <div className="actions">
        <button className="button--alt" onClick={props.onClose} >Close</button>
        {hasItems && <button className="button" onClick={placeOrder}>Place Order</button>}
    </div>
  </Modal>
  )
}

export default Cart;
