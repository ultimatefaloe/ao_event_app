import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useEventStore = create(
  persist(
    (set, get) => ({
      events: [],
      // read by id
      eventById: (id) => {
        const event = get().events.find((event) => event.id === id);
          console.log("eventById:", event);
        if (!event) {
          return {
            succes: false,
            message: "Event not found",
            data: null,
          };
        }

        return {
          success: true,
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
          thunmailUrl:
            "https://picsum.photos/seed/picsum/200/300" ?? data.thunmailUrl,
        };

        set((state) => ({
          events: [newEvent, ...state.events],
        }));

        return {
          success: true,
          message: "Event created successfully",
          data: newEvent,
        };
      },

      // update
      editEvent: (id, data) => {
        const event = get().events.find(
          (e) => e.id.toLowerCase() === id.toLowerCase(),
        );

        if (!event) {
          return {
            success: false,
            message: "Event not found",
          };
        }

        const updatedEvent = {
          ...event,
          ...data,
        };

        set((state) => ({
          events: state.events.map((e) =>
            e.id.toLowerCase() === id.toLowerCase()
              ? updatedEvent
              : e,
          ),
        }));

        return {
          success: true,
          message: "Event updated successfully",
          data: updatedEvent,
        };
      },

      // delete
    }),
    {
      name: "ao:event:store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
