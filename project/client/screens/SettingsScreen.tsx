import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import { COLORS } from "../constants/colors";
import RNPickerSelect from "react-native-picker-select";
import Button from "../components/Button";
import SessionContext from "../context/SessionContext";

export default function SettingsScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { maxSessionCount, setMaxSessionCount, resetData } =
    useContext(SessionContext);

  const confirmReset = () => {
    Alert.alert(
      "Reset Progress",
      "Are you sure you want to reset your progress?",
      [
        { text: "Cancel", onPress: () => {} },
        { text: "Reset", onPress: resetData },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.settingsContainer}>
        <RNPickerSelect
          placeholder={{}}
          onValueChange={(value) => setMaxSessionCount(value)}
          items={[
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
          ]}
        >
          <View style={styles.settingRowContainer}>
            <Text style={styles.settingTitleText}>Max Sessions Per Day</Text>
            <Text style={styles.settingValueText}>{maxSessionCount}</Text>
          </View>
        </RNPickerSelect>
        <Pressable onPress={confirmReset}>
          <View style={styles.settingRowContainer}>
            <Text style={styles.settingTitleText}>Reset Progress</Text>
            <Text style={styles.settingValueText}>RESET</Text>
          </View>
        </Pressable>
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
    paddingRight: 24,
    paddingLeft: 24,
  },
  settingsContainer: {
    flex: 1,
    width: "100%",
    margin: 24,
    backgroundColor: COLORS.background,
    borderRadius: 8,
  },
  settingRowContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  settingTitleText: {
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.text,
  },
  settingValueText: {
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.primary,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
