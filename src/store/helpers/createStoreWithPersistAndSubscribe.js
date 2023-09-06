import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createWithEqualityFn } from 'zustand/traditional';

export const createStoreWithPersistAndSubscribe = (
  config,
  options = {
    persistOptions: {},
    devtoolsOptions: {},
  }
) => {
  const { persistOptions, devtoolsOptions } = options;
  return createWithEqualityFn(
    devtools(
      subscribeWithSelector(persist(immer(config), persistOptions)),
      devtoolsOptions
    )
  );
};
