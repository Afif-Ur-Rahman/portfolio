import { create } from "zustand";

interface VisitorState {
  siteCount: number | null;
  isLoading: boolean;
  projectCounts: number | null;
  isContact: boolean;
  setSiteCount: (count: number) => void;
  setIsLoading: (loading: boolean) => void;
  setProjectCount: (count: number) => void;
  setIsContact: (contact: boolean) => void;
}

export const useVisitorStore = create<VisitorState>((set) => ({
  siteCount: null,
  isLoading: false,
  projectCounts: null,
  isContact: true,

  setSiteCount: (count) => set({ siteCount: count, isLoading: false }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsContact: (contact) => set({ isContact: contact }),

  setProjectCount: (count) => set({ projectCounts: count, isLoading: false }),
}));
