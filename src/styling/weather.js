import { Platform, StatusBar, StyleSheet } from "react-native";
import { APP_COLORS } from "./system";
import { FONTS } from "./polices";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const TOP_WEATHER_STYLE = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  container_side: {
    flex: 1,
    justifyContent: "center"
  },
  weather_container: {
    borderRadius: 50,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  wind_container: {
    margin: 5,
    padding: 2,
  },
  wind_value: {
    fontFamily: FONTS.sacramento,
    color: APP_COLORS.PRIMARY_DARK_COLOR.color,
  },
  weather_value: {
    color: APP_COLORS.PRIMARY_DARK_COLOR.color,
    marginRight: 15,
    fontFamily: FONTS.sacramento,
    fontSize: 33,
    textAlign: "center",
  },
  user_location: {
    margin: 5,
    marginTop: 10,
    padding: 3,
    borderRadius: 5,
  },
  location_name: {
    fontFamily: FONTS.bold,
    textAlign: "center",
    color: APP_COLORS.PRIMARY_DARK_COLOR.color,
  },
});
