import {useContext} from 'react'

import MealItemForm from '../Cart/MealItemForm';
import Context from '../../store/Context';

import veggieBowl from '../../img/VeggieBowl.jpg';

function Recipes(props) {
const cartCtx = useContext(Context);

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
    <div className="recipe-container relative border border-slate-200 w-96 mb-8">
      <div className="recipe-top-content flex justify-between">
        <div className="mx-2">
            <img src={veggieBowl} alt='veggieBowl' className="font-bold h-44 w-44" />
            <div className="recipe-content-center mb-5">
              <p className='font-bold'>{props.name}</p>
              <p>{props.with}</p>
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
