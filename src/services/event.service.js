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

// get user events
export const getMyEvents = async (token, query) => {
  const name = query?.name || "";
  try {
    const response = await backendFetch(EVENT_ENDPOINTS.LIST_MY_EVENTS_ENDPOINT(name), {
      method: "GET",
      token: token,
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

// get event details using event id
export const getEventById = async (token, id) => {
  try {
    const response = await backendFetch(EVENT_ENDPOINTS.EVENT_DETAILS_ENDPOINT(id), {
      method: "GET",
      token: token,
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


// create event on server using user token and event payload
export const createEvent = async (token, payload) => {
  try {
    const response = await backendFetch(EVENT_ENDPOINTS.CREATE_EVENT_ENDPOINT, {
      method: "POST",
      token: token,
      body: JSON.stringify(payload),
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
// export const updateEvent = (token, id, payload) => {};
// export const deleteEvent = (token, id) => {};
