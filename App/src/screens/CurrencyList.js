import React, { useContext } from "react";
import {
  StatusBar,
  FlatList,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Importa useSafeAreaInsets
import { Entypo } from "@expo/vector-icons";

import { ConversionContext } from "../util/ConversionContext";

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
  const insets = useSafeAreaInsets();

  const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } =
    useContext(ConversionContext);

  const params = route.params || {};
  const { isBaseCurrency } = params;

  return (
    <SafeAreaView
      style={[
        { flex: 1, backgroundColor: colors.white },
        globalStyles.androidMargin,
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;
          if (params.isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!params.isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }
          return (
            <RowItem
              title={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
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
