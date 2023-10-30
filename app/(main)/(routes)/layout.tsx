"use client";

import { ConfigProvider, ThemeConfig, theme } from "antd";

const themeModeToken: Record<"dark" | "light", ThemeConfig> = {
  dark: {
    token: {
      colorBgLayout: "#161c24",
      colorBgContainer: "#212b36",
      colorBgElevated: "#161c24",
    },
    components: {
      Modal: {
        headerBg: "#212b36",
        contentBg: "#212b36",
        footerBg: "#212b36",
      },
      Notification: {},
      Menu: {
        subMenuItemBg: "#212b36",
      },
    },
  },
  light: {},
};

const customComponentConfig: ThemeConfig["components"] = {
  Menu: {
    fontSize: 14,
    colorFillAlter: "transparent",
    itemColor: "rgb(145, 158, 171)",
  },
};

const customThemeTokenConfig: ThemeConfig["token"] = {
  colorSuccess: "#22c55e",
  colorWarning: "#ff7849",
  colorError: "#ff5630",
  colorInfo: "#00b8d9",

  // 线性化
  wireframe: false,

  borderRadiusSM: 2,
  borderRadius: 4,
  borderRadiusLG: 8,
};

import NavBreadcrumb from "@/components/nav-breadcrumb/page";
import HeaderPage from "@/components/layout/header/page";
import SiderPage from "@/components/layout/sidebar/page";

import { cn } from "@/lib/utils";
import { useCollapse } from "@/hooks/use-collapse-store";
import { useSettingStore } from "@/hooks/use-setting-store";

import { ThemeMode } from "@/types";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useCollapse();

  const { settings } = useSettingStore();
  const { themeMode } = settings;

  const algorithm =
    themeMode === ThemeMode.Light
      ? theme.defaultAlgorithm
      : theme.darkAlgorithm;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: settings.themeColor,
          borderRadius: 2,
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
      <div className="h-[48px] fixed w-full bg-[#645ae7] z-10">
        <HeaderPage />
      </div>
      <div className="flex min-h-full ">
        <div
          className={cn(
            "fixed top-[48px] h-full shadow-md border-r bg-white border-zinc-200 z-10",
            settings.themeMode === ThemeMode.Dark &&
              "bg-[#212b36] text-[#ffffff]"
          )}
        >
          <SiderPage />
        </div>
        <div
          className={cn(
            "fixed w-full top-[48px] h-[40px] transition-all z-10",
            isCollapsed ? "ml-[50px]" : "ml-[210px]"
          )}
        >
          <div
            className={cn(
              "h-full flex items-center bg-[#f0f4f7]",
              settings.themeMode === ThemeMode.Dark &&
                "bg-[#161c24] text-[#ffffff]"
            )}
          >
            <NavBreadcrumb />
          </div>
        </div>
        <main
          className={cn(
            "w-full transition-all min-h-[100vh] bg-[#f0f4f7] p-2 pt-[98px] ",
            isCollapsed ? "ml-[50px]" : "ml-[210px]",
            settings.themeMode === ThemeMode.Dark &&
              "bg-[#161c24] text-[#ffffff]"
          )}
        >
          {children}
        </main>
      </div>
    </ConfigProvider>
  );
};

export default MainLayout;
