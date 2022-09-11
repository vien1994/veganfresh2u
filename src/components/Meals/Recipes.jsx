import { useContext, Fragment } from 'react';
import MealItemForm from '../Cart/MealItemForm';
import Context from '../../store/Context';

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
    <Fragment>
      <div className="recipe-container relative border border-slate-200 w-96 mb-8">
        <img src={props.imgUrl} alt='veggieBowl' className="font-bold w-96 h-44" />
        <div className='m-2'>
          <p className='font-bold'>{props.name}</p>
          <p className='mb-4'>{props.description}</p>
          <p className="italic">Allergies Here</p>
          <div className='flex justify-between items-center'>
            <p>Calories Here</p>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </Fragment>
    
  )
}

export default Recipes;
