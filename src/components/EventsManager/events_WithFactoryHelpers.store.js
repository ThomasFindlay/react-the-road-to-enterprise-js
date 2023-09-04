import {
  createStoreWithPersist,
  createStoreWithPersistAndSubscribe,
} from '@/store/helpers';
import { events } from './eventsData';

export const useEventsStore = createStoreWithPersistAndSubscribe(
  (set) => ({
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
  }),
  {
    name: 'STORAGE_Events',
  },
  {
    name: 'Events',
  }
);

export const useUpcomingAndPastEventsStore = createStoreWithPersist(
  (set) => ({
    pastEvents: [],
    upcomingEvents: [],
  }),
  {
    name: 'STORAGE_UpcomingAndPastEvents',
  },
  {
    name: 'UpcomingAndPastEvents',
  }
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
