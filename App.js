import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Home from "./screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./components/Navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Text } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  firstTitle: {
    color: "#606060",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  secondTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
