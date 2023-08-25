import { listUsers, createUser, deleteUser } from '@/api/user.api';
import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  selectedUserId: null,
  fetchUsersStatus: 'IDLE',
  addUserStatus: 'IDLE',
  deleteUserStatus: 'IDLE',
  deletingUserId: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', listUsers);
export const addUser = createAsyncThunk('users/addUser', createUser);
export const removeUser = createAsyncThunk(
  'users/removeUser',
  async (userData) => {
    await deleteUser(userData.id);
    return userData;
  }
);
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    selectUser: (state, action) => {
      state.selectedUserId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.fetchUsersStatus = 'PENDING';
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.fetchUsersStatus = 'SUCCESS';
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.fetchUsersStatus = 'ERROR';
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.addUserStatus = 'PENDING';
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload.user);
      state.addUserStatus = 'SUCCESS';
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.addUserStatus = 'ERROR';
    });
    builder.addCase(removeUser.pending, (state, action) => {
      state.deletingUserId = action.meta.arg.id;
      state.deleteUserStatus = 'PENDING';
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.users = state.users.filter(
        (_user) => _user.id !== action.payload.id
      );
      state.deleteUserStatus = 'SUCCESS';
      state.deletingUserId = null;
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.deleteUserStatus = 'ERROR';
      state.deletingUserId = null;
    });
  },
});

export const { setUsers, selectUser } = usersSlice.actions;
export const getSelectedUser = createSelector(
  (state) => state.users,
  (users) => {
    if (users.selectedUserId) {
      return users.users.find((user) => user.id === users.selectedUserId);
    }
    return null;
  }
);

export default usersSlice.reducer;
