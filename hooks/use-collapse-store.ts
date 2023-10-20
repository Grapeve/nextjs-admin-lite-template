import { create } from "zustand";

interface CollapseData {
  isCollapsed: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCollapse = create<CollapseData>((set) => ({
  isCollapsed: false,
  onOpen: () => set({ isCollapsed: true }),
  onClose: () => set({ isCollapsed: false }),
}));
