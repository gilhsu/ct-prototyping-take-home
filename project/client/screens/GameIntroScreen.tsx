import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import GameContext from "../context/GameContext";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

const MAX_NUMBER_RANGE = 99;

export default function GameIntroScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {
    gameCount,
    setGameCount,
    setSessionNumbers,
    setNumberIndex,
    setCorrectAnswerCount,
  } = useContext(GameContext);

  const getSessionNumbers = () => {
    const randomNumbers = Array.from(Array(10)).reduce((acc, elm, i) => {
      const randomNumber = Math.floor(Math.random() * MAX_NUMBER_RANGE) + 1;
      acc.push(randomNumber);
      return acc;
    }, []);

    setSessionNumbers(randomNumbers);
  };

  const handleStartSessionPress = () => {
    setNumberIndex(0);
    setCorrectAnswerCount(0);
    setGameCount(gameCount + 1);
    getSessionNumbers();
    navigation.navigate("GameInProgress");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          You’ll now see a series of {"\n"}
          <Text style={styles.boldPrimaryText}>10 random numbers</Text>.
        </Text>
        <Text style={styles.title}>
          After each number, you'll be asked if the next sequential number is
          <Text style={styles.boldPrimaryText}> Even</Text> or{" "}
          <Text style={styles.boldPrimaryText}>Odd</Text>.
        </Text>
        <View style={styles.exampleContainer}>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.exampleHeaderText}>Example</Text>
          </View>
          <Text style={styles.exampleText}>
            If shown the number <Text style={styles.boldPrimaryText}>10</Text>,{" "}
            {"\n"}the next sequential number is{" "}
            <Text style={styles.boldPrimaryText}>11</Text> {"\n"}
            Therefore the answer is{" "}
            <Text style={styles.boldPrimaryText}>Odd</Text>.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button type="primary" text="Start" onPress={handleStartSessionPress} />
        <Button
          type="secondary"
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
    paddingTop: 64,
    paddingBottom: 32,
    marginLeft: 24,
    marginRight: 24,
  },
  titleContainer: {
    marginTop: 24,
  },
  title: {
    color: COLORS.text,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 48,
    letterSpacing: 1,
    lineHeight: 36,
  },
  exampleContainer: {
    marginTop: 48,
    backgroundColor: COLORS.secondary,
    padding: 16,
    borderLeftColor: COLORS.primary,
    borderLeftWidth: 3,
  },
  exampleHeaderText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  exampleText: {
    color: COLORS.text,
    fontSize: 16,
    textAlign: "left",
    letterSpacing: 1,
    lineHeight: 24,
  },
  countText: {
    color: COLORS.primary,
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
    letterSpacing: 1.5,
  },
  boldPrimaryText: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  subtitle: {
    color: COLORS.text,
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
