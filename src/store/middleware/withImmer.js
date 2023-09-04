import { produce } from 'immer';

export const withImmer = (config) => (set, get, api) =>
  config(
    (partial, replace) => {
      const nextState =
        typeof partial === 'function' ? produce(partial) : partial;
      return set(nextState, replace);
    },
    get,
    api
  );
