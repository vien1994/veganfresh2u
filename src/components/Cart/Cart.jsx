import { useContext } from 'react';
import React from "react";
// import "./Cart.css";
import CartItem from './CartItem';
import Modal from './Modal'
import Context from '../../store/Context';
import { collection, getDoc, setDoc, doc, serverTimestamp, query, getDocs } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFunctions, httpsCallable } from "firebase/functions";
import PaymentPage from '../Orders/PaymentPage';
import { useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import Loading from '../Loading/Loading';

function Cart(props) {
  const cartCtx = useContext(Context);
  const db = cartCtx.db;
  const auth = cartCtx.auth;
  const showLoading = cartCtx.showLoading;
  const functions = getFunctions();
  const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');
  const stripe = useStripe();
  const [isLoading, setIsLoading] = useState(false);


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
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}</ul>
  );

  // Constant to hold order information/details
  const createFinalOrder = async () => {

    // Get the customer ID so stripe knows which record needs to be updated in firestore db
    const customerID = await getUserCustomerID(user.uid);

    let finalOrder = {
      status: "order placed", // Need to figure out what status we want to use
      date: serverTimestamp(), //Timestamp
      uid: user.uid,  // Keep track of WHOSE order it is - Need user table and address info
      email: user.email,
      customer_id: customerID, //ID from Stripe payment processing company
      payment_succeeded: false, // Make this dynamic
      total: cartCtx.totalAmount,
    };

    let counter = 1;
    cartCtx.items.forEach((item) => {
      // For each food item list as order1, order2, and so on (stores foodID and qty)
      finalOrder[`order${counter}`] = {
        foodID: item.id,
        qty: item.amount,
      };
      counter++;
      console.log(finalOrder);
    })
    return finalOrder;
  }


  // Used to see if the customer is placing their first order or not. This allows us to create their first record in the placeOrder() method.
  const checkIfUserOrderIDExists = async (userID) => {
    const docRef = doc(db, `orders/${userID}/transactions/1`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return true;
    } else {
      // doc.data() will be undefined in this case and does not exist
      return false;
    }
  }

  const getUserCustomerID = async (userID) => {
    const docRef = doc(db, `customers/${userID}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().stripeId;
    } else {
      // doc.data() will be undefined in this case and does not exist
      return false;
    }
  }

  // Writes order to DB. Need to implement validation. Did order go through?
  const placeOrder = async () => {

    let order = await createFinalOrder();
    console.log("placing order...");

    // If the user does not have a record (document) in the orders table, create an empty one for them. Then create the subcollection, "transactions", to store the actual order data.
    const userOrderIDExists = await checkIfUserOrderIDExists(user.uid);
    console.log("Does user exist: ", userOrderIDExists)

    if (!userOrderIDExists) {
      try {
        // Create the record for the user in the orders table
        await setDoc(doc(db, `orders/${user.uid}/transactions/1`), order);
        console.log('created user and transaction record in orders table');

      } catch (error) {
        console.log(error);
      }
    } else {
      // User already has existing order data. Add a new transaction record
      try {
        // THIS SHOULD BE OPTIMIZED SOMEHOW - Seems like it would get a large payload after a while. Want to just grab the highest record instead of all.
        // Find out how many transactions this user has so we can determine the next ID for the incoming order being placed
        const q = query(collection(db, `orders/${user.uid}/transactions`));
        const querySnapshot = await getDocs(q);
        const nextID = querySnapshot.docs.length + 1;

        // Create the transaction record using the new ID
        await setDoc(doc(db, `orders/${user.uid}/transactions/${nextID}`), order);
        console.log('created transaction record');

      } catch (error) {
        console.log(error);
      }
    }

    showLoading(true);

    // After logging the order, do the payment.
    try{
      createStripeCheckout(order)
        .then(response => {
          console.log(response)
          console.log(response.data);
          const sessionId = response.data.id;
          stripe.redirectToCheckout({
            sessionId: sessionId
          })
        });
    }
    catch (err) {
      console.log(err)
    }

  }

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className="cart-total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <PaymentPage />
      <div className="cart-button-wrapper">
        <button className="cart-buttons cart-close-button" onClick={props.onClose} >Close</button>
        {hasItems && <button className="cart-buttons cart-order-button" onClick={placeOrder}>Place Order</button>}
      </div>
    </Modal>
  )
}

export default Cart;
