import { create } from "zustand";
import { persist } from "zustand/middleware";

type AdminStore = {
  secret: string | null;
  setSecret: (secret: string) => void;
  clearSecret: () => void;
};

export const useAdminStore = create<AdminStore>()(
  persist(
    set => ({
      secret: null,
      setSecret: secret => set({ secret }),
      clearSecret: () => set({ secret: null }),
    }),
    { name: "admin-secret" },
  ),
);
