import { combineReducers } from 'redux'
import { configureStore, createAction } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import usersReducer from '@/components/UsersManager/usersSlice'
export const resetStore = createAction('resetStore')

const rootReducer = combineReducers({
  users: usersReducer,
})

const appReducer = (state, action) => {
  if (action.type === resetStore.type) {
    return rootReducer(undefined, action)
  }

  return rootReducer(state, action)
}

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
