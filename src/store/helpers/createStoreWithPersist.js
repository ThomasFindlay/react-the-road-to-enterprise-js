import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { withImmer } from '../middleware/withImmer';

export const createStoreWithPersist = (config, persistOptions, options) => {
  return create(devtools(persist(withImmer(config), persistOptions), options));
};
