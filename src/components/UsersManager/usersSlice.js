import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  selectedUserId: null,
  deletingUserId: null,
};

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/api/'
        : '/api/',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => `user/all`,
      transformResponse: (response) => {
        return response.users;
      },
      providesTags: ['Users'],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: `user`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    removeUser: builder.mutation({
      query: (user) => ({
        url: `user/${user.id}`,
        method: 'DELETE',
      }),
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
