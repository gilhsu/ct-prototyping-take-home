import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Login from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import SessionIntroScreen from "../screens/SessionIntroScreen";
import SessionInProgressScreen from "../screens/SessionInProgressScreen";
import SessionAnswerScreen from "../screens/SessionAnswerScreen";
import SessionCompleteScreen from "../screens/SessionCompleteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { COLORS } from "../constants/colors";

const Stack = createStackNavigator();

const getHeaderStyles = ({ navigation, route }) => {
  const { name } = route;

  let displayName = "numelo";

  if (name === "Settings" || name === "About") {
    displayName = name.toLowerCase();
  }

  const baseHeaderOptions = {
    headerShown: true,
    title: displayName,
    headerLeft: null,
    headerTintColor: COLORS.primary,
    headerTitleStyle: {
      fontSize: 24,
      fontWeight: "bold",
    },
  };

  const headerNavOptions = {
    headerLeft: () => (
      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={{ marginLeft: 16 }}
      >
        <Ionicons name="arrow-back-outline" size={24} color={COLORS.icon} />
      </Pressable>
    ),
    headerRight: () => (
      <Pressable
        onPress={() => navigation.navigate("Settings")}
        style={{ marginRight: 16 }}
      >
        <Ionicons name="settings-outline" size={24} color={COLORS.icon} />
      </Pressable>
    ),
  };

  if (name === "Login") {
    return {
      headerShown: false,
    };
  } else if (name === "Home") {
    return {
      ...baseHeaderOptions,
      ...headerNavOptions,
    };
  }

  return baseHeaderOptions;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          cardStyle: {
            flex: 1,
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen name="Login" options={getHeaderStyles}>
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={getHeaderStyles}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={getHeaderStyles}
        />
        <Stack.Screen
          name="SessionIntro"
          component={SessionIntroScreen}
          options={getHeaderStyles}
        />
        <Stack.Screen
          name="SessionInProgress"
          component={SessionInProgressScreen}
          options={getHeaderStyles}
        />
        <Stack.Screen
          name="SessionAnswer"
          component={SessionAnswerScreen}
          options={getHeaderStyles}
        />
        <Stack.Screen
          name="SessionComplete"
          component={SessionCompleteScreen}
          options={getHeaderStyles}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={getHeaderStyles}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
