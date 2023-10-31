import { ThemeConfig } from "antd";
import { rgb } from "color";

const themeModeToken: Record<"dark" | "light", ThemeConfig> = {
  dark: {
    token: {
      colorBgLayout: "#161c24",
      colorBgContainer: "#212b36",
      colorBgElevated: "#161c24",
    },
    components: {
      Modal: {
        headerBg: "#212b36",
        contentBg: "#212b36",
        footerBg: "#212b36",
      },
      Notification: {},
      Menu: {
        // subMenuItemBg: "#212b36",
        subMenuItemBg: "#161c24",
        itemBg: "#161c24",
        itemColor: "rgb(145, 158, 171)",
      },
    },
  },
  light: {},
};

const customComponentConfig: ThemeConfig["components"] = {
  Menu: {
    fontSize: 14,
    colorFillAlter: "transparent",
    itemColor: "rgb(145, 158, 171)",
  },
};

/**
 * Antd theme editor: https://ant.design/theme-editor
 */
const customThemeTokenConfig: ThemeConfig["token"] = {
  colorSuccess: "#22c55e",
  colorWarning: "#ff7849",
  colorError: "#ff5630",
  colorInfo: "#00b8d9",

  // 线性化
  wireframe: false,

  borderRadiusSM: 2,
  borderRadius: 4,
  borderRadiusLG: 8,
};

const colorPrimarys = {
  default: "#00a76f",
  cyan: "#5248e5",
  purple: "#7635DC",
  blue: "#2065D1",
  orange: "#FDA92D",
  red: "#FF3030",
};

export {
  themeModeToken,
  customComponentConfig,
  customThemeTokenConfig,
  colorPrimarys,
};
