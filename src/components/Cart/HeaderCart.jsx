import CartIcon from "./CartIcon";
import './HeaderCart.css';
import CartContext from "../../store/cart-context";
import { useContext } from "react";

function HeaderCart(props) {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className="cart-button" onClick={props.onClick} >
            <span className="icon"><CartIcon /></span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCart;