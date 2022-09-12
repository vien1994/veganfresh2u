import React from 'react';

function ItemOverlay(props) {
    return (
        <Modal onClose={props.onClose} >
            
        </Modal>
    // This is the code the cart overlay uses
    // Redo to dynamically display any item that is clicked in the menu/pantry
    // <Modal onClose={props.onClose} >
    //   {cartItems}
    //   <div className="cart-total">
    //     <span>Total Amount</span>
    //     <span>{totalAmount}</span>
    //   </div>
    //   <PaymentPage />
    //   <div className="cart-button-wrapper">
    //     <button className="cart-buttons cart-close-button" onClick={props.onClose} >Close</button>
    //     {hasItems && <button className="cart-buttons cart-order-button" onClick={placeOrder}>Place Order</button>}
    //   </div>

    // </Modal>
    )
}

export default ItemOverlay;