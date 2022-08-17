import React from 'react'
import CartContext from './cart-context';
import { useReducer } from 'react';

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

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;