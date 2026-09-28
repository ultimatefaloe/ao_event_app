import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useEventStore = create(
  persist(
    (set) => ({
      events: [],
      // read by id
      eventById: (id) => {
        const event = get().events.find((event) => event.id === id);

        if (!event) {
          return {
            succes: false,
            message: "Event not found",
            data: null,
          };
        }

        return {
          succes: true,
          message: "Event found",
          data: event,
        };
      },

      // create
      createEvent: (data) => {
        // improve data validatation
        if (!data) {
          return {
            success: false,
            message: "No data provided",
          };
        }

        const newEvent = {
          id: Date.now().toString(),
          name: data.name,
          description: data.description,
          date: data.date,
          location: data.location,
          attendees: data.attendees || 0,
          thunmailUrl: "https://picsum.photos/seed/picsum/200/300" ?? data.thunmailUrl,
        }

        set(state => ({
          events: [newEvent, ...state.events]
        }))

        return {
          success: true,
          message: "Event created successfully",
          data: newEvent,
        }
      }
      // update
      // delete
    }),
    {
      name: "ao:event:store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
