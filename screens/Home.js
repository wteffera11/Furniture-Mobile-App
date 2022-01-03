import React from "react";
import { View, StyleSheet } from "react-native";
import Topbar from "../components/Topbar";
import FurnitureItems from "../components/FurnitureItems";
import FurnitureCategories from "../components/FurnitureCategories";

export default function Home() {
  const items = [];
  return (
    <View style={styles.container}>
      <Topbar />
      <FurnitureCategories />
      <FurnitureItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
});
