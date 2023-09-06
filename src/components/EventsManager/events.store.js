import { createWithEqualityFn } from 'zustand/traditional';
import { subscribeWithSelector } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

export const useEventsStore = createWithEqualityFn(
  devtools(
    subscribeWithSelector((set) => ({
      selectEvent: (id) => {
        set({ selectedEvent: id });
      },
      selectedEvent: '',
    })),
    {
      name: 'Events',
    }
  )
);
