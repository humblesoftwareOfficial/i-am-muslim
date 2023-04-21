import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { APP_COLORS } from "../../styling/system";
import { VIEWS_NAME } from "../../utils/routing";
import Profile from "./Profile";
import Welcome from "./Welcome";
import Tasbih from "./Tasbih";

const Tabs = AnimatedTabBarNavigator();

export default ({ navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName={VIEWS_NAME.Welcome}
      tabBarOptions={{
        activeBackgroundColor: APP_COLORS.PRIMARY_DARK_COLOR.color,
        activeTintColor: APP_COLORS.LIGHT_COLOR.color, //APP_COLORS.BLACK_LIGHT_COLOR.color,
        inactiveTintColor: APP_COLORS.PRIMARY_DARK_COLOR.color,
        showLabel: true,
        tabStyle: {
          backgroundColor: APP_COLORS.LIGHT_COLOR.color,
          // borderColor: "#121212", //"rgba(254, 195, 0, 0.2)"
          // // borderTopWidth: 1,
          // // elevation: 1,
        },
        style: {
          position: "absolute",
        },
        tabBarHideOnKeyboard: true,
      }}
      appearance={{
        topPadding: 7,
        horizontalPadding: 10,
        whenActiveShow: "label-only",
        whenInactiveShow: "label-only",
      }}
    >
      <Tabs.Screen
        name={VIEWS_NAME.Welcome}
        component={Welcome}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="dots-circle"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_DARK_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Quran}
        component={Profile}
        options={{
          tabBarLabel: "Quran",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="dots-circle"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_DARK_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Profil}
        component={Tasbih}
        options={{
          tabBarLabel: "Tasbih",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="dots-circle"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_DARK_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Zikr}
        component={Profile}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="dots-circle"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_DARK_COLOR.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
