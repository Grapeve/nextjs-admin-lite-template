# Next.js Admin Lite Template

It is a <b>Nextjs</b> Admin Lite Template. Maybe this is not a real template. I provide a generic layout. All you need to do is configure the page and then concentrate on writing your code.

！！！ Now it's just a small sample, and there are still many features that haven't been added. I will add them as soon as possible. If you think there's anything you need, you can let me know.

## Features

- ⚛️ [nextjs 13](https://nextjs.org/): The React Framework for the Web.

* 🎨 [ant-design](https://ant.design/): An enterprise-class UI design language and React UI library.

- 🐻 [zustand](https://zustand-demo.pmnd.rs/): A small, fast and scalable bearbones state-management solution using simplified flux principles.

- 🌊 [tailwind css](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.

## Online

https://nextjs-admin-lite-template.vercel.app

## Docs

### 1. Sidebar navigation configuration

Configure the sidebar navigation what you want to see directly.

Configure location: <b>/components/layouts/sidebar/page.tsx</b>, line 39.

More information: https://ant.design/components/menu.

```typescript
const items: MenuProps["items"] = [
  getItem("个人页", "/profile", <UserOutlined />),
  getItem("表单页", "/form-page", <FormOutlined />, [
    getItem("基础表单", "/basic-form-page"),
    getItem("分布表单", "/step-form-page"),
  ]),
];
```

Configure the three-level navigation. If the third parameter icon is not present, set it to null.

```typescript
const items: MenuProps["items"] = [
  getItem("个人页", "/profile", <UserOutlined />),
  getItem("表单页", "/form-page", <FormOutlined />, [
    getItem("基础表单", "/basic-form-page"),
    getItem("分布表单", "/step-form-page", null, [
      getItem("分布一", "/one"),
      getItem("分布二", "/two"),
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

- You can create a new css file in the same directory as page.tsx and import it, or write it in /app/globals.css.

```css
.custom-breadcrumb > .ant-breadcrumb {
  color: #c6a7fe;
}
```

## Getting Started

```
git clone https://github.com/Grapeve/nextjs-admin-lite-template.git

cd nextjs-admin-lite-template

pnpm i

pnpm dev
```
