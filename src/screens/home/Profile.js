import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { SAFE_AREA_VIEW, STATUSBAR_HEIGHT } from "../../styling/screen";
import { CustomAppBar } from "../shared/CustomAppBar";

export default function Profile({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <CustomAppBar
        barStyle="light-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="transparent"
      />
      <View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
}
