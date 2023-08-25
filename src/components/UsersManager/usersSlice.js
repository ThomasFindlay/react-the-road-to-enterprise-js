import { listUsers, createUser, deleteUser } from '@/api/user.api';
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const initialState = {
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

const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.email.localeCompare(b.email),
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(initialState),
  reducers: {
    setUsers: (state, action) => {
      usersAdapter.setAll(state, action.payload);
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
      usersAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.fetchUsersStatus = 'ERROR';
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.addUserStatus = 'PENDING';
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      usersAdapter.addOne(state, action.payload.user);
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
      usersAdapter.removeOne(state, action.payload.id);
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

export const usersSelector = usersAdapter.getSelectors((state) => state.users);

export const getSelectedUser = (state) => {
  return state.users.selectedUserId
    ? usersSelector.selectById(state, state.users.selectedUserId)
    : null;
};

export const { selectAll: selectAllUsers, selectTotal: selectTotalUsers } =
  usersSelector;

export default usersSlice.reducer;
