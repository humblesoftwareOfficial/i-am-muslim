import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { APP_COLORS } from "../../styling/system";
import { TOP_WEATHER_STYLE } from "../../styling/weather";
import { weatherKelvinToCelcius } from "../../utils/system";

export default function Weather({ data }) {
  console.log({ data })
  return (
    <View style={TOP_WEATHER_STYLE.container}>
      <View style={TOP_WEATHER_STYLE.container_side}>
        <View style={TOP_WEATHER_STYLE.wind_container}>
          <Feather
            name="wind"
            size={28}
            color={APP_COLORS.PRIMARY_DARK_COLOR.color}
          />
          <Text style={TOP_WEATHER_STYLE.wind_value}>
            {`${data?.wind?.speed || ""} m/s`}
          </Text>
        </View>
      </View>
      <View style={TOP_WEATHER_STYLE.container_side}>
        <Text style={TOP_WEATHER_STYLE.location_name}>
          {`${data?.name || ""}`}
        </Text>
      </View>
      <View
        style={[
          TOP_WEATHER_STYLE.container_side,
          { flexDirection: "row-reverse",justifyContent: "left" },
        ]}
      >
        <View style={TOP_WEATHER_STYLE.weather_container}>
          {data?.main ? (
            <>
              <FontAwesome5
                name="temperature-high"
                size={24}
                color={APP_COLORS.PRIMARY_DARK_COLOR.color}
              />
              <Text style={TOP_WEATHER_STYLE.weather_value}>
                {`${weatherKelvinToCelcius(data?.main.temp)}`}
              </Text>
            </>
          ) : (
            <Text style={TOP_WEATHER_STYLE.weather_value}>...</Text>
          )}
        </View>
      </View>
    </View>
  );
}
