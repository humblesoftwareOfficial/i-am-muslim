import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "./polices";
import { APP_COLORS } from "./system";

export const HEADER_HOME_STYLE = StyleSheet.create({
  container: {
    // height: Math.ceil(Dimensions.get("screen").height / 8),
    backgroundColor: APP_COLORS.LIGHT_DARK_COLOR.color,
    // marginTop: 10,
    // marginBottom: 10,
    // marginLeft: 15,
    // marginRight: 15,
    borderRadius: 5,
    padding: 5,
    flexDirection: "row",
    // flex: 1,
    margin: 5
  },
  side: {
    
  },
  hour_prayer: {
    flex: 1,
    backgroundColor: APP_COLORS.PRIMARY_DARK_COLOR.color,
    margin: 5,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    borderRadius: 5,
  },
  item_prayer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  hour_prayer_text: {
    fontFamily: FONTS.bold,
    color: APP_COLORS.LIGHT_COLOR.color,
    textAlign: "center",
    fontSize: 20
  },
  hour_prayer_text_label: {
    // fontFamily: FONTS.bold,
    color: APP_COLORS.LIGHT_COLOR.color,
    textAlign: "center",
    // fontSize: 20
  }
});
