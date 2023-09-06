import { withImmer } from '@/store/middleware/withImmer';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { events } from './eventsData';
import { immer } from 'zustand/middleware/immer';

export const useEventsStore = createWithEqualityFn(
  devtools(
    subscribeWithSelector(
      immer((set) => ({
        events: [...events],
        selectEvent: (id) => {
          set({ selectedEvent: id });
        },
        createEvent: (event) => {
          set((state) => {
            state.events.push(event);
          });
        },
        selectedEvent: '',
      }))
    ),
    {
      name: 'Events',
    }
  )
);

export const useUpcomingAndPastEventsStore = createWithEqualityFn(
  devtools(
    (set) => ({
      pastEvents: [],
      upcomingEvents: [],
    }),
    {
      name: 'UpcomingAndPastEvents',
    }
  )
);

useEventsStore.subscribe(
  (state) => state.events,
  (events) => {
    const upcomingEvents = [];
    const pastEvents = [];
    for (const event of events) {
      const [day, month, year] = event.endDate
        .split('/')
        .map((item) => parseInt(item));
      const [hour, minute] = event.endTime.split(':');
      const isUpcoming =
        new Date(year, month - 1, day, parseInt(hour), parseInt(minute)) >
        new Date();

      if (isUpcoming) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    }

    useUpcomingAndPastEventsStore.setState({
      pastEvents,
      upcomingEvents,
    });
  },
  { fireImmediately: true }
);
