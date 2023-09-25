import { nanoid } from 'nanoid';
import { useState } from 'react';
import AddIngredient from './AddIngredient';
import IngredientsInfoHelper from './IngredientsInfoHelper';
import IngredientsList from './IngredientsList';

const initialIngredients = [
  {
    id: nanoid(),
    name: '500g Chicken Breasts',
  },
  {
    id: nanoid(),
    name: '300 ml milk',
  },
  {
    id: nanoid(),
    name: '1 tbsp salt',
  },
];

const Ingredients = (props) => {
  console.log('Ingredient rendered');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState(initialIngredients);

  const addIngredient = (ingredient) => {
    setIngredients((ingredients) => [
      ...ingredients,
      {
        name: ingredient,
        id: nanoid(),
      },
    ]);
  };

  const deleteIngredient = (id) => {
    setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
  };

  const createIngredientsHeaderText = () => {
    console.log('createIngredientsHeaderText called');
    return (
      <h2 className='mb-4 font-semibold'>Ingredients ({ingredients.length})</h2>
    );
  };

  return (
    <div className='mt-8 max-w-[20rem] mx-auto'>
      <div className='flex justify-between'>
        {createIngredientsHeaderText()}
        <IngredientsInfoHelper />
      </div>

      <div className='space-y-4'>
        <IngredientsList
          ingredients={ingredients}
          deleteIngredient={deleteIngredient}
        />

        <AddIngredient
          addIngredient={addIngredient}
          ingredient={ingredient}
          setIngredient={setIngredient}
        />
      </div>
    </div>
  );
};

export default Ingredients;
