import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  type: "primary" | "secondary" | "disabled";
  text: string;
  onPress: () => void;
}

const BACKGROUND_COLORS = {
  primary: "#3A00E5",
  secondary: "#E2DCF3",
  disabled: "lightgray",
};

const TEXT_COLORS = {
  primary: "white",
  secondary: "#3A00E5",
  disabled: "gray",
};

const Button = ({ type, text, onPress }: Props) => {
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: BACKGROUND_COLORS[type] }}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttonText, color: TEXT_COLORS[type] }}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    textAlign: "center",
    margin: "auto",
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
