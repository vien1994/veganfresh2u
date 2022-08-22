import CartIcon from "./CartIcon";
import './HeaderCart.css';
import Context from "../../store/Context";
import { useContext, useState, useEffect} from "react";

function HeaderCart(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] =  useState(false);
    const cartCtx = useContext(Context);
    
    // Set only the items array as a dependency as opposed to the entire cart context
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    // Trying to set a variable equal to CSS classes 
    const cartButtonClass ='cart-button';

    const bumpClass = btnIsHighlighted ? 'bump' : '';

    
    // Animation for the cart to 'bump' everytime an item is added 
    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
    }, [items]);

    return (
        <button className="cart-button bump" onClick={props.onClick} >
            <span className="icon"><CartIcon /></span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCart;