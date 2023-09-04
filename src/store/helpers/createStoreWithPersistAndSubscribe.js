import create from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { withImmer } from '../middleware/withImmer';

export const createStoreWithPersistAndSubscribe = (
  config,
  persistOptions,
  options
) => {
  return create(
    devtools(
      subscribeWithSelector(persist(withImmer(config), persistOptions)),
      options
    )
  );
};
