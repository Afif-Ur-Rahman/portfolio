import { create } from "zustand";

interface VisitorState {
  siteCount: number | null;
  isLoading: boolean;
  projectCounts: number | null;
  setSiteCount: (count: number) => void;
  setIsLoading: (loading: boolean) => void;
  setProjectCount: (count: number) => void;
}

export const useVisitorStore = create<VisitorState>((set) => ({
  siteCount: null,
  isLoading: false,
  projectCounts: null,

  setSiteCount: (count) => set({ siteCount: count, isLoading: false }),
  setIsLoading: (loading) => set({ isLoading: loading }),

  setProjectCount: (count) => set({ projectCounts: count, isLoading: false }),
}));
