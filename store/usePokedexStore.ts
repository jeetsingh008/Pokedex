import { create } from "zustand";

interface PokedexState {
  searchQuery: string;
  selectedTypes: string[];
  activeHeight: string;
  activeWeight: string;

  setSearchQuery: (query: string) => void;
  toggleType: (type: string) => void;
  setActiveHeight: (size: string) => void;
  setActiveWeight: (weight: string) => void;
  resetFilters: () => void;
}

export const usePokedexStore = create<PokedexState>((set) => ({
  searchQuery: "",
  selectedTypes: [],
  activeHeight: "",
  activeWeight: "",

  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleType: (type) =>
    set((state) => ({
      selectedTypes: state.selectedTypes.includes(type)
        ? state.selectedTypes.filter((t) => t !== type)
        : [...state.selectedTypes, type],
    })),
  setActiveHeight: (height) => set({ activeHeight: height }),

  setActiveWeight: (weight) => set({ activeWeight: weight }),

  resetFilters: () =>
    set({
      searchQuery: "",
      selectedTypes: [],
      activeHeight: "",
      activeWeight: "",
    }),
}));
