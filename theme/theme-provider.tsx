"use client";

import { ConfigProvider, ThemeConfig, theme } from "antd";

import {
  themeModeToken,
  customComponentConfig,
  customThemeTokenConfig,
} from "./antd/theme";
import { useSettingStore } from "@/hooks/use-setting-store";
import { ThemeMode } from "@/types";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { settings } = useSettingStore();
  const { themeMode, themeColor } = settings;

  const algorithm =
    themeMode === ThemeMode.Light
      ? theme.defaultAlgorithm
      : theme.darkAlgorithm;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeColor,
          //   borderRadius: 2,
          ...customThemeTokenConfig,
          ...themeModeToken[themeMode].token,
        },
        components: {
          ...customComponentConfig,
          ...themeModeToken[themeMode].components,
        },
        algorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
