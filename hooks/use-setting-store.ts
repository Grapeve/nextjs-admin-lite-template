import { create } from "zustand";

import { ThemeMode } from "@/types";

type SettingType = {
  themeColor: string;
  themeMode: ThemeMode;
};

interface settingData {
  settings: SettingType;
  setSettings: (settings: SettingType) => void;
}

export const useSettingStore = create<settingData>((set) => ({
  settings: {
    themeColor: "#5248e5",
    themeMode: ThemeMode.Light,
  },
  setSettings: (settings) => set({ settings }),
}));
