import { fetchMeals } from '@/api/meal.api';
import { debounce } from '@/helpers/debounce';
import React, { useMemo, useState } from 'react';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);

  const initSearchApiRequest = useMemo(() => {
    return debounce(async (q) => {
      setMeals(await fetchMeals(q));
    }, 500);
  }, []);

  const onChangeQuery = (e) => {
    const q = e.target.value;
    setQuery(q);
    initSearchApiRequest(q);
  };

  return (
    <div className='space-y-6'>
      <form className='flex flex-col items-start mx-auto max-w-[20rem]'>
        <label>Search meals</label>
        <input
          className='w-full'
          type='text'
          value={query}
          onChange={onChangeQuery}
        />
      </form>
      <ul>
        {meals?.map((meal) => {
          return <li key={meal.idMeal}>{meal.strMeal}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;
