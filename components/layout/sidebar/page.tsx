"use client";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { onStart } from "@/lib/router-events/events";
import { useCollapse } from "@/hooks/use-collapse-store";
import { useThemeToken } from "@/hooks/use-theme-token";

import {
  FormOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, ConfigProvider, Divider } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

/**
 * @description Sidebar Navigation Configuration, These are what you want to see in the sidebar.
 */
const items: MenuProps["items"] = [
  getItem("个人页", "/profile", <UserOutlined />),
  getItem("表格页", "/table", <TableOutlined />),
  getItem("表单页", "/form-page", <FormOutlined />, [
    getItem("基础表单", "/basic-form-page"),
    getItem(
      "分布表单",
      "/step-form-page",
      null
      // [
      //   getItem("分布一", "/one"),
      //   getItem("分布二", "/two"),
      // ]
    ),
  ]),
];

const SiderPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { isCollapsed, onOpen, onClose } = useCollapse();
  const selectedKeys = "/" + pathname.split("/").reverse()[0];

  const onClick: MenuProps["onClick"] = (e) => {
    const url = e.keyPath.reverse().join("");
    if (pathname !== url) {
      router.push(url);
      onStart();
    }
  };

  const { colorTextBase, colorBgContainer } = useThemeToken();

  return (
    <div
      className={cn(
        "flex flex-col h-full overflow-y-auto scrollbar overflow-x-hidden transition-all",
        isCollapsed ? "w-[50px]" : "w-[210px]"
      )}
      // style={{
      //   color: colorTextBase,
      //   backgroundColor: colorBgContainer,
      // }}
    >
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              collapsedIconSize: 14,
              collapsedWidth: 50,
              itemBorderRadius: 0,
              // subMenuItemBg: "#ffffff",
              itemMarginInline: 0,
              itemMarginBlock: 0,
              // itemSelectedColor: "#5248e5",
              // itemSelectedBg: "#eeedfc",
            },
          },
        }}
      >
        <Menu
          onClick={onClick}
          defaultSelectedKeys={[selectedKeys]}
          defaultOpenKeys={["/form-page"]}
          mode="inline"
          items={items}
          inlineCollapsed={isCollapsed}
        />
      </ConfigProvider>
      <div className="mt-auto">
        <div className="mb-[60px] relative hidden md:block">
          <ConfigProvider
            theme={{
              components: {
                Divider: {
                  marginLG: 12,
                },
              },
            }}
          >
            <Divider />
          </ConfigProvider>
          {isCollapsed ? (
            <MenuUnfoldOutlined
              onClick={onClose}
              className="text-lg ml-[18px]"
            />
          ) : (
            <MenuFoldOutlined onClick={onOpen} className="text-lg ml-[18px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SiderPage;
export { items };
export type { MenuItem };
