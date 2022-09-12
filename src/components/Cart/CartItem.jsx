import { React } from 'react';
 
// Used in Cart.jsx
const CartItem = (props) => {
  console.log(props)
  const price = `$${props.price}`;

  return (
    <li className="cart-item">
      <div>
        <h2 className="cart-item-name">{props.name}</h2>
        <div className="cart-item-summary">
          <span className="cart-item-price">{price}</span>
          <span className="cart-item-amount">x {props.amount}</span>
        </div>
      </div>
      <div className="cart-item-actions">
        <button className="cart-item-buttons" onClick={props.onRemove}>-</button>
        <button className="cart-item-buttons" onClick={props.onAdd}>+</button>
        
      </div>
    </li>
  );
};

//  BUGFIX: When adding items to the cart and removing it total does not update correctly

export default CartItem;
