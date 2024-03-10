import React from "react";
import {
  Alert,
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RootNavigator from "../navigation/RootNavigator";

export default function App() {
  const placeholderAlert = () => {
    console.log("time to build prototype!");
    if (Platform.OS == "web") {
      alert("Replace this with starting assessment!");
    } else {
      Alert.alert("Replace this with starting assessment!");
    }
  };

  return <RootNavigator />;
}

const styles = StyleSheet.create({
  title: {
    color: "#333130",
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 100,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FF6607",
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    width: 120,
    textAlign: "center",
    margin: "auto",
  },
});
