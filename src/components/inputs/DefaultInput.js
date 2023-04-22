import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import { APP_COLORS } from "../../styling/system";

export default function DefaultInput({
  value,
  onValueChange,
  placeholder,
  isPassword = false,
  onFocus,
  onBlur,
  borderColor = APP_COLORS.LIGHT_DARK_COLOR.color,
  autoCompleteType = "off",
  hasError = false,
  editable = true,
  isInModalBottom = false,
  keyboardType = "default",
  multiLine = false,
  numberOfLines = 3,
  isForPricing = false,
  autoFocus = false,
  withPrefix = false,
  prefix = "",
  maxLength = 250,
  topPrefix = 19,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: hasError ? APP_COLORS.RED_COLOR.color : borderColor,
            borderWidth: hasError ? 1 : 0.9,
            color: editable ? "#000" : "gray",
          },
          { paddingRight: isPassword ? 40 : 15 },
          { height: multiLine ? 90 : 45 },
        //   { textAlign: multiLine ? "left" : "center" },
        ]}
        onChangeText={onValueChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#4D4D4D"
        secureTextEntry={isPassword && !showPassword}
        onFocus={onFocus || null}
        onBlur={onBlur || null}
        editable={editable}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        autoFocus={autoFocus}
        maxLength={maxLength}
        returnKeyType="done"
      />
      {isPassword && !isInModalBottom ? (
        <TouchableOpacity
          style={styles.iconPassword}
          onPress={onShowHidePassword}
        >
          <View>
            {showPassword ? (
              <Feather name="eye-off" size={20} color="#C5C5C5" />
            ) : (
              <Feather
                name="eye"
                size={20}
                color={APP_COLORS.YELLOW_COLOR.color}
              />
            )}
          </View>
        </TouchableOpacity>
      ) : null}
      {isPassword && isInModalBottom ? (
        <View style={styles.iconPassword}>
        </View>
      ) : null}
      {withPrefix && (
        <View
          style={[
            styles.prefix,
            {
              top: topPrefix,
            },
          ]}
        >
          {prefix}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    // borderWidth: 0.9,
    padding: 10,
    borderRadius: 5,
    backgroundColor: APP_COLORS.LIGHT_COLOR.color,
  },
  iconPassword: {
    position: "absolute",
    right: 25,
    top: 22,
  },
  prefix: {
    position: "absolute",
    left: 15,
  },
});
