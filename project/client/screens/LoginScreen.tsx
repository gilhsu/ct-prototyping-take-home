import React from "react";
import { Alert, Platform, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import Button from "../components/Button";
import { COLORS } from "../constants/colors";

export default function Login() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const noFeatureAlert = () => {
    const description = "Sorry, this feature is not available.";
    console.log("time to build prototype!");
    if (Platform.OS == "web") {
      alert(description);
    } else {
      Alert.alert(description);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>numelo</Text>
        <View style={styles.titleLine} />
        <Text style={styles.subtitle}>Film Flam Syndrome Therapy</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Log In"
          onPress={() => navigation.navigate("Home")}
        />
        <Button type="secondary" text="Sign Up" onPress={noFeatureAlert} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 32,
  },
  title: {
    color: COLORS.primary,
    fontSize: 72,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 120,
    letterSpacing: 1.5,
  },
  subtitle: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    letterSpacing: 1.5,
  },
  titleLine: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 8,
    maxWidth: "80%",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 24,
  },
});
