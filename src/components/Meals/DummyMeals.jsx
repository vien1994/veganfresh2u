import '../../../src/animations/animations.css'
import Recipes from "./Recipes";
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../store/Context';
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';

function DummyMeals() {
  const { db } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // When the page loads and we get the user info, then make a call to the database to get all our user transactions
  useEffect(() => {
    const getProducts = async () => {
      let tmpProducts = []; // Store all the products
  
      // Get all products & store in the tmp array
      const queryResults = await getDocs(collection(db, `products`));
      queryResults.forEach(async (doc) => {
        let tmpDocData = doc.data();
        tmpProducts.push(tmpDocData); // doc.data() is never undefined for query doc snapshots
      });

      setProducts(tmpProducts);
      setIsLoading(false);
    }

    getProducts();
  }, [db]);

  const mealsList = products.map(product => 
    <Recipes 
      id= {product.name}
      key={product.name} 
      name={product.name} 
      description={product.description}
      // allergies={product.allergies}
      // nutrition={product.nutrition} 
      price={product.price / 100}
      imgUrl={product.images[0]}
    />
  );

  return (
    <div className="meals flex flex-wrap content-center justify-evenly">
      {/* {mealsList} */}
      { isLoading === true ? 
        <h1>Loading</h1>
      :
        mealsList
      }
    </div>
  )
}

export default DummyMeals;


// <Recipes id= {products[0]}
//           key={products[0].name} 
//           name={products[0].name} 
//           description={products[0].description}
//           // allergies={products[0].allergies}
//           // nutrition={products[0].nutrition} 
//           price={prices[0].price}
//           imgUrl={products[0].images[0]}
//         />