import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useNavigation,
  useRoute,
  ParamListBase,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";

import SessionContext from "../context/SessionContext";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

interface SessionAnswerRouteProps extends RouteProp<ParamListBase> {
  params: {
    isCorrect: boolean;
    nextNumber: number;
  };
}

export default function SessionAnswer() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route: SessionAnswerRouteProps = useRoute();
  const { numberIndex, setNumberIndex } = useContext(SessionContext);
  const { isCorrect, nextNumber } = route.params;

  const isNextEven = nextNumber % 2 === 0 ? true : false;
  const answerText = isCorrect ? "Great Work 🎉" : "Almost... 😬";
  const evenOddText = isNextEven ? "Even" : "Odd";
  const answerSubText = isCorrect
    ? `Is an ${evenOddText} number!`
    : `Is actually an ${evenOddText} number`;

  const handleStartSessionPress = () => {
    if (numberIndex < 9) {
      setNumberIndex(numberIndex + 1);
      navigation.navigate("SessionInProgress");
    } else {
      navigation.navigate("SessionComplete");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{answerText}</Text>
        <Text style={styles.numberText}>{nextNumber}</Text>
        <Text style={styles.subtitle}>{answerSubText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Continue"
          onPress={handleStartSessionPress}
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
  title: {
    color: COLORS.text,
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  numberText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 160,
    letterSpacing: 1,
    marginTop: 24,
  },
  subtitle: {
    color: COLORS.text,
    fontSize: 28,
    textAlign: "center",
    marginTop: 16,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
