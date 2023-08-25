import Spinner from '@/components/Spinner';
import { removeUser, selectUser } from '../usersSlice';
import { useDispatch, useSelector } from 'react-redux';

const DisplayUsers = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const deletingUserId = useSelector((state) => state.users.deletingUserId);
  return (
    <div>
      <h2 className='font-semibold text-xl mb-4'>Users</h2>
      <ul className='space-y-3'>
        {users.map((user) => {
          return (
            <li key={user.id} className='space-x-3'>
              <button
                className='hover:underline'
                onClick={() => dispatch(selectUser(user.id))}
              >
                {user.email}
              </button>
              {deletingUserId === user.id ? (
                <Spinner show size='sm' />
              ) : (
                <button onClick={() => dispatch(removeUser(user))}>X</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayUsers;
