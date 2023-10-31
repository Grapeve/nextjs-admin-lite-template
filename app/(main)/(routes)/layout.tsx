"use client";

import NavBreadcrumb from "@/components/nav-breadcrumb/page";
import HeaderPage from "@/components/layout/header/page";
import SiderPage from "@/components/layout/sidebar/page";

import { cn } from "@/lib/utils";
import { useCollapse } from "@/hooks/use-collapse-store";
import { useSettingStore } from "@/hooks/use-setting-store";
import { useThemeToken } from "@/theme/use-theme-token";

import { ThemeMode } from "@/types";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useCollapse();

  const { settings } = useSettingStore();
  const { colorBgContainer, colorBgElevated } = useThemeToken();

  return (
    <>
      <div className="h-[48px] fixed w-full bg-[#645ae7] z-10">
        <HeaderPage />
      </div>
      <div className="flex min-h-full ">
        <div
          className="fixed top-[48px] h-full shadow-md border-r bg-white border-zinc-200 z-10"
          style={{
            color: settings.themeMode === ThemeMode.Dark ? "#ffffff" : "",
            backgroundColor:
              settings.themeMode === ThemeMode.Dark ? colorBgElevated : "",
          }}
        >
          <SiderPage />
        </div>
        <div
          className={cn(
            "fixed w-full top-[48px] h-[40px] z-10 transition-all",
            isCollapsed ? "ml-[50px]" : "ml-[210px]"
          )}
        >
          <div
            className="h-full flex items-center bg-[#f0f4f7]"
            style={{
              color: settings.themeMode === ThemeMode.Dark ? "#ffffff" : "",
              backgroundColor:
                settings.themeMode === ThemeMode.Dark ? colorBgElevated : "",
            }}
          >
            <NavBreadcrumb />
          </div>
        </div>
        <main
          className={cn(
            "w-full min-h-[100vh] bg-[#f0f4f7] p-2 pt-[98px] transition-spacing",
            isCollapsed ? "ml-[50px]" : "ml-[210px]"
          )}
          style={{
            color: settings.themeMode === ThemeMode.Dark ? "#ffffff" : "",
            backgroundColor:
              settings.themeMode === ThemeMode.Dark ? colorBgElevated : "",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
