import propTypes from 'prop-types';
import { memo } from 'react';

const IngredientsList = (props) => {
  console.log('IngredientsList rendered');
  const { ingredients, deleteIngredient } = props;
  return (
    <div className='text-left'>
      <ul className='divide-y divide-gray-300'>
        {ingredients.map((ingredient) => {
          return (
            <li
              key={ingredient.id}
              className='py-3 flex justify-between items-center'
            >
              <span>{ingredient.name}</span>
              <button onClick={() => deleteIngredient(ingredient.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

IngredientsList.propTypes = {
  ingredients: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
  deleteIngredient: propTypes.func.isRequired,
};

export default memo(IngredientsList);
