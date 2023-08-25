import propTypes from 'prop-types';

const ShoppingListHeader = (props) => {
  return (
    <div className='mb-6 flex justify-between'>
      <h2 className='font-bold'>Shopping List</h2>
      <span>{props.shoppingList.length} items</span>
    </div>
  );
};

ShoppingListHeader.propTypes = {
  shoppingList: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ShoppingListHeader;
