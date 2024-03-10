import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import Button from "../components/Button";
import GameContext from "../context/GameContext";
import { COLORS } from "../constants/colors";

export default function GameComplete() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { correctAnswerCount } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.emoji}>✅</Text>
        <Text style={styles.title}>Session Complete!</Text>
        <View style={styles.resultsContainer}>
          <Text style={styles.subtitle}>You got</Text>
          <Text
            style={styles.numberText}
          >{`${correctAnswerCount} out of 10`}</Text>
          <Text style={styles.subtitle}>answers correct!</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Return Home"
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
    flex: 1,
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 60,
  },
  resultsContainer: {
    marginTop: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 84,
  },
  title: {
    color: COLORS.text,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24,
  },
  numberText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 36,
    letterSpacing: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.text,
    fontSize: 28,
    textAlign: "center",
    lineHeight: 36,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
