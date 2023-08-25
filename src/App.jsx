import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import UsersManager from './components/UsersManager/UsersManager';
import { fetchUsers, resetUsers } from './components/UsersManager/usersSlice';
import { resetStore } from './store';
import { increment } from './store/counterSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div className='App mx-auto max-w-6xl text-center my-8'>
      <h1 className='font-semibold text-2xl'>React - The Road To Enterprise</h1>
      <main>
        <div className='space-x-4 my-8'>
          <button
            className='shadow px-4 py-3 bg-blue-100'
            onClick={() => dispatch(resetUsers())}
          >
            Reset users slice
          </button>
          <button
            className='shadow px-4 py-3 bg-blue-100'
            onClick={() => dispatch(resetStore())}
          >
            Reset store
          </button>
          <button
            className='shadow px-4 py-3 bg-blue-100'
            onClick={() => dispatch(fetchUsers())}
          >
            Fetch users
          </button>
          <button
            className='shadow px-4 py-3 bg-blue-100'
            onClick={() => dispatch(increment())}
          >
            Increment Counter {count}
          </button>
        </div>
        <UsersManager />
      </main>
    </div>
  );
}

export default App;
