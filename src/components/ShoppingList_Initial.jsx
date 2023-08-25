import React, { useReducer } from 'react';
import {
  DeleteItem,
  ShoppingListActions,
  ShoppingListState,
  UpdateItem,
} from './ShoppingList.types';
import ShoppingListHeader from './ShoppingListHeader_Initial';
import ShoppingListRow from './ShoppingListRow';

const getUuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const shoppingItems = {
  newShoppingItemName: '',
  items: [
    {
      id: '1',
      name: 'Sea Salt',
    },
    {
      id: '2',
      name: 'Apples',
    },
    {
      id: '3',
      name: 'Chicken breasts',
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_SHOPPING_ITEM_NAME':
      return {
        ...state,
        newShoppingItemName: action.payload,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        newShoppingItemName: '',
        items: [...state.items, action.payload],
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item, idx) => {
          if (idx === action.payload.index) {
            return action.payload.item;
          }
          return item;
        }),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, idx) => idx !== action.payload.index),
      };
    default:
      return state;
  }
};

const ShoppingList = (props) => {
  const [shoppingList, dispatch] = useReducer(reducer, shoppingItems);

  const addItem = () => {
    if (!shoppingList.newShoppingItemName) return;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: getUuid(),
        name: shoppingList.newShoppingItemName,
      },
    });
  };

  const deleteItem = (item) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: item,
    });
  };

  const updateItem = (payload) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload,
    });
  };

  const onChangeShoppingListItemName = (e) => {
    dispatch({
      type: 'UPDATE_NEW_SHOPPING_ITEM_NAME',
      payload: e.target.value,
    });
  };

  return (
    <div className='py-8 max-w-4xl mx-auto text-left'>
      <div className='max-w-xs'>
        <ShoppingListHeader shoppingList={shoppingList.items} />
        <div className='space-y-3 mb-6'>
          {shoppingList.items.map((item, index) => {
            return (
              <ShoppingListRow
                key={item.id}
                item={item}
                index={index}
                updateItem={updateItem}
                deleteItem={deleteItem}
              />
            );
          })}
        </div>
        <div className='flex flex-col justify-end space-y-2 max-w-xs'>
          <label htmlFor='shppingItemField'>Add item</label>
          <input
            type='text'
            id='shoppingItemField'
            value={shoppingList.newShoppingItemName}
            onChange={onChangeShoppingListItemName}
          />
          <button
            className='self-end px-4 py-2 bg-green-200 text-green-900'
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
