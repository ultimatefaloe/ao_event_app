import React, { useState } from "react";
import { Link } from "react-router";
import Button from "../components/ui/Button";
import { Plus } from "lucide-react";

const Events = () => {
  const [filter, setFilter] = useState({
    searchTerm: "",
    category: "all",
    status: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Filter submitted:", filter);
  };

  const routeToNewEvent = () => {
    // import useNavigate from react-router and use it to navigate to the new event page
  };

  return (
    <div className="p-4">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">All Events</h1>
        <Button onClick={routeToNewEvent}>
          <Plus className="w-5 h-5" /> New Event
        </Button>
      </div>

      {/* filter section */}
      <form
        onSubmit={onSubmit}
        method="GET"
        action=""
        className="flex items-center gap-4 my-6"
      >
        <input
          type="search"
          name="searchTerm"
          id="searchTerm"
          placeholder="Search events..."
          onChange={handleFilterChange}
          className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="category"
          id="category"
          onChange={handleFilterChange}
          className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="work">WorkSpace</option>
          <option value="conference">Conference</option>
          <option value="meetup">Meetup</option>
          <option value="webinar">Webinar</option>
          <option value="others">others</option>
        </select>

        <select
          name="status"
          id="status"
          onChange={handleFilterChange}
          className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
        </select>
      </form>
    </div>
  );
};

export default Events;
