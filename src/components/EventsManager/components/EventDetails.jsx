import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { selectedEventIdAtom } from '../eventsAtoms';

const EventDetails = (props) => {
  const { data } = useQuery(['events']);
  const selectedEventId = useAtomValue(selectedEventIdAtom);
  const event = useMemo(() => {
    if (!selectedEventId) return;
    return data?.allEvents.find((event) => event.id === selectedEventId);
  }, [selectedEventId]);

  return (
    <div>
      <h2 className='font-semibold text-xl mb-6'>Selected Event Details</h2>
      {event ? (
        <div className='rounded shadow-md overflow-hidden text-left'>
          <div className='py-4 flex justify-between items-center bg-indigo-100 px-4'>
            <div className='text-indigo-900 font-semibold text-lg'>
              {event.title}
            </div>
            <div className='flex justify-end text-indigo-900 text-opacity-50'>
              ID: {event.id}
            </div>
          </div>
          <div className='mb-4 px-4 pt-4'>
            <span className='mb-1 font-semibold block'>Start</span>
            <p className='mb-4'>
              {event.startDate} at {event.startTime}
            </p>
            <span className='mb-1 font-semibold block'>End</span>
            <p>
              {event.endDate} at {event.endTime}{' '}
            </p>
          </div>
        </div>
      ) : (
        <p>Select an event to see more details</p>
      )}
    </div>
  );
};

export default EventDetails;
