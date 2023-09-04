import Spinner from '@/components/Spinner';
import {
  selectUser,
  useFetchUsersQuery,
  useRemoveUserMutation,
} from '../usersSlice';
import { useDispatch, useSelector } from 'react-redux';

const DisplayUsers = (props) => {
  const dispatch = useDispatch();
  const deletingUserId = useSelector((state) => state.users.deletingUserId);
  const {
    data: users,
    isSuccess: isFetchUsersSuccess,
    isLoading: isLoadingUsers,
  } = useFetchUsersQuery();
  const [removeUser, { isLoading: isRemoveUserPending }] =
    useRemoveUserMutation();
  return (
    <div>
      <h2 className='font-semibold text-xl mb-4'>Users</h2>
      <ul className='space-y-3'>
        {isFetchUsersSuccess && Array.isArray(users)
          ? users.map((user) => {
              return (
                <li key={user.id} className='space-x-3'>
                  <button
                    className='hover:underline'
                    onClick={() => dispatch(selectUser(user.id))}
                  >
                    {user.email}
                  </button>
                  {isRemoveUserPending && deletingUserId === user.id ? (
                    <Spinner show size='sm' />
                  ) : (
                    <button onClick={() => removeUser(user)}>X</button>
                  )}
                </li>
              );
            })
          : null}
      </ul>
      {isLoadingUsers ? <Spinner show /> : null}
    </div>
  );
};

export default DisplayUsers;
