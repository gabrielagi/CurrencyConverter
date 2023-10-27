import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Linking } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { globalStyles } from "../../globalAndroidStyles.js";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#A0E548",
    flex: 1,
  },
});

const openLink = (url) =>
  Linking.openURL(url).catch(() =>
    Alert.alert("Sorry, something went wrong.", "Please try again later.")
  );

export default () => {
  return (
    <SafeAreaView style={[globalStyles.androidMargin, styles.container]}>
      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          title="React Native Basics"
          onPress={() =>
            openLink(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          title="React Native by Example"
          onPress={() => openLink("https://reactnativebyexample.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
