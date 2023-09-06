import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createWithEqualityFn } from 'zustand/traditional';

export const createStoreWithSubscribe = (config, options) => {
  return createWithEqualityFn(
    devtools(subscribeWithSelector(immer(config)), options)
  );
};
