import AnimatedLottieView from "lottie-react-native";
import React from "react";
import {  StyleSheet, View } from "react-native";

import CONGRATULATION_ANIMATION from "../../assets/animations/congrats.json";

export default function CongratulateAnimation({
  flex = 1,
  loop = true
}) {
  return (
    <View style={[styles.container, { flex }]}>
      <AnimatedLottieView
        source={CONGRATULATION_ANIMATION}
        style={styles.loading}
        autoPlay
        loop={loop}
      />
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
