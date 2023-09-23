import { atom } from 'jotai';

// Store the currently selected event ID
export const selectedEventIdAtom = atom(null);

// Update the selectedEventIdAtom with the currently selected event ID
export const selectEventAtom = atom(null, (get, set, eventId) => {
  set(selectedEventIdAtom, eventId);
});
