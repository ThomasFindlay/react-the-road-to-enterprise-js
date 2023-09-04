import create from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { withImmer } from '../middleware/withImmer';

export const createStoreWithSubscribe = (config, options) => {
  return create(devtools(subscribeWithSelector(withImmer(config)), options));
};
