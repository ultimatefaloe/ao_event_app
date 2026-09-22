//  CRUD
//  c = create
//  r = read
//  u = update
//  d = delete
import { useState, useEffect } from "react";
import { events as initialEvents } from "../data";

export const useEvent = () => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    setEvents(initialEvents);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const createEvent = (newEvent) => {};

  const editEvent = (eventId, updatedEvent) => {};

  const deleteEvent = (eventId) => {};

  return {
    events,
  };
};
