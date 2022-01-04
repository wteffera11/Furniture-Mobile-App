import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { CartContext } from "../contexts/CartContext";
import { Badge, Icon, withBadge } from "react-native-elements";
import { Header } from "react-native-elements/dist/header/Header";

export default function Topbar({
  headCenter,
  navigation,
  headLeft,
  headRight,
}) {
  return (
    <View style={styles.container}>
      {/* <View>
        <Ionicons name="search" size={25} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>Make home</Text>
        <Text style={styles.title}>BEAUTIFULL</Text>
      </View>
      <View>
        <AntDesign name="shoppingcart" size={25} />
      </View> */}
      <Header
        leftComponent={
          headLeft ? headLeft : { icon: "search", color: "#000", size: 25 }
        }
        centerComponent={headCenter}
        rightComponent={headRight ? headRight : ""}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
