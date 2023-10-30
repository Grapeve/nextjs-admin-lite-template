"use client";

import { useState } from "react";
import { MdCircle } from "react-icons/md";

import { SettingOutlined, CloseOutlined } from "@ant-design/icons";
import { Drawer, Card } from "antd";

import { useThemeToken } from "@/hooks/use-theme-token";
import { useSettingStore } from "@/hooks/use-setting-store";

const SettingButton = () => {
  const [open, setOpen] = useState(false);

  const { colorTextSecondary } = useThemeToken();

  const { themeColor, setSettings } = useSettingStore();

  // 主题色
  const colorPrimarys = {
    default: "#00a76f",
    cyan: "#078DEE",
    purple: "#7635DC",
    blue: "#5248e5",
    orange: "#FDA92D",
    red: "#FF3030",
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>
        <SettingOutlined />
      </div>
      <Drawer
        title="Setting"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        closable={false}
        width={280}
        maskStyle={{ backgroundColor: "transparent" }}
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
                onClick={() => setSettings(color)}
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
