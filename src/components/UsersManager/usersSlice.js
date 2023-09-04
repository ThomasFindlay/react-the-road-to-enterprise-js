import { listUsers, createUser, deleteUser } from '@/api/user.api';
import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';

const initialState = {
  selectedUserId: null,
  deletingUserId: null,
};

export const usersApiSlice = createApi({
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      queryFn: async () => {
        return {
          data: await listUsers(),
        };
      },
      providesTags: ['Users'],
    }),
    createUser: builder.mutation({
      queryFn: async (user) => {
        return {
          data: await createUser(user),
        };
      },
      invalidatesTags: ['Users'],
    }),
    removeUser: builder.mutation({
      queryFn: async (user) => {
        await deleteUser(user.id);
        return {
          data: true,
        };
      },
      invalidatesTags: ['Users'],
      onQueryStarted: async (user, { dispatch, queryFulfilled }) => {
        dispatch(setDeletingUserId(user.id));
        await queryFulfilled;
        dispatch(setDeletingUserId(null));
      },
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useCreateUserMutation,
  useRemoveUserMutation,
} = usersApiSlice;

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUserId = action.payload;
    },
    setDeletingUserId: (state, action) => {
      state.deletingUserId = action.payload;
    },
    resetUsersSlice: () => {
      return initialState;
    },
  },
});

export const resetUsersApiSlice = () => usersApiSlice.util.resetApiState();

export const initialiseUsersApi = () =>
  usersApiSlice.endpoints.fetchUsers.initiate();

export const { selectUser, setDeletingUserId, resetUsersSlice } =
  usersSlice.actions;

export const getSelectedUser = (users) => (state) => {
  return users && state.users.selectedUserId
    ? users.find((user) => user.id === state.users.selectedUserId)
    : null;
};

export default usersSlice.reducer;
