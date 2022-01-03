import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from "react-native-vector-icons";

export default function Topbar() {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="search" size={25} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>Make home</Text>
        <Text style={styles.title}>BEAUTIFULL</Text>
      </View>
      <View>
        <AntDesign name="shoppingcart" size={25} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 18,
    color: "#909090",
  },
  title: { fontSize: 20, color: "#303030", fontWeight: "bold" },
});
