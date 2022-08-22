import React from 'react'
import Context from './Context';
import { useReducer } from 'react';

// Import the firebase functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    // Loop that runs if an item is added to the cart
    if (action.type === 'ADD') {
        
        // Adds price and quantity together to find total for the item(s)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
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


    // BUGFIX: When adding an item within the cart and then removing all existing items the page crashes

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

    // Dispatches item prop
    const addItemToCartHandler = item => {
        dispatchCartAction({type:'ADD', item: item});
    };

    // Dispatches id prop
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const context = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        db: db
    };

  return (
    <Context.Provider value={context}>
        {props.children}
    </Context.Provider>
  )
}

export default CartProvider;