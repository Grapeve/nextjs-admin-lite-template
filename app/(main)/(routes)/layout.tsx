"use client";

import { ConfigProvider } from "antd";

import NavBreadcrumb from "@/components/nav-breadcrumb/page";
import HeaderPage from "@/components/layout/header/page";
import SiderPage from "@/components/layout/sidebar/page";

import { cn } from "@/lib/utils";
import { useCollapse } from "@/hooks/use-collapse-store";
import { useSettingStore } from "@/hooks/use-setting-store";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useCollapse();
  const { themeColor } = useSettingStore();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeColor,
          borderRadius: 2,
        },
      }}
    >
      <div className="h-[48px] fixed w-full bg-[#645ae7] z-10">
        <HeaderPage />
      </div>
      <div className="flex min-h-full">
        <div className="fixed top-[48px] h-full shadow-md border-r border-solid border-zinc-200 z-10">
          <SiderPage />
        </div>
        <div
          className={cn(
            "fixed w-full top-[48px] h-[40px] transition-all z-10",
            isCollapsed ? "ml-[50px]" : "ml-[210px]"
          )}
        >
          <div className="h-full flex items-center bg-[#f0f4f7]">
            <NavBreadcrumb />
          </div>
        </div>
        <main
          className={cn(
            "w-full transition-all min-h-[100vh] bg-[#f0f4f7] p-2 pt-[98px]",
            isCollapsed ? "ml-[50px]" : "ml-[210px]"
          )}
        >
          {children}
        </main>
      </div>
    </ConfigProvider>
  );
};

export default MainLayout;
