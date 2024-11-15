import { useContext, Fragment } from 'react';
import MealItemForm from '../Cart/MealItemForm';
import Context from '../../store/Context';

// Props probably come from DummyMeals.jsx
function Recipes(props) {
  const { 
    addItem, 
    showModalHandler,
    setModalData,
  } = useContext(Context);
  
  // Function to pass in data for the modal
  function settingUpModal () {
    setModalData({
      name: props.name,
      price: props.price,
      with: props.with,
      allergies: props.allergies,
      nutrition: props.nutrition,
    })
    showModalHandler(true);
  }

  // This data gets stored in the 'items' variable in the context
  const addToCartHandler = amount => {
    console.log('adding to cart', props)
    addItem({
      id: props.id,
      name: props.name,
      with: props.with,
      allergies: props.allergies,
      nutrition: props.nutrition,
      amount: amount,
      price: props.price,
      priceId: props.priceId,
    });
  };

  return (
    <Fragment>
      <div className="recipe-container relative border border-slate-200 w-96 mb-8" onClick={settingUpModal}>
        <img src={props.imgUrl} alt='veggieBowl' className="font-bold w-96 h-44" />
        <div className='m-2'>
          <p className='font-bold'>{props.name}</p>
          <p className='mb-4'>{props.description}</p>
          <div className='flex justify-end items-center'>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Recipes;
