import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import colors from "../constants/colors";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800);
  }, []);

  if (isLoading) {
    return <Welcome />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen
          name="CurrencyList"
          component={CurrencyList}
          options={({ navigation, route }) => ({
            title: route.params && route.params.title,
            headerLeft: null,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.pop()}
                style={{ paddingHorizontal: 10 }}
              >
                <Entypo name="cross" size={30} color={colors.blue} />
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
