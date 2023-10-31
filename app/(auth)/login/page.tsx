"use client";

import { useRouter } from "next/navigation";
import { Button, Form, Input, ConfigProvider, Divider } from "antd";

import { onStart } from "@/lib/router-events/events";
import { useSettingStore } from "@/hooks/use-setting-store";
import { useThemeToken } from "@/theme/use-theme-token";

import { ThemeMode } from "@/types";

type FieldType = {
  account?: string;
  password?: string;
};

const LoginPage = () => {
  const { settings } = useSettingStore();
  const { colorBgContainer, colorBgElevated } = useThemeToken();

  const router = useRouter();

  const onSumbit = (values: FieldType) => {
    console.log(values);
    router.push("/profile");
    onStart();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: settings.themeColor,
            labelFontSize: 16,
            itemMarginBottom: 21,
          },
        },
      }}
    >
      <div
        className="flex h-full justify-center items-center bg-[rgb(243,245,249)]"
        style={{
          color: settings.themeMode === ThemeMode.Dark ? "#ffffff" : "",
          backgroundColor:
            settings.themeMode === ThemeMode.Dark ? colorBgElevated : "",
        }}
      >
        <div
          className="bg-white w-[360px] md:min-w-[360px] flex flex-col items-center
          border-solid shadow rounded-[24px]"
          style={{
            color: settings.themeMode === ThemeMode.Dark ? "#ffffff" : "",
            backgroundColor:
              settings.themeMode === ThemeMode.Dark ? colorBgContainer : "",
          }}
        >
          <span
            className="text-[32px] text-[#031b4e] font-[700] tracking-tighter mt-5 mb-3"
            style={{
              color:
                settings.themeMode === ThemeMode.Dark
                  ? settings.themeColor
                  : "",
            }}
          >
            🍞 Nextjs-Admin
          </span>
          {/* <span className="text-[32px] text-[#031b4e] font-[700] tracking-tighter space-y-2">
            Log in to your account
          </span> */}
          <Form
            layout="vertical"
            autoComplete="off"
            style={{ minWidth: 330 }}
            onFinish={onSumbit}
            initialValues={{ account: "admin", password: "123456" }}
          >
            <Form.Item<FieldType>
              label="account"
              name="account"
              rules={[
                { required: true, message: "Please input your account!" },
              ]}
            >
              <Input
                placeholder="Enter your account admin"
                style={{
                  height: 48,
                }}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password 123456"
                style={{
                  height: 48,
                }}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: 340,
                  fontSize: 16,
                  fontWeight: 600,
                  height: 48,
                  borderRadius: 10,
                  marginTop: 15,
                  backgroundColor: settings.themeColor,
                }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
          <div className="w-full -mt-4 -mb-1">
            <Divider />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default LoginPage;
