import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";

import { globalStyles } from "../../globalAndroidStyles.js";

import colors from "../constants/colors.js";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.line,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export default () => {
  return (
    <SafeAreaView style={globalStyles.androidMargin}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
