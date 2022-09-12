import '../../../src/animations/animations.css'
import Recipes from "./Recipes";
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../store/Context';
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

function DummyMeals() {
  const { db, auth, products } = useContext(Context);
  const [user] = useAuthState(auth);
  const [mealsList, setMealsList] = useState();
  
  console.log(products)
  // setMealsList(products.map(product => 
  //   <Recipes 
  //     id={product.name}
  //     key={product.name} 
  //     name={product.name} 
  //     description={product.description}
  //     // allergies={product.allergies}
  //     // nutrition={product.nutrition} 
  //     price={product.price}
  //     imgUrl={product.images[0]}
  //   />

  // ));

  useEffect(() => {
    if(products !== undefined) {

      console.log(products[0].price)

      setMealsList(products.map(product => 
        <Recipes 
          id={product.name}
          key={product.name} 
          name={product.name} 
          description={product.description}
          // allergies={product.allergies}
          // nutrition={product.nutrition} 
          price={product.price}
          imgUrl={product.images[0]}
        />
    ))}

    
  }, [products]);

  return (
    <div className="meals flex flex-wrap content-center justify-evenly">
      {/* {mealsList} */}
      {products !== undefined ?
        <Recipes id= {products[0]}
          key={products[0].name} 
          name={products[0].name} 
          description={products[0].description}
          // allergies={products[0].allergies}
          // nutrition={products[0].nutrition} 
          price={parseInt(products[0].price)}
          imgUrl={products[0].images[0]}
        />
      : 
        null
      }
    </div>
  )
}

export default DummyMeals;