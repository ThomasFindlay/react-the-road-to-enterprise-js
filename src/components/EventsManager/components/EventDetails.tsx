import { useEventsStore } from '../eventsStore'

type EventDetailsProps = {}

const EventDetails = (props: EventDetailsProps) => {
  const event = useEventsStore((state) =>
    state.events.find((event) => event.id === state.selectedEvent)
  )

  return (
    <div>
      {/* <ul className="text-left">
          <li>ID: {event.id}</li>
          <li>Title: {event.title}</li>
          <li>Start Date: {event.startDate}</li>
          <li>Start Time: {event.startTime}</li>
          <li>End Date: {event.endDate}</li>
          <li>End Time: {event.endTime}</li>
        </ul> */}
      <h2 className="font-semibold text-xl mb-6">Selected Event Details</h2>
      {event ? (
        <div className="rounded shadow-md overflow-hidden text-left">
          <div className="py-4 flex justify-between items-center bg-indigo-100 px-4">
            <div className="text-indigo-900 font-semibold text-lg">
              {event.title}
            </div>
            <div className="flex justify-end text-indigo-900 text-opacity-50">
              ID: {event.id}
            </div>
          </div>
          <div className="mb-4 px-4 pt-4">
            <span className="mb-1 font-semibold block">Start</span>
            <p className="mb-4">
              {event.startDate} at {event.startTime}
            </p>
            <span className="mb-1 font-semibold block">End</span>
            <p>
              {event.endDate} at {event.endTime}{' '}
            </p>
          </div>
        </div>
      ) : (
        <p>Select an event to see more details</p>
      )}
    </div>
  )
}

export default EventDetails
