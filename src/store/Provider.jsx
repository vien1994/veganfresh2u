// This file provides the values we want to be accessible to all child components.
// It ALSO initializes firebase.
// VALUES passed down include: firebase db, auth, cart

import React from 'react'
import Context from './Context';
import { useReducer, useState, useEffect } from 'react';

// Import the firebase functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFunctions } from 'firebase/functions';
import { collection, getDocs } from "firebase/firestore";


//Set up firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyDIUoDfxR18I6_VwMcy8QXD_pnKrserdFg",
  authDomain: "veganfresh2u.firebaseapp.com",
  databaseURL: "https://veganfresh2u-default-rtdb.firebaseio.com",
  projectId: "veganfresh2u",
  storageBucket: "veganfresh2u.appspot.com",
  messagingSenderId: "1041425850896",
  appId: "1:1041425850896:web:b8fdaa9a30f8a5cbf12095",
  measurementId: "G-G1F5BX8209",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize functions
const functions = getFunctions(app);

// Tool used to check who is logged in
const auth = getAuth();

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
    // Loop that runs if an item is added to the cart
    if (action.type === 'ADD') {
      // Adds price and quantity together to find total for the item(s)
      const updatedTotalAmount = state.totalAmount + action.item.price;
      
      // Creates a new array with the added item at the end
      const updatedCartItems = state.items.concat(action.item);

      // If the item exists already, it's index will be returned; the findIndex function runs for every item currently in the array
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      
      // Stores any existing cart items in a constant variable
      const existingCartItem = state.items[existingCartItemIndex];
      
      // Variables to update cart if the item already exists
      let updatedItem;
      let updatedItems;

      // Runs if the item you are trying to add already exists in the cart
      if (existingCartItem) {
        // If the item already exists, then updatedItem will have a new amount
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1
        };
        updatedItems = [...state.items];    // Copies the old objects and creates a new array
        updatedItems[existingCartItemIndex] = updatedItem;  // Updates the pre-existing item in the cart to reflect new amount
      } else {   
        // If a new item is added, creates new array with new item appended  
        updatedItem = {...action.item};
        updatedItems = state.items.concat(action.item);
      }
      
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    
    // Loop that runs to remove an item
    if (action.type === 'REMOVE') {
      const existingCartItemIndex = state.items.findIndex(
        // Uses dispatched id from the function 'removeItemFromCartHandler'
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      // If the amount is one, the item will be removed (EX: quantity of items is at one, remove/decrement is clicked, item is removed)
      if (existingItem.amount === 1) {
        // TRUE: If the id does not match keeps item, FALSE: If the id matches, item is removed
        updatedItems = state.items.filter(item => item.id !== action.id);
      } 
      // Else if the amount of items is more than 1 reduce amount by 1
      else {
        const updatedItem = {...existingItem, amount: existingItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      // Returns a new state
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }

    return defaultCartState;
};

function CartProvider(props) {
    const [cartState, dispatchCartAction]= useReducer(cartReducer, defaultCartState);
    const [dropdown, setDropdown] = useState(false);

    // Dispatches item prop
    const addItemToCartHandler = item => {
      dispatchCartAction({type:'ADD', item: item});
    };

    // Dispatches id prop
    const removeItemFromCartHandler = id => {
      dispatchCartAction({type: 'REMOVE', id: id})
    };

    // Close the navbar on mobile screen
    const closeHamburger = () => {
      setDropdown(false);
    }

    // Handles the modal for the cart to review the items added
    const [cartIsShown, setCartIsShown] = useState(false);

    // Handles whether or not the cart is shown. Accepts true/false
    const showCartHandler = (bool) => {
      setCartIsShown(bool);
    };

    // Determines if loading SVG or Modal for the menu should appear
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const [isAdmin, setIsAdmin] = useState(false);

    // Handles whether or not loading SVG should appear. Accepts true/false
    const showLoading = (bool) => {
      setIsLoading(bool);
    };

    // Handles whether or not Modal for the menu should appear. Accepts true/false
    const showModalHandler = (bool) => {
      setShowModal(bool);
    };

    // When the page loads, check if the user is an admin. 
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          user.getIdTokenResult()
            .then((result) => {
              if(result.claims.admin === true) {
                setIsAdmin(true)
              }
            })
        } else {
          // User is signed out
          setIsAdmin(false);
        }
      });
    }, [])
   

    const context = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      db: db,
      auth: auth,
      dropdownOpen: dropdown,
      setDropdown: setDropdown,
      closeHamburger: closeHamburger,
      cartIsShown: cartIsShown,
      showCartHandler: showCartHandler,
      isLoading: isLoading,
      showLoading: showLoading,
      showModal: showModal, 
      showModalHandler: showModalHandler,
      modalData: modalData,
      setModalData: setModalData,
      isAdmin: isAdmin,
    };

  return (
    <Context.Provider value={context}>
      {props.children}
    </Context.Provider>
  )
}

export default CartProvider;