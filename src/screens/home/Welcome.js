import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { SAFE_AREA_VIEW, STATUSBAR_HEIGHT } from "../../styling/screen";
import { CustomAppBar } from "../shared/CustomAppBar";
import HeaderHome from "../../components/headers/HeaderHome";
import { writeIslamicDate } from "../../utils/date";
import { APP_STYLE } from "../../styling/system";
import TimePrayer from "../../components/Prayer/TimePrayer";

export default function Profile({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <CustomAppBar
        barStyle="dark-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="transparent"
      />
      <View style={APP_STYLE.top_title}>
        <Text style={APP_STYLE.title}>{`${writeIslamicDate()}`}</Text>
        <Text style={APP_STYLE.subtitle}>{`As-salāmu ʿAlaykum`}</Text>
      </View>
      <HeaderHome />
      <View>
        <TimePrayer />
      </View>
    </SafeAreaView>
  );
}
