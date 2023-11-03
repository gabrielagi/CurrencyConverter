import React, { useCallback, useEffect } from "react";
import { ImageBackground, View, Text, ActivityIndicator } from "react-native";
import colors from "../constants/colors";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

const Welcome = () => {
  // const [fontsLoaded] = useFonts({
  //   RalewayBold: require("../../assets/fonts/Raleway-Bold.ttf"),
  //   RalewayMedium: require("../../assets/fonts/Raleway-Medium.ttf"),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // if (!fontsLoaded) {
  //   return undefined;
  // } else {
  //   SplashScreen.hideAsync();
  // }

  return (
    <ImageBackground
      source={require("../assets/currencybakground.png")}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Text
        style={{
          fontFamily: "RalewayMedium",
          fontSize: 22,
          color: colors.white,
        }}
      >
        Welcome to
      </Text>
      <Text
        style={{
          color: colors.white,
          fontSize: 34,
          marginTop: 5,
          marginBottom: 30,
          fontFamily: "RalewayBold",
        }}
      >
        CurrencyChameleon
      </Text> */}
      <ActivityIndicator color={colors.white} size={30} />
    </ImageBackground>
  );
};

export default Welcome;
