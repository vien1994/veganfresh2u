import './HeaderCart.css';
import Context from "../../store/Context";
import { useContext } from "react";

function HeaderCart(props) {
    const cartCtx = useContext(Context);
    
    // Set only the items array as a dependency as opposed to the entire cart context
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
      <button onClick={props.onClick} >
        CHECKOUT <span className="badge_option2">{numberOfCartItems}</span>
      </button>
    )
}

export default HeaderCart;