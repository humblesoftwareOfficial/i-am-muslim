import { View, Text } from "react-native";
import React from "react";
import { HEADER_HOME_STYLE } from "../../styling/headers";

export default function TimePrayer() {
  return (
    <View
      style={[
        HEADER_HOME_STYLE.side,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1 }}></View>
      <View
        style={[
          HEADER_HOME_STYLE.side,
          {
            flexDirection: "row",
          },
        ]}
      >
        {/* <DecoAnimation/> */}
        <View style={HEADER_HOME_STYLE.hour_prayer}>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text_label}
              adjustsFontSizeToFit
            >
              Chorouq
            </Text>
          </View>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text}
              adjustsFontSizeToFit
            >
              13:55
            </Text>
          </View>
        </View>
        <View style={HEADER_HOME_STYLE.hour_prayer}>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text_label}
              adjustsFontSizeToFit
            >
              Dohr
            </Text>
          </View>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text}
              adjustsFontSizeToFit
            >
              13:55
            </Text>
          </View>
        </View>
        <View style={HEADER_HOME_STYLE.hour_prayer}>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text_label}
              adjustsFontSizeToFit
            >
              Asr
            </Text>
          </View>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text}
              adjustsFontSizeToFit
            >
              13:55
            </Text>
          </View>
        </View>
        <View style={HEADER_HOME_STYLE.hour_prayer}>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text_label}
              adjustsFontSizeToFit
            >
              Magrheb
            </Text>
          </View>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text}
              adjustsFontSizeToFit
            >
              13:55
            </Text>
          </View>
        </View>
        <View style={HEADER_HOME_STYLE.hour_prayer}>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text_label}
              adjustsFontSizeToFit
            >
              Icha
            </Text>
          </View>
          <View style={HEADER_HOME_STYLE.item_prayer}>
            <Text
              style={HEADER_HOME_STYLE.hour_prayer_text}
              adjustsFontSizeToFit
            >
              13:55
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
