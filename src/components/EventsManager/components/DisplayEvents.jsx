import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';

import {
  eventsAtom,
  selectEventAtom,
  upcomingAndPastEventsAtom,
} from '../eventsAtoms';
import EventsTabs from './EventsTabs';

const DisplayEvents = (props) => {
  const [eventsToShow, setEventsToShow] = useState('all');
  const [allEvents] = useAtom(eventsAtom);
  const selectEvent = useSetAtom(selectEventAtom);
  const { upcomingEvents, pastEvents } = useAtomValue(
    upcomingAndPastEventsAtom
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
