"use client";

import "./breadcrumb.css";

import { usePathname } from "next/navigation";

import { MenuItem, items } from "@/components/layout/sidebar/page";

import { Breadcrumb } from "antd";

const getPathLabels = (menuData: any, url: string) => {
  const pathSegments = url.split("/").filter((i) => i);

  const labels: { title: string }[] = [];
  let current = menuData;

  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    const child = current.find(
      (menuItem: MenuItem) => menuItem!.key === `/${segment}`
    );
    if (child) {
      labels.push({
        title: child.label,
      });
      current = child.children || [];
    }
  }

  return labels;
};

const NavBreadcrumb = () => {
  const pathname = usePathname();
  const labels = getPathLabels(items, pathname);

  return (
    <div className="custom-breadcrumb ml-2 cursor-pointer">
      <Breadcrumb items={labels} />
    </div>
  );
};

export default NavBreadcrumb;
