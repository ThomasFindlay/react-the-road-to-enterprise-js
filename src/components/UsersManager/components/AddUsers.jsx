import React, { useState } from 'react'
import { addUser } from '../usersSlice'
import { useDispatch } from 'react-redux';

const createId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const initialState = {
  name: '',
  email: '',
}

const AddUsers = (props) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialState)

  const onAddUser = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    dispatch(
      addUser({
        id: createId(),
        ...form,
      })
    )
    setForm(initialState)
  }

  const onChange = (e) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Add users</h2>
      <form className="space-y-3">
        <div className="flex flex-col items-stretch text-left space-y-2">
          <label className="font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="flex-grow px-4 py-3"
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col items-stretch text-left space-y-2">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="flex-grow px-4 py-3"
            type="text"
            name="email"
            id="email"
            value={form.email}
            onChange={onChange}
          />
        </div>
        <button
          className="w-28 self-end bg-blue-700 text-blue-100 px-4 py-3"
          onClick={onAddUser}
        >
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddUsers
