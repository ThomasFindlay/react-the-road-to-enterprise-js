import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '@/components/UsersManager/usersSlice'
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

