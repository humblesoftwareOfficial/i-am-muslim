import React, { useEffect, useRef } from "react";
import { Platform } from "react-native";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { APP_COLORS } from "../../styling/system";
import { BOTTOM_MODAL_STYLE } from "../../styling/modal";

const SYSTEM_TOP_VALUE = Platform.OS === "android" ? 25 : 0;

const MIN_HEIGHT = Math.ceil(
  Dimensions.get("window").height - (50 - SYSTEM_TOP_VALUE)
);

export default ({
  showModal,
  onClose,
  content,
  backgroundColor = "#171717",
  minHeight = MIN_HEIGHT,
  overlay = "rgba(0,0,0,0.0)",
  animationType = "slide",
  paddingHorizontal = 12,
  borderWidth = 0,
  borderColor = "transparent",
  sliderBackgroundColor = APP_COLORS.YELLOW_COLOR.color,
}) => {
  const screenHeight = Dimensions.get("screen").height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const handleDismiss = () => {
    closeAnim.start(() => onClose());
  };

  useEffect(() => {
    resetPositionAnim.start();
  }, [resetPositionAnim]);

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return handleDismiss();
        } else {
        }
        return resetPositionAnim.start();
      },
    })
  ).current;

  return (
    <Modal
      animated
      animationType={animationType}
      visible={showModal}
      transparent
      onRequestClose={handleDismiss}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={handleDismiss}>
        <View
          style={[
            BOTTOM_MODAL_STYLE.overlay,
            {
              backgroundColor: overlay,
            },
          ]}
        >
          <Animated.View
            style={{
              ...BOTTOM_MODAL_STYLE.container,
              backgroundColor,
              minHeight,
              transform: [{ translateY: translateY }],
              paddingHorizontal,
              borderWidth,
              borderColor,
            }}
            {...panResponders.panHandlers}
          >
            <View style={BOTTOM_MODAL_STYLE.sliderIndicatorRow}>
              <View
                style={[
                  BOTTOM_MODAL_STYLE.sliderIndicator,
                  {
                    backgroundColor: sliderBackgroundColor,
                  },
                ]}
              />
            </View>
            {content}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
