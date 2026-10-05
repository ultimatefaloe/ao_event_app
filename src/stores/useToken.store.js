import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTokenStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      reset: () => set({ token: null }),
    }),
    {
      name: "ao:event:auth:token",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
