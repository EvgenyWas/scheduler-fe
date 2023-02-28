import { DefaultTheme } from "styled-components";
import { ETheme, ITheme } from "../types/styled";

const baseTheme: ITheme = {
  colors: {},

  fonts: {
    general:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },

  fs: {
    xs: "12px",
    sm: "15px",
    md: "18px",
    lg: "24px",
    xl: "28px",
    xxl: "40px",
  },

  lh: {
    xs: "14px",
    sm: "18px",
    md: "22px",
    lg: "28px",
    xl: "33px",
    xxl: "47px",
  },

  fw: {
    regular: 400,
    medium: 500,
  },

  media: {
    sm: "576px",
    md: "768px",
    lg: "576px",
    xl: "1200px",
  },
};

export const scedulerTheme: DefaultTheme = {
  type: ETheme.scheduler,
  ...baseTheme,

  colors: {
    generalBlue: "#10367C",
    generalWhite: "#FFFFFF",
    acceptBlue: "#3077C6",
    acceptYellow: "#F5BD41",
    darkMode1: "#121212",
    darkMode2: "#1D1E1F",
    darkMode3: "#4D4D4D",
    strokeColor: "#F3F3F4",
    textColor: "#383838",
    titleColor: "#383838",
    secondaryText: "#BFBFBF",
    bgColor: "#EAF0F9",
    bgColor2: "#FFFFFF",
  },
};

export const darkTheme: DefaultTheme = {
  type: ETheme.dark,
  ...baseTheme,
};

export const cloverTheme: DefaultTheme = {
  type: ETheme.clover,
  ...baseTheme,
};
