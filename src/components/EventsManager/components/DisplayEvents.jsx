import { useState } from 'react';
import { useEventsStore, useUpcomingAndPastEventsStore } from '../events.store';
import EventsTabs from './EventsTabs';
import { shallow } from 'zustand/shallow';
import { pick } from '@/helpers';

const DisplayEvents = (props) => {
  const [eventsToShow, setEventsToShow] = useState('all');
  const allEvents = useEventsStore((store) => store.events);
  const selectEvent = useEventsStore((store) => store.selectEvent);
  const { upcomingEvents, pastEvents } = useUpcomingAndPastEventsStore(
    (state) => pick(state, 'upcomingEvents', 'pastEvents'),
    shallow
  );

  const eventsMap = {
    all: allEvents,
    upcoming: upcomingEvents,
    past: pastEvents,
  };

  const events = eventsMap[eventsToShow];

  return (
    <div>
      <h2 className='font-semibold text-xl mb-6'>Events</h2>
      <EventsTabs activeTab={eventsToShow} setActiveTab={setEventsToShow} />
      <div className='mt-4'>
        <ul className='text-left shadow py-4 space-y-3 divide-y'>
          {Array.isArray(events) && events.length ? (
            events.map((event) => {
              return (
                <li key={event.id} className='-mt-3'>
                  <button
                    className='hover:underline pt-3 px-4'
                    onClick={() => selectEvent(event.id)}
                  >
                    {event.title} - {event.startDate}
                  </button>
                </li>
              );
            })
          ) : (
            <p className='mx-4'>No events</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DisplayEvents;
