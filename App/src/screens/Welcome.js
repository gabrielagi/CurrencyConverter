import React from "react";
import { ImageBackground, View, Text, ActivityIndicator } from "react-native";
import colors from "../constants/colors";
import { loadFonts } from "../fonts";

loadFonts();

const Welcome = () => {
  return (
    <ImageBackground
      source={require("../assets/currencybakground.png")}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Raleway-Regular",
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
          fontFamily: "Raleway-Bold",
        }}
      >
        CurrencyChameleon
      </Text>
      <ActivityIndicator color={colors.white} size="large" />
    </ImageBackground>
  );
};

export default Welcome;
