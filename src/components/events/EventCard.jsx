import React from "react";
import { Link } from "react-router";
import { format } from "date-fns";
import { CalendarCheck } from "lucide-react";
import { LocationEditIcon } from "lucide-react";

const EventCard = ({ event }) => {
  const { id, name, date, location, status, category } = event;

  const formatedDate = format(new Date(date), "MMMM dd, yyyy");
  return (
    <div className="flex flex-col gap-4 bg-indigo-800/30 rounded-lg p-4 border border-gray-500/40">
      {/* Event card header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">{name}</h2>
        <div className="flex gap-3">
          <div className="px-3 py rounded-full border border-blue-500 text-blue-500 bg-blue-500/20">
            {status}
          </div>
          <div className="px-3 py rounded-full border border-green-500 text-green-500 bg-green-500/20">
            {category}
          </div>
        </div>
      </div>
      {/* Event card content */}
      <div className="flex flex-col gap-2 text-left">
        <p className="flex gap-2 items-center">
          <CalendarCheck className="w-5 h-5" /> {formatedDate}
        </p>
        <p className="flex gap-2 items-center">
          <LocationEditIcon className="w-5 h-5" /> {location}
        </p>
        <Link to={`/events/${id}`} className="text-blue-500 hover:underline">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
