import api from './api';

export const fetchMeals = (query) => {
  return api
    .get('search.php', {
      baseURL: 'https://www.themealdb.com/api/json/v1/1/',
      params: {
        s: query,
      },
    })
    .then((res) => res.data.meals);
};
