import { usePathname, useRouter } from "next/navigation";

import { useCollapse } from "@/hooks/use-collapse-store";
import { onStart } from "@/lib/router-events/events";

import {
  LogoutOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown } from "antd";

import SettingButton from "./setting-button";

const items: MenuProps["items"] = [
  {
    key: "/profile",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        个人中心
      </a>
    ),
    icon: <UserOutlined />,
  },
  {
    key: "/login",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        退出登录
      </a>
    ),
    icon: <LogoutOutlined />,
  },
];

const HeaderPage: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isCollapsed, onOpen, onClose } = useCollapse();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (pathname != key) {
      router.push(key);
      onStart();
    }
  };

  return (
    <div className="h-full flex items-center">
      <div className="flex text-white text-lg ml-4">
        <div className="flex items-center">
          <span className="text-[28px] pr-2">🍞</span>
          <span className="hidden md:block transition-all">
            Nextjs-Admin-Lite-Template
          </span>
        </div>
      </div>
      <div className="block md:hidden text-white">
        {isCollapsed ? (
          <MenuUnfoldOutlined onClick={onClose} />
        ) : (
          <MenuFoldOutlined onClick={onOpen} />
        )}
      </div>
      <div className="ml-auto mr-5 text-white flex">
        <div className="flex items-center mr-2 text-2xl animate-spin-slow cursor-pointer">
          <SettingButton />
        </div>
        <Dropdown
          menu={{ items, onClick }}
          className="h-[48px] flex items-center"
        >
          <div>
            <Avatar
              size={32}
              src={
                "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
              }
            />
            <span className="ml-1">Grapeve</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderPage;
