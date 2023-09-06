import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createWithEqualityFn } from 'zustand/traditional';

export const createStoreWithPersist = (
  config,
  options = {
    persistOptions: {},
    devtoolsOptions: {},
  }
) => {
  const { persistOptions, devtoolsOptions } = options;
  return createWithEqualityFn(
    devtools(persist(immer(config), persistOptions), devtoolsOptions)
  );
};
