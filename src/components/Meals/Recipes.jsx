import {useContext} from 'react'

import MealItemForm from '../Cart/MealItemForm';
import CartContext from '../../store/cart-context';

function Recipes(props) {
const cartCtx = useContext(CartContext);

const addToCartHandler = amount => {
  cartCtx.addItem({
    id: props.id,
    name: props.name,
    with: props.with,
    allergies: props.allergies,
    nutrition: props.nutrition,
    amount: amount,
    price: props.price,
});
};

  return (
    <div className="recipe-container relative border border-slate-100">
      <div className="recipe-top-content flex justify-between">
        <div className="">
            <picture className="font-bold">PICTURE GOES HERE</picture>
            <div className="recipe-content-center">
              <a>
                <div>
                  {props.name}
                  <div>{props.with}</div>
                </div>
              </a>
            </div>
              <div className="recipe-tags italic">{props.allergies}</div>
              <div className="recipe-info">
              <div className="recipe-details">{props.nutrition}</div>
            </div>  
        </div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  )
}

export default Recipes;
