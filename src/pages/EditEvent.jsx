import React from "react";
import EventForm from "../components/events/EventForm";
// import { useEvent } from "../hooks/useEvent";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import { useEventStore } from "../stores/useEvent.store";
import { useNavigate } from "react-router";

const EditEvent = () => {
  const { id } =  useParams();
  const editEvent = useEventStore(state => state.editEvent);
  const getEventById = useEventStore(state => state.eventById);
  // const { editEvent, getEventById } = useEvent();
  const navigate = useNavigate();

  const event = getEventById(id);

  if(!event.success){
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
      navigate(`/events/${id}`);
    } else {
      toast.error(result.message);
    }
   };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit New Event</h1>

      <EventForm onSubmit={handleSubmit} event={event.data} />
    </div>
  );
};

export default EditEvent;
