import { map } from "@firebase/util";
import './DummyMeals.css'
import Recipes from "./Recipes";

const sampleMeals = [
    {
      id: 'm1',
      name: 'GLAZED TOFU',
      with: 'with Crunchy Bell Peppers and Rice',
      allergies: 'Nut-free, Gluten-free',
      nutrition: '420 Calories / 69 minutes',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'JACKFRUIT BURGER',
      with: 'with Creamy Aioli and Pickles',
      allergies: 'Nut-free, Gluten-free',
      nutrition: '420 Calories / 69 minutes',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'VEGAN PHO',
      with: 'with Scallions and Impossible meat',
      allergies: 'Nut-free, Gluten-free',
      nutrition: '420 Calories / 69 minutes',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'GREEN BOWL',
      with: 'with Lettuce and Cherry Tomatoes',
      allergies: 'Nut-free, Gluten-free',
      nutrition: '420 Calories / 69 minutes',
      price: 18.99,
    },
  ];

  function DummyMeals() {
    const mealsList = sampleMeals.map(meal => 
      <Recipes 
      id={meal.id}
      key={meal.id} 
      name={meal.name} 
      with={meal.with}
      allergies={meal.allergies}
      nutrition={meal.nutrition} 
      price={meal.price} 
      />
    );

    return (
        <div className="meals flex flex-wrap content-center justify-evenly">
          {mealsList}
        </div>
    )
  }

  export default DummyMeals;