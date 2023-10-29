import React from "react";
import { StatusBar, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";

export default ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
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
