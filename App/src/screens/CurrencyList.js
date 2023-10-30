import React from "react";
import { StatusBar, FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";

import { globalStyles } from "../../globalAndroidStyles";

export default ({ navigation }) => {
  return (
    <SafeAreaView
      style={StyleSheet.compose(
        { flex: 1, backgroundColor: colors.white },
        StyleSheet.compose(globalStyles.androidMargin, { flex: 1 })
      )}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return (
            <RowItem
              title={item}
              onPress={() => {
                navigation.pop();
              }}
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </SafeAreaView>
  );
};
