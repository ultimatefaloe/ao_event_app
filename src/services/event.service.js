import { backendFetch } from "../libs/backend-fetch";
import { EVENT_ENDPOINTS } from "../libs/constants";

export const getEvents = async (query) => {
  const name = query?.name || "";
  try {
    const response = await backendFetch(EVENT_ENDPOINTS.LIST_EVENTS_ENDPOINT(name), {
      method: "GET",
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Failed to fetch events");
    }
    return response.data;
  } catch (error) {
    console.log("[getEvents] Error fetching events:", error);
    return { error: error.message };
  }
};
export const getMyEvents = (token, query) => {};
export const getEventById = (token, id) => {};
export const createEvent = (token, payload) => {};
export const updateEvent = (token, id, payload) => {};
export const deleteEvent = (token, id) => {};

getEvents();
