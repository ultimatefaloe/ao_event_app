import React from "react";
import EventForm from "../components/events/EventForm";
import { useEvent } from "../hooks/useEvent";
import { toast } from "react-toastify";

const NewEvent = () => {
  const { createEvent, error, loading } = useEvent();

  const handleSubmit = (data) => {
    const result = createEvent(data);
    if (!error) {
      console.log("Event created successfully:", result.data);
      toast.success("Event created successfully!");
    } else {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>

      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewEvent;
