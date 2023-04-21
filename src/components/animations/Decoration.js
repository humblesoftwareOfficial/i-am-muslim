import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import DECO_ANIMATION from "../../assets/animations/decoration.json";
import { APP_COLORS } from "../../styling/system";

export default function DecoAnimation({
  text = "",
  size = "small",
  color = APP_COLORS.PRIMARY_COLOR.color,
  flex = 1,
  loop = true
}) {
  return (
    <View style={[styles.container, { flex }]}>
      <AnimatedLottieView
        source={DECO_ANIMATION}
        style={styles.loading}
        autoPlay
        loop={loop}
      />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    // width: Dimensions.get('window').width / 5,
    // height: Dimensions.get('window').width / 5,
  }
});
