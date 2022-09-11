import '../../../src/animations/animations.css'
import Recipes from "./Recipes";
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../store/Context';
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

function DummyMeals() {
  const {db, auth} = useContext(Context);
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState(null);
  const [mealsList, setMealsList] = useState([]);

  // When the page loads and we get the user info, then make a call to the database to get all our user transactions
  useEffect(() => {
    if(user !== null) {

      const getProducts = async () => {
        let tmp = [];
        const queryResults = await getDocs(collection(db, `products`));
        queryResults.forEach(async (doc) => {
          let tmpDocData = doc.data();

          //This fails for some reason 

          // const getPrice = await getDocs(collection(db, `products/${doc.id}/prices`));
          // getPrice.forEach((docPrice) => {
          //   console.log(docPrice.data());
          //   tmpDocData.price = docPrice.data().unit_amount
          // })





          tmpDocData.price = 6;
          console.log(tmpDocData)
          
          // doc.data() is never undefined for query doc snapshots
          tmp.push(tmpDocData);
        });

        // const getPrice = await getDocs(collection(db, `products/${doc.id}/prices`));
        // getPrice.forEach((price) => {
        //   tmpDocData.price = (price.data().unit_amount / 100).toFixed(2)
        // })

        console.log(tmp)
        setProducts(tmp);
      }


      getProducts();
    }
  }, [user, db]);

  useEffect(() => {
    if(products !== null) {
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
      ));
    }
  }, [products])

  console.log(products)


  return (
    <div className="meals flex flex-wrap content-center justify-evenly">
      {mealsList}
    </div>
  )
}

export default DummyMeals;