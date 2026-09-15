import React from "react";
import EventForm from "../components/events/EventForm";

const NewEvent = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>

      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewEvent;
