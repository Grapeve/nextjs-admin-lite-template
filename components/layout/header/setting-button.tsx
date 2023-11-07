"use client";

import Color from "color";
import { useState } from "react";
import { MdCircle } from "react-icons/md";
import Image from "next/image";

import { Drawer, Card } from "antd";
import { CloseOutlined, SettingOutlined } from "@ant-design/icons";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import SettingIcon from "@/public/svgs/setting.svg";

import { useThemeToken } from "@/theme/use-theme-token";
import { useSettingStore } from "@/hooks/use-setting-store";
import { colorPrimarys } from "@/theme/antd/theme";

import { ThemeMode } from "@/types";

const SettingButton = () => {
  const [open, setOpen] = useState(false);

  const { colorTextSecondary, colorBgContainer, colorPrimary } =
    useThemeToken();

  const { settings, setSettings } = useSettingStore();
  const { themeColor } = settings;

  return (
    <>
      <div onClick={() => setOpen(true)}>
        <SettingOutlined className="h-5 w-5" />
        {/* <Image src={SettingIcon} alt="" width={32} height={32} /> */}
      </div>
      <Drawer
        title="Setting"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        closable={false}
        width={280}
        maskStyle={{ backgroundColor: "transparent" }}
        style={{
          backdropFilter: "blur(1px)",
          backgroundColor: Color(colorBgContainer).alpha(0.9).toString(),
          backgroundPosition: "right top, left bottom",
          backgroundSize: "50, 50%",
        }}
        extra={
          <button
            onClick={() => setOpen(false)}
            className="flex justify-center items-center text-gray-400 
            rounded-full p-2 h-9 w-9 hover:scale-105 hover:bg-slate-200"
          >
            <CloseOutlined />
          </button>
        }
      >
        {/* theme mode */}
        <div className="pb-6">
          <div
            className="mb-3 text-xs font-semibold"
            style={{ color: colorTextSecondary }}
          >
            Mode
          </div>
          <div className="flex flex-row gap-4">
            <Card
              className="flex h-20 w-full cursor-pointer items-center justify-center"
              onClick={() =>
                setSettings({ ...settings, themeMode: ThemeMode.Light })
              }
            >
              <SunIcon
                className={"h-6 w-6"}
                style={{
                  color:
                    settings.themeMode === ThemeMode.Light ? colorPrimary : "",
                }}
              />
            </Card>
            <Card
              className="flex h-20 w-full cursor-pointer items-center justify-center"
              onClick={() =>
                setSettings({ ...settings, themeMode: ThemeMode.Dark })
              }
            >
              <MoonIcon
                className={"h-6 w-6"}
                style={{
                  color:
                    settings.themeMode === ThemeMode.Dark ? colorPrimary : "",
                }}
              />
            </Card>
          </div>
        </div>
        {/* theme color */}
        <div>
          <div
            className="mb-3 text-xs font-semibold"
            style={{ color: colorTextSecondary }}
          >
            ThemeColor
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {Object.entries(colorPrimarys).map(([preset, color]) => (
              <Card
                key={preset}
                className="flex h-14 w-full cursor-pointer items-center justify-center"
                style={{
                  backgroundColor: themeColor === color ? `${color}14` : "",
                }}
                onClick={() => setSettings({ ...settings, themeColor: color })}
              >
                <div style={{ color }}>
                  <MdCircle
                    style={{ fontSize: themeColor === color ? 24 : 12 }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SettingButton;
