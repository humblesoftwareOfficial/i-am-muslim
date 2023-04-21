import { View, Text, Dimensions, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { PEARL_SIZE, TASBIH_STYLE } from "../../styling/tasbih";
import { APP_COLORS } from "../../styling/system";

export default function TasbihPearl({
  pearlColor = APP_COLORS.BLACK_COLOR.color,
  value = 0,
  goOut = false,
  move = false,
}) {
  const panX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (goOut) {
      Animated.timing(panX, {
        toValue: Dimensions.get('window').width,
        duration: 500,
        useNativeDriver: true
      }).start();
    }
  }, [goOut]);

  useEffect(() => {
    if (!goOut && move) {
    //   Animated.timing(panX, {
    //     toValue: PEARL_SIZE * value * 1.1,
    //     duration: 500,
    //     useNativeDriver: true
    //   }).start();
    }
  }, [move, goOut]);



  return (
    <Animated.View
      style={[
        TASBIH_STYLE.pearl,
        {
          left: PEARL_SIZE * value * 1.1,
          backgroundColor: pearlColor,
          transform: [{ translateX: panX }],
        },
      ]}
    >
      <LinearGradient
        start={[0.5, 0.5]}
        end={[0.2, 1]}
        colors={[
          APP_COLORS.PRIMARY_DARK_COLOR.color,
          APP_COLORS.BLACK_COLOR.color,
        ]}
        style={{ borderRadius: 50 }}
      >
        <View style={{ height: PEARL_SIZE, width: PEARL_SIZE }}></View>
      </LinearGradient>
    </Animated.View>
  );
}
