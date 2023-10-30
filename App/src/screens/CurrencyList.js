import React from "react";
import {
  StatusBar,
  FlatList,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Importa useSafeAreaInsets
import { Entypo } from "@expo/vector-icons";

import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";

import { globalStyles } from "../../globalAndroidStyles";

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
});

export default ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets(); // Utiliza useSafeAreaInsets para obtener los valores del área segura

  const params = route.params || {};
  const { activeCurrency } = params;

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
          const selected = activeCurrency === item;

          return (
            <RowItem
              title={item}
              onPress={() => {
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </SafeAreaView>
  );
};
