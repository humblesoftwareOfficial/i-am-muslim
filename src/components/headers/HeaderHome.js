import { View, Text, Alert } from "react-native";
import React from "react";
import { HEADER_HOME_STYLE } from "../../styling/headers";
import * as Location from "expo-location";
import Weather from "../Weather";
import { useState } from "react";
import { GetCurrentWeather } from "../../configuration/weather_api";
import { useEffect } from "react";
import DecoAnimation from "../animations/Decoration";

export default function HeaderHome({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [dataWeather, setDataWeather] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      getWeatherData();
    }
  }, [location]);

  useEffect(() => {
    if (dataWeather) {
      setIsLoading(false);
    }
  }, [dataWeather]);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }

    const data = await Location.getCurrentPositionAsync({});
    setLocation(data);
  };

  const getWeatherData = async () => {
    try {
      if (!dataWeather) {
        const result = await GetCurrentWeather(
          location.coords.latitude,
          location.coords.longitude
        );
        setDataWeather(result.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <View style={HEADER_HOME_STYLE.container}>
      <View style={{ flex: 1}}>
        {!isLoading && <Weather data={dataWeather} />}
      </View>
      {/* <View style={HEADER_HOME_STYLE.side}>
        <DecoAnimation />
      </View> */}
    </View>
  );
}
