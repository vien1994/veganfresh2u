import CartIcon from "./CartIcon";
import './HeaderCart.css'

function HeaderCart() {
    return (
        <button className="cart-button">
            <span className="icon"><CartIcon /></span>
            <span className="badge">3</span>
        </button>
    )
}

export default HeaderCart;