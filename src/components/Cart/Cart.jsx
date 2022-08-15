import { useContext } from 'react';
import React from "react";
import "./Cart.css";
import CartItem from './CartItem';
import Modal from './Modal'
import CartContext from '../../store/cart-context';
import { collection, getDoc, addDoc, setDoc, doc, serverTimestamp, query, where, getDocs } from "firebase/firestore"; 
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

    // mock order
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

    // Used to see if the customer is placing their first order or not. This allows us to create their first record in the placeOrder() method.
    const checkIfUserOrderIDExists = async (userID) => {
      const docRef = doc(db, `orders/${userID}/transactions/1`);
      const docSnap = await getDoc(docRef);
      console.log(docSnap)

      if (docSnap.exists()) {
        return true;
      } else {
        // doc.data() will be undefined in this case and does not exist
        return false;
      }
    }

    // Writes order to DB. Need to implement validation. Did order go through?
    const placeOrder = async () => {
      console.log("placing order...");

      // If the user does not have a record (document) in the orders table, create an empty one for them. Then create the subcollection, "transactions", to store the actual order data.
      const userOrderIDExists = await checkIfUserOrderIDExists(user.uid);
      console.log("Does user exist: ", userOrderIDExists)

      if(!userOrderIDExists) {
        try {
            // Create the record for the user in the orders table
            await setDoc(doc(db, `orders/${user.uid}/transactions/1`), dummyOrder);
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
          await setDoc(doc(db, `orders/${user.uid}/transactions/${nextID}`), dummyOrder);
          console.log('created transaction record');

        } catch (error) {
          console.log(error);
        }
      }


      // Create a new record in the orders table. Ensure that a UID is included in the order to keep track of all orders.
   
      
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
