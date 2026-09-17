import React from "react";
import EventForm from "../components/events/EventForm";

const NewEvent = () => {

  const handleSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>

      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewEvent;
