import React from "react";
import { Button, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function ButtonComp({ title, props }) {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#303030",
    borderRadius: 8,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 20,
    shadowRadius: 0,
    shadowColor: "rgba(48, 48, 48, 0.25)",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
