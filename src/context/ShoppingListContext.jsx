import React from 'react'
import { useImmerReducer } from 'use-immer'
import { contextFactory } from './helpers/contextFactory'
import propTypes from 'prop-types'

const [
  ShoppingListContext,
  useShoppingListContext,
  useShoppingListContextSelector,
] = contextFactory()

export { useShoppingListContext, useShoppingListContextSelector }

const shoppingItems  = {
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
}

const reducer = (
  state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_NEW_SHOPPING_ITEM_NAME':
      state.newShoppingItemName = action.payload
      break
    case 'ADD_ITEM':
      state.newShoppingItemName = ''
      state.items.push(action.payload)
      break
    case 'UPDATE_ITEM':
      state.items.splice(action.payload.index, 1, action.payload.item)
      break
    case 'DELETE_ITEM':
      state.items.splice(action.payload.index, 1)
      break
  }
  return state
}

const ShoppingListContextProvider = (props) => {
  const [shoppingList, dispatch] = useImmerReducer(reducer, shoppingItems)

  return (
    <ShoppingListContext.Provider value={[shoppingList, dispatch]}>
      {props.children}
    </ShoppingListContext.Provider>
  )
}

ShoppingListContextProvider.propTypes = {
  children: propTypes.children
}

export default ShoppingListContextProvider
