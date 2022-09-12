import '../../../src/animations/animations.css'
import PantryItems from "./PantryItems";

const pantryItems = [
    {
      id: 'p1',
      name: 'Sweet Viet Vegan Sauce',
      with: 'made from sugar, soy sauce, and other things',
      allergies: 'Nut-free, Gluten-free',
      nutrition: '420 Calories / 1 serving',
      price: 10.99,
    },
    {
      id: 'p2',
      name: 'Sides of Veggies',
      with: 'contains a mix of chopped mushrooms, bell pepper, onions and seasonal veggies',
      allergies: 'Nut-free, Gluten-free',
      nutrition: '420 Calories / 1 serving',
      price: 8,
    },
    {
      id: 'p3',
      name: 'Placeholder Item',
      with: 'with things',
      allergies: 'Nut-free, Gluten-free',
      nutrition: '420 Calories / 1 serving',
      price: 20,
    },
  ];

  function DummyPantry() {
    const pantryList = pantryItems.map(pantry => 
      <PantryItems
        id={pantry.id}
        key={pantry.id} 
        name={pantry.name} 
        with={pantry.with}
        allergies={pantry.allergies}
        nutrition={pantry.nutrition} 
        price={pantry.price} 
      />
    );

    return (
      <div className="meals flex flex-wrap content-center justify-evenly">
        {pantryList}
      </div>
    )
  }

  export default DummyPantry;