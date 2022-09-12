import { useContext, useState, Fragment } from 'react';
import MealItemForm from '../Cart/MealItemForm';
import Context from '../../store/Context';
// import veggieBowl from '../../img/VeggieBowl.jpg';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function PantryItems(props) {
  const cartCtx = useContext(Context);
  const [imgUrl, setImgUrl] = useState(null);
  const storage = getStorage();
  
  getDownloadURL(ref(storage, 'images/MealBox.jpg'))
    .then((url) => {
      // `url` is the download URL for 'images/MealBox.jpg'
      setImgUrl(url);
    })
    .catch((error) => {
      // Handle any errors
      console.log(error)
    });


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
      { imgUrl !== null ?
          <div className="recipe-container relative border border-slate-200 w-96 mb-8">
            <img src={imgUrl} alt='veggieBowl' className="font-bold w-96 h-44" />
            <div className='m-2'>
              <p className='font-bold'>{props.name}</p>
              <p className='mb-4'>{props.with}</p>
              <p className="italic">{props.allergies}</p>
              <div className='flex justify-between items-center'>
                <p>{props.nutrition}</p>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
              </div>
            </div>
          </div>
        :
          null
      }
    </Fragment>
    
  )
}

export default PantryItems;
