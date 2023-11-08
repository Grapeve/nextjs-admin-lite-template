# Next.js Admin Lite Template

It is a <b>Nextjs</b> Admin Lite Template. Maybe this is not a real template. I provide a generic layout. All you need to do is configure the page and then concentrate on writing your code.

！！！ Now it's just a small sample, and there are still many features that haven't been added. I will add them as soon as possible. If you think there's anything you need, you can let me know.

## Features

- ⚛️ [nextjs 13](https://nextjs.org/): The React Framework for the Web.

* 🎨 [ant-design](https://ant.design/): An enterprise-class UI design language and React UI library.

- 🐻 [zustand](https://zustand-demo.pmnd.rs/): A small, fast and scalable bearbones state-management solution using simplified flux principles.

- 🌊 [tailwind css](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.

## Online Preview

https://nextjs-admin-lite-template.vercel.app

## Docs

### 1. Sidebar navigation configuration

Configure the sidebar navigation what you want to see directly.

Configure location: <b>/components/layouts/sidebar/page.tsx</b>, line 40.

More information about meun component: https://ant.design/components/menu.

`<UserOutlined />` is an icon component. More Icon: https://ant-design.antgroup.com/components/icon

```typescript
const items: MenuProps["items"] = [
  getItem("Profile", "/profile", <UserOutlined />),
  getItem("Form", "/form-page", <FormOutlined />, [
    getItem("BasicForm", "/basic-form-page"),
    getItem("StepForm", "/step-form-page"),
  ]),
];
```

Then you should create pages when you haved configured the sidebar navigation. This project uses <b>app router</b> mode. More information about app router: https://nextjs.org/docs/app/building-your-application/routing#the-app-router.

```
app
|—(main)
  |—(routes)
    |—profile
      |—page.tsx
    |—form-page
      |—basic-form-page
        |—page.tsx
      |—step-form-page
        |—page.tsx
```

Configure the three-level navigation. If the third parameter icon is not present, set it to null.

```typescript
const items: MenuProps["items"] = [
  getItem("Prfoile", "/profile", <UserOutlined />),
  getItem("Form", "/form-page", <FormOutlined />, [
    getItem("BasicForm", "/basic-form-page"),
    getItem("StepForm", "/step-form-page", null, [
      getItem("StepOne", "/one"),
      getItem("StepTwo", "/two"),
    ]),
  ]),
];
```

### 2. Partially modify the antd component style

In order to avoid page flicker, I have used the method provided by Antd，extract and inject antd's first-screen styles into HTML. See more: https://ant.design/docs/react/use-with-next#using-app-router.
But this will cause a problem, if you use tailwind css in the className of the Antd component, it will not working. There is a solution below.

- Define a custom class outside the component, like `custom-breadcrumb`

```tsx
<div className="custom-breadcrumb ml-2 cursor-pointer">
  <Breadcrumb items={labels} />
</div>
```

- Then you can create a new css file in the same directory as page.tsx and import it in page.tsx, or write it in /app/globals.css.

```css
.custom-breadcrumb > .ant-breadcrumb {
  color: #c6a7fe;
}
```

### 3. Dark mode

The configuration related to the antd theme is located at `/theme/antd/theme.ts`. More information: https://ant-design.antgroup.com/docs/react/customize-theme.

If you are using antd component, when you switch to dark mode, it will automatically switch to dark state. If it is a custom component, you need to add dark state manually. For example:

```ts
// 1:
import { useSettingStore } from "@/hooks/use-setting-store";
import { useThemeToken } from "@/theme/use-theme-token";
import { ThemeMode } from "@/types";

// 2:
const { settings } = useSettingStore();
const { themeMode } = settings();
const { colorBgContainer, colorBgElevated } = useThemeToken();
// colorBgContainer: antd container background color "#212b36"
// colorBgElevated: antd elevated container background color "#161c24"
// You can customize dark color you want at /theme/antd/theme.ts

// 3:
<div
  style={{
    color: themeMode === ThemeMode.Dark ? "#ffffff" : "",
    backgroundColor: themeMode === ThemeMode.Dark ? colorBgElevated : "",
  }}
>
  xxx
</div>;
```

## Getting Started

```
git clone https://github.com/Grapeve/nextjs-admin-lite-template.git

cd nextjs-admin-lite-template

pnpm i

pnpm dev
```
