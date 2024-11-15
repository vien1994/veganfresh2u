import { useContext } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { getDoc, doc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFunctions, httpsCallable } from "firebase/functions";
import CartItem from './CartItem';
import Modal from './Modal'
import Context from '../../store/Context';
import PaymentPage from '../Orders/PaymentPage';

function Cart(props) {
  const { items, totalAmount, db, auth, showLoading, removeItem, addItem } = useContext(Context);
  const functions = getFunctions();
  const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');
  const stripe = useStripe();
  // Check if user is signed in. Signed in - User is an object. Signed out - User is null. 
  const [user] = useAuthState(auth);
  const totalAmountString = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = id => {
    removeItem(id);
  };

  const cartItemAddHandler = item => {
    addItem(item);
  };

  const cartItems = (
    <ul className="cart-items">
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );


  // Transforms cart data to fit the data Stripe is expecting
  const createFinalOrder = async () => {
    // Get the customer ID so stripe knows which record needs to be updated in firestore db
    const customerID = await getUserCustomerID(user.uid);

    let finalOrder = {
      customer_id: customerID, //ID from Stripe payment processing company
      line_items: [],
    };

    let total = 0;

    // Store all the cart items in line_items & calculate total to determine if shipping should be applied.
    items.forEach((item) => {
      total += item.amount * item.price;
      finalOrder.line_items.push({
        quantity: item.amount,
        price: item.priceId, // This is the key stripe uses to identify price information
      })
    });

    // Apply shipping to orders under 30
    finalOrder.shipping = false;
    if(total < 30) {
      finalOrder.shipping = true;
    }

    return finalOrder;
  }

  // Gets Stripe customer ID
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

    // Display loading animation since Stripe takes a good second to load up the checkout session
    showLoading(true);

    // After logging the order, do the payment.
    try{
      createStripeCheckout(order)
        .then(response => {
          const sessionId = response.data.id;
          // Redirects the user to the actual checkout session. The sessionId helps tie it back to the user in our DB.
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
        <span>{totalAmountString}</span>
      </div>
      {/* Commented out address field in checkout */}
      {/* <PaymentPage /> */}
      <div className="cart-button-wrapper">
        <button className="cart-buttons cart-close-button" onClick={props.onClose} >Close</button>
        {hasItems && <button className="cart-buttons cart-order-button" onClick={placeOrder}>Place Order</button>}
      </div>
    </Modal>
  )
}

export default Cart;
