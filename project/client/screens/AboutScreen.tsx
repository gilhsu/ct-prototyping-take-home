import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import { COLORS } from "../constants/colors";
import Button from "../components/Button";

export default function AboutScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>
          Welcome To <Text style={styles.primaryBoldText}>Numelo</Text>, the
          world’s first digital therapeutic for Film Flam Syndrome.
        </Text>
        <Text style={styles.subtitle}>
          We want you to know that although FFS affects millions of people, it
          is completely treatable.
        </Text>
        <Text style={styles.subtitle}>
          Research suggests presenting someone affected by FFS, a series of 10
          random numbers and asking them whether the following number is even or
          odd, can be helpful.
        </Text>
        <Text style={styles.subtitle}>
          We’re here to help you every step of the way.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Back"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 32,
    marginLeft: 24,
    marginRight: 24,
  },
  titleContainer: {
    width: "100%",
    marginTop: 48,
    paddingLeft: 12,
    paddingRight: 12,
  },
  subtitle: {
    color: COLORS.text,
    fontSize: 22,
    letterSpacing: 1,
    lineHeight: 36,
    marginBottom: 32,
  },
  primaryBoldText: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
