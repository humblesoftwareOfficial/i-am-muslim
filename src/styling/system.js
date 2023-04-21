import { Dimensions, StatusBar, StyleSheet } from "react-native";

import { FONTS } from "./polices";

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const APP_COLORS = StyleSheet.create({
  PRIMARY_COLOR: {
    color: "#088395",
  },
  PRIMARY_DARK_COLOR: {
    color: "#0A4D68",
  },
  SECONDARY_COLOR: {
    color: "#05BFDB",
  },
  TERTIARY_COLOR: {
    color: "#00FFCA",
  },
  NEUTRAL_COLOR: {
    color: "#EB455F"
  },
  LIGHT_COLOR: {
    color: "#F4FCFF",
  },
  LIGHT_DARK_COLOR: {
    color: "#D3EDF7",
  },
  BLACK_LIGHT_COLOR: {
    color: "#594545",
  },
  YELLOW_COLOR: {
    color: "#FFC300",
  },
  ORANGE_COLOR: {
    color: "#FA9951",
  },
  PINK_COLOR: {
    color: "#E58853",
  },
  BLUE_COLOR: {
    color: "#188CD7",
  },
  GREEN_COLOR: {
    color: "#20B65F",
  },
  BACKGROUND_GRADIENT: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("screen").height,
  },
  RED_COLOR: {
    color: "#F55738",
  },
  BLACK_COLOR: {
    color: "#000"
  }
});

export const TAG_NAVIGATION_STYLE = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

export const APP_STYLE = StyleSheet.create({
  container_waiting_load_finish: {
    justifyContent: "center",
    marginTop: 50,
    flex: 1,
    backgroundColor: "#000",
  },
  app_name: {
    color: APP_COLORS.YELLOW_COLOR.color,
    fontSize: 24,
    textAlign: "center",
  },
  top_title: { marginLeft: 17, marginLeft: 17 },
  title: {
    color: APP_COLORS.PRIMARY_DARK_COLOR.color,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  subtitle: {
    fontWeight: "400"
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  local_image_background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
