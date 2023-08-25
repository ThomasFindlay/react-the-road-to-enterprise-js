import { createSelector, createSlice } from '@reduxjs/toolkit'
import { initialUsers } from './initialUsers'

const initialState = {
  users: initialUsers,
  selectedUserId: undefined,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id)
    },
    selectUser: (state, action) => {
      state.selectedUserId = action.payload
    },
  },
})

export const { setUsers, addUser, removeUser, selectUser } = usersSlice.actions

export const getSelectedUser = createSelector(
  (state) => state.users,
  (users) => {
    if (users.selectedUserId) {
      return users.users.find((user) => user.id === users.selectedUserId)
    }
    return null
  }
)

export default usersSlice.reducer
