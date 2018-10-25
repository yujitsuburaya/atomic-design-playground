// @flow
import { Dimensions, Platform, StatusBar } from "react-native";

// ==============================
// APP STYLE CONSTANTS
// ==============================

// color
const color = {
  logoBlue: "#003366",
  uiBlue: "#00478F",
  campusGreen: "#11D496",
  bubbleBlue: "#2B8CED",
  selectedBlue: "#E3F1FF",
  pink: "#ED546E",
  black: "#383333", // dark text
  darkGray: "#9299A0", // light text
  blueGray: "#AEB7BF",
  gray: "#E3E5E7",
  lightGray: "#F3F5F7",
  whiteGray: "#cccccc",
  white: "#FFFFFF"
};

// font sizes
const fontSize = {
  XS: 12,
  S: 14,
  N: 15,
  L: 20,
  XL: 24
};

const IPHONE_X_HEIGHT = 812;
const IPHONE_XR_HEIGHT = 896; // XsMAX も同じ高さ

// Component Specific
// ------------------------------

// これコピペしてきた
// https://github.com/ptelad/react-native-iphone-x-helper
function isIphoneX() {
  const dimensions = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === IPHONE_X_HEIGHT || dimensions.width === IPHONE_X_HEIGHT)
  );
}

function isIphoneXR() {
  const dimensions = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === IPHONE_XR_HEIGHT || dimensions.width === IPHONE_XR_HEIGHT)
  );
}

// iPhoneX 以降のデバイスかどうかを判定します
function isLaterIphoneX() {
  return isIphoneX() || isIphoneXR();
}

function ifIphoneX(iphoneXStyle: any, regularStyle: any) {
  if (isLaterIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

function getStatusBarHeight(safe: boolean) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight
  });
}

function getNavBarHeight(safe: boolean) {
  return Platform.select({
    ios: getStatusBarHeight(safe) + 44,
    android: 54
  });
}

function getHomeIndicatorHeight() {
  if (isLaterIphoneX()) {
    return 34;
  }
  return 0;
}

const onePixel = 1 / Dimensions.get("window").scale;

export default {
  color,
  fontSize,
  isLaterIphoneX,
  ifIphoneX,
  onePixel,
  getStatusBarHeight,
  getNavBarHeight,
  getHomeIndicatorHeight
};
