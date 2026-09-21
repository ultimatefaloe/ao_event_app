import React from "react";
import { useParams } from "react-router";
import { events } from "../data";

const EventDetail = () => {
  const { id } = useParams();

  const event = events.find((event) => event.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <img src={event.image} alt={event.title} />
      <span>{event.attendees}</span>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <div>
        {event.date}
        {event.location}
      </div>
    </div>
  );
};

export default EventDetail;
