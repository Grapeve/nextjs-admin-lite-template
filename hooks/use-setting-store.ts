import { create } from "zustand";

interface settingData {
  themeColor: string;
  setSettings: (color: string) => void;
}

export const useSettingStore = create<settingData>((set) => ({
  themeColor: "#5248e5",
  setSettings: (color) => set({ themeColor: color }),
}));
