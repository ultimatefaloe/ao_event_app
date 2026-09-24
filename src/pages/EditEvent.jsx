import React from "react";
import EventForm from "../components/events/EventForm";
import { useEvent } from "../hooks/useEvent";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const EditEvent = () => {
  const { id } =  useParams();
  const { editEvent, getEventById } = useEvent();

  const event = getEventById(id);

  if(!event){
    return (
      <div className="p-4">
        <h1 className="text-xl md:text-2xl font-bold text-white">Event not found</h1>
      </div>
    )
  }

  const handleSubmit = (data) => {
    const result = editEvent(id, data);
    if (result.success) {
      console.log("Event updated successfully:", result.data);
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
   };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit New Event</h1>

      <EventForm onSubmit={handleSubmit} event={event} />
    </div>
  );
};

export default EditEvent;
