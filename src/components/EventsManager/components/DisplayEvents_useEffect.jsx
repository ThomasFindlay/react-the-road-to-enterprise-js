import { useEffect, useState } from 'react';
import { useEventsStore } from '../events.store';
import EventsTabs from './EventsTabs';

const pastAndUpcomingEventsSelector = (events) => {
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
  return {
    upcomingEvents,
    pastEvents,
  };
};

const DisplayEvents = (props) => {
  const [eventsToShow, setEventsToShow] = useState('all');
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const allEvents = useEventsStore((store) => store.events);
  const selectEvent = useEventsStore((store) => store.selectEvent);

  useEffect(() => {
    const { upcomingEvents, pastEvents } =
      pastAndUpcomingEventsSelector(allEvents);
    setUpcomingEvents(upcomingEvents);
    setPastEvents(pastEvents);
  }, [allEvents]);

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
