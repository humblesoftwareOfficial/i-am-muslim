import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { APP_COLORS } from "./system";
import { FONTS } from "./polices";

export const PEARL_SIZE = Dimensions.get("window").width / 7.5;

export const TASBIH_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },
  tasbih_counter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  current_counter_value: {
    fontFamily: FONTS.righteousRegular,
    fontWeight: "bold",
    fontSize: 68,
    color: APP_COLORS.PRIMARY_DARK_COLOR.color
  },
  tasbih_limit: {
    fontFamily: FONTS.righteousRegular,
    fontSize: 20,
  },
  tasbih_options: {
    marginLeft: 17,
    marginRight: 17,
    alignItems: "center",
    flexDirection: "row"
  },
  right_header: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  tasbih_chaplet_container: {
    flex: 1,
  },
  line: {
    position: "absolute",
    transform: [{ rotate: "deg" }, { scale: 2 }],
    top: Dimensions.get("window").height / 4,
    left: 0,
    right: 0,
    width: Dimensions.get("window").width,
    height: 1,
    borderBottomColor: APP_COLORS.PRIMARY_DARK_COLOR.color,
    borderBottomWidth: 1,
    borderBottomRadius: 50,
  },
  pearl: {
    width: PEARL_SIZE,
    height: PEARL_SIZE,
    borderRadius: 50,
    position: "absolute",
    top: Dimensions.get("window").height / 4 - PEARL_SIZE / 2,
  },
});


