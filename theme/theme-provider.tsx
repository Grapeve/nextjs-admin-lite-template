"use client";

import { useEffect } from "react";
import {
  themeModeToken,
  customComponentConfig,
  customThemeTokenConfig,
} from "./antd/theme";
import { ConfigProvider, theme } from "antd";

import { useSettingStore } from "@/hooks/use-setting-store";
import { getItem } from "@/lib/utils";

import { StorageEnum, ThemeMode } from "@/types";

const ThemeProvider = ({
  children,
  themeSettings,
}: {
  children: React.ReactNode;
  themeSettings:
    | {
        themeColor: string;
        themeMode: string;
      }
    | undefined;
}) => {
  const { settings, setSettings } = useSettingStore();
  const { themeMode, themeColor } = settings;

  const algorithm =
    themeMode === ThemeMode.Light
      ? theme.defaultAlgorithm
      : theme.darkAlgorithm;

  useEffect(() => {
    const settingsStorage = getItem(StorageEnum.Settings);
    setSettings({ ...settings, ...(settingsStorage as object) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
