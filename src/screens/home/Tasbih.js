import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { CustomAppBar } from "../shared/CustomAppBar";
import { SAFE_AREA_VIEW, STATUSBAR_HEIGHT } from "../../styling/screen";
import TasbihView from "../../components/tasbih/TasbihView";

export default function Tasbih({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <CustomAppBar
        barStyle="dark-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="transparent"
      />
      <TasbihView/>
    </SafeAreaView>
  );
}
