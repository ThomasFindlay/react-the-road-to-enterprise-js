import { useSelector } from 'react-redux'
import { getSelectedUser } from '../usersSlice'

const SelectedUserDetails = (props) => {
  const selectedUser = useSelector(getSelectedUser)
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Selected User Details</h2>
      {selectedUser ? (
        <ul>
          <li>ID: {selectedUser.id}</li>
          <li>Name: {selectedUser.name}</li>
          <li>Email: {selectedUser.email}</li>
        </ul>
      ) : (
        <p>Select a user to see more details</p>
      )}
    </div>
  )
}

export default SelectedUserDetails
