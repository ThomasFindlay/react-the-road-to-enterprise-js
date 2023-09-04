import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { withImmer } from '../middleware/withImmer';

export const createStore = (config, options) => {
  return create(devtools(withImmer(config), options));
};
