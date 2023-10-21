"use client";

import HeaderPage from "@/components/layout/header/page";
import SiderPage from "@/components/layout/sider/page";

import { useCollapse } from "@/hooks/use-collapse-store";
import { cn } from "@/lib/utils";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useCollapse();

  return (
    <>
      <div className="h-[48px] fixed w-full bg-[#001529]">
        <HeaderPage />
      </div>
      <div className="flex min-h-full">
        <div className="fixed top-[50px] h-full shadow-md">
          <SiderPage />
        </div>
        <main
          className={cn(
            "w-full transition-all min-h-[100vh] bg-zinc-200 p-2 pt-[58px]",
            isCollapsed ? "ml-[50px]" : "ml-[210px]"
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
