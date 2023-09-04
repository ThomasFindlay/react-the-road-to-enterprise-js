import { listUsers, createUser, deleteUser } from '@/api/user.api';
import { createSlice } from '@reduxjs/toolkit';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  selectedUserId: null,
  deletingUserId: null,
};

export const usersApiSlice = createApi({
  baseQuery: fakeBaseQuery(),
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
      onQueryStarted: async (user, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          usersApiSlice.util.updateQueryData(
            'fetchUsers',
            undefined,
            (draftUsers) => [...draftUsers, user]
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    removeUser: builder.mutation({
      queryFn: async (user) => {
        await deleteUser(user.id);
        return {
          data: true,
        };
      },
      onQueryStarted: async (user, { dispatch, queryFulfilled }) => {
        dispatch(setDeletingUserId(user.id));
        const patchResult = dispatch(
          usersApiSlice.util.updateQueryData(
            'fetchUsers',
            undefined,
            (draftUsers) => draftUsers.filter((_user) => _user.id !== user.id)
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
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
