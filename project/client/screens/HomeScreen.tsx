import React, { useContext } from "react";
import { Alert, Platform, StyleSheet, Text, View } from "react-native";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import SessionContext from "../context/SessionContext";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

export default function HomeScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { sessionCount, maxSessionCount } = useContext(SessionContext);

  const hasSessionRemaining = sessionCount < maxSessionCount;

  const handleStartSessionPress = () => {
    const alertMessage = "You have hit your daily treatment limit.";
    if (hasSessionRemaining) {
      navigation.navigate("SessionIntro");
    } else {
      if (Platform.OS == "web") {
        alert(alertMessage);
      } else {
        Alert.alert(alertMessage);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>Today's Summary</Text>
        <Text style={styles.subtitle}>Sessions Completed</Text>
        <Text style={styles.countText}>{sessionCount}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Complete up to</Text>
          <Text
            style={styles.primaryText}
          >{`${maxSessionCount} sessions per day`}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type={hasSessionRemaining ? "primary" : "disabled"}
          text="Start Session"
          onPress={handleStartSessionPress}
        />
        <Button
          type="secondary"
          text="About Numelo"
          onPress={() => navigation.navigate("About")}
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
    paddingTop: 84,
    paddingBottom: 32,
    marginLeft: 24,
    marginRight: 24,
  },

  title: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  countText: {
    color: COLORS.primary,
    fontSize: 120,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
    letterSpacing: 1.5,
  },
  subtitleContainer: {
    marginTop: 24,
  },
  subtitle: {
    color: COLORS.text,
    fontSize: 24,
    textAlign: "center",
  },
  primarySubtitle: {
    color: COLORS.primary,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 48,
  },
  primaryText: {
    color: COLORS.primary,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 4,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
