import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const useEditShoppingItem = (props) => {
  const { item, updateItem, index } = props;
  const [name, setName] = useState(item.name);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    setName(props.item.name);
  }, [props.item]);

  const onSaveItem = () => {
    updateItem({
      index,
      item: {
        ...item,
        name,
      },
    });
    setIsEditing(false);
  };

  const onEditItem = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setName(props.item.name);
  };

  return {
    name,
    isEditing,
    cancelEdit,
    setName,
    onSaveItem,
    onEditItem,
  };
};

const ShoppingListRow = (props) => {
  const { item, deleteItem, index } = props;
  const { name, isEditing, cancelEdit, setName, onSaveItem, onEditItem } =
    useEditShoppingItem(props);

  return (
    <div className='flex justify-between items-center'>
      <div>
        {isEditing ? (
          <div>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        ) : (
          <div>{item.name}</div>
        )}
      </div>
      <div className='space-x-3'>
        {isEditing ? (
          <>
            <button className='hover:underline' onClick={onSaveItem}>
              Save
            </button>
            <button className='hover:underline' onClick={cancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className='hover:underline' onClick={onEditItem}>
              Edit
            </button>
            <button
              className='hover:underline'
              onClick={() => deleteItem({ index })}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

ShoppingListRow.propTypes = {
  item: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }).isRequired,
  index: propTypes.number.isRequired,
  deleteItem: propTypes.func.isRequired,
  updateItem: propTypes.func.isRequired,
};

export default ShoppingListRow;
