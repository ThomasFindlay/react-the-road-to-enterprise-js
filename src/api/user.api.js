import api from './api';

export const listUsers = () => {
  return api.get('/user/all').then((res) => res.data.users);
};

export const createUser = (user) => {
  return api.post('/user', user).then((res) => res.data);
};

export const deleteUser = (id) => {
  return api.delete(`/user/${id}`);
};
