import React from 'react'
import { Link } from 'react-router';
import { format } from 'date-fns';
import { Calendar, LocationEdit } from "lucide-react";

const EventCard = ({ event}) => {
  const { id, name, date, location, status, category } = event;
  const formattedDate = format(new Date(date), 'MMM dd, yyyy, h:mm a');

  return (
    <div className="flex p-3 flex-col gap-3 bg-indigo-400/10 rounded-lg border-indigo-200/30 border">
        {/* Event card header */}
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-semibold text-white">{name}</h2>

          <div className="flex gap-3 items-center">
            <span className="py px-3 border border-indigo-600 bg-indigo-600/20 rounded-full ">
              {status}
            </span>
            <span className="py px-3 border border-green-600 bg-green-600/20 rounded-full ">
              {category}
            </span>
          </div>
        </div>
        {/* Event card content */}
        <div className="flex flex-col gap-2 text-left">
          <p className="flex items-center gap-1">
            <Calendar className="w-4 h-4 inline-block mr-2" />
            <span>{formattedDate}</span>
          </p>
          <p className="flex items-center gap-1">
            <LocationEdit className="w-4 h-4 inline-block mr-2" />
            <span>{location}</span>
          </p>

          <Link to={`/events/${id}`} className="text-blue-500 hover:underline">
            View Details →
          </Link>
        </div>
      </div>
  )
}

export default EventCard