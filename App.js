import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ paddingTop: Platform.OS === "andorid" && 30 }}>
        <Text>Heloo! Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
