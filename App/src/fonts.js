import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
    "Raleway-Semibold": require("../assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
  });
};
