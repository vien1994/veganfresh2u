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
      <img src={veggieBowl} alt='veggieBowl' className="font-bold w-96 h-44" />
      <p className='font-bold'>{props.name}</p>
      <p className='mb-4'>{props.with}</p>
      <p className="italic">{props.allergies}</p>
      <div className='flex justify-between items-center'>
        <p>{props.nutrition}</p>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  )
}

export default Recipes;
