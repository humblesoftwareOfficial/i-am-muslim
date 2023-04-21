import { Dimensions, StyleSheet } from "react-native";

export const ANIMATION_STYLE = StyleSheet.create({
  animationHeart: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  animationLottie: {
    width: Dimensions.get("window").width / 1.5,
    height: Dimensions.get("window").height / 1.5,
  },
});
