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

interface AnswerButtonsProps {
  navigation: NavigationProp<ParamListBase>;
  isEven: boolean;
  currentNumber: number;
}

const AnswerButtons = ({
  navigation,
  isEven,
  currentNumber,
}: AnswerButtonsProps) => {
  const { correctAnswerCount, setCorrectAnswerCount } = useContext(GameContext);
  const handlePress = ({ isEvenButton }: { isEvenButton: boolean }) => {
    const isNextEven = !isEven;
    const isCorrect =
      (isNextEven && isEvenButton) || (!isNextEven && !isEvenButton);

    if (isCorrect) {
      setCorrectAnswerCount(correctAnswerCount + 1);
    }

    navigation.navigate("GameAnswer", {
      isCorrect,
      nextNumber: currentNumber + 1,
    });
  };

  return (
    <>
      <Button
        type="secondary"
        text="Even"
        onPress={() => handlePress({ isEvenButton: true })}
      />
      <Button
        type="secondary"
        text="Odd"
        onPress={() => handlePress({ isEvenButton: false })}
      />
    </>
  );
};

export default function GameInProgressScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { numberIndex, sessionNumbers } = useContext(GameContext);
  const currentNumber = sessionNumbers[numberIndex];
  const isEven = currentNumber % 2 == 0 ? true : false;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            Is the next number after this Even or Odd?
          </Text>
        </View>
        <Text style={styles.numberText}>{currentNumber}</Text>
      </View>
      <View style={styles.hintContainer}>
        <Text style={styles.hintText}>{`${numberIndex + 1} / 10`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AnswerButtons
          isEven={isEven}
          navigation={navigation}
          currentNumber={currentNumber}
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
    marginTop: 120,
  },
  numberText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 160,
    letterSpacing: 1,
  },
  questionText: {
    color: COLORS.text,
    fontSize: 24,
    textAlign: "center",
  },
  questionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  hintContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  hintText: {
    color: "#4D4D4D",
    fontSize: 14,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
