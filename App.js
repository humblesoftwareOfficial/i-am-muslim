/**
    * @description      : 
    * @author           : lamine.thiam
    * @group            : 
    * @created          : 03/04/2023 - 16:09:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/04/2023
    * - Author          : lamine.thiam
    * - Modification    : 
**/
import * as NavigationBar from "expo-navigation-bar";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Image, Platform } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import { useState } from "react";
import { loadAsync, useFonts } from "expo-font";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useEffect } from "react";
import { Asset } from "expo-asset";
import WaitingLoadingPage from "./src/screens/shared/WaitingLoadingPage";
import Navigation from "./src/navigation";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { APP_COLORS } from "./src/styling/system";
import UserProvider from "./src/contexts/User/UserProvider";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#72065b",
    accent: "#f1c40f",
    background: "red",
  },
  dark: true,
};

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => loadAsync(font));
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    avenirBold: require("./src/assets/fonts/AvenirNextLTPro-Bold.otf"),
    avenir: require("./src/assets/fonts/AvenirNextLTPro-Regular.otf"),
    alexBrush: require("./src/assets/fonts/AlexBrush-Regular.ttf"),
    grapeNuts: require("./src/assets/fonts/GrapeNuts-Regular.ttf"),
    belleAurore: require("./src/assets/fonts/LaBelleAurore-Regular.ttf"),
    sacramento: require("./src/assets/fonts/Sacramento-Regular.ttf"),
    yesteryear: require("./src/assets/fonts/Yesteryear-Regular.ttf"),
    snigletRegular: require("./src/assets/fonts/Sniglet-Regular.ttf"),
    snigletBold: require("./src/assets/fonts/Sniglet-ExtraBold.ttf"),
    pacificoRegular: require("./src/assets/fonts/Pacifico-Regular.ttf"),
    righteousRegular: require("./src/assets/fonts/Righteous-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await _loadAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      // require("./src/assets/images/ter.png"),
      // require("./src/assets/images/cbancaire.png"),
      // require("./src/assets/images/freemoney.png"),
      // require("./src/assets/images/orangemoney.webp"),
      // require("./src/assets/images/wave.png"),
    ]);

    const fontAssets = cacheFonts([
      FontAwesome.font,
      AntDesign.font,
      Entypo.font,
      EvilIcons.font,
      Feather.font,
      Fontisto.font,
      Ionicons.font,
      MaterialCommunityIcons.font,
      MaterialIcons.font,
      SimpleLineIcons.font,
      FontAwesome5.font,
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  // if (Platform.OS === "android") {
  //   NavigationBar.setBackgroundColorAsync(APP_COLORS.PRIMARY_DARK_COLOR.color);
  // }

  return (
    <PaperProvider theme={theme}>
      <RootSiblingParent>
        <UserProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            {fontsLoaded && appIsReady ? <Navigation /> : <WaitingLoadingPage />}
          </SafeAreaProvider>
        </UserProvider>
      </RootSiblingParent>
    </PaperProvider>
  );
}
