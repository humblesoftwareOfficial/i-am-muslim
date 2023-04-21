import React from "react";
import { Platform, SafeAreaView, View } from "react-native";

import { SAFE_AREA_VIEW } from "../../styling/screen";
import { APP_STYLE, STATUSBAR_HEIGHT } from "../../styling/system";
import { CustomAppBar } from "./CustomAppBar";

export default function WaitingLoadingPage({}) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <CustomAppBar
        barStyle="light-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="transparent"
      />
      <View style={APP_STYLE.container_waiting_load_finish}>
        
      </View>
    </SafeAreaView>
  );
}
