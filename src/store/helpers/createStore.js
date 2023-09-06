import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createWithEqualityFn } from 'zustand/traditional';

export const createStore = (config, options) => {
  return createWithEqualityFn(devtools(immer(config), options));
};
