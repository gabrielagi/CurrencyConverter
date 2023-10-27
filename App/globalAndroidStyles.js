import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  androidMargin: {
    marginTop: Platform.OS === "android" ? 32 : 0,
  },
});
