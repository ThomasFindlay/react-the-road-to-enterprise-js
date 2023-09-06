import api from './api';

export const fetchEvents = () => {
  return api.get('events/all').then((res) => res.data.events);
};

export const createEvent = (event) => {
  return api.post('events', event);
};
