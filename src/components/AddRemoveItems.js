import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AddRemoveItems({
  addToCart,
  quantity,
  removeFromCart,
}) {
  return (
    <View style={styles.numOfProductContainer}>
      <TouchableOpacity style={styles.addProduct} onPress={addToCart}>
        <Text style={styles.productButtonText}>+</Text>
      </TouchableOpacity>
      <Text style={styles.numOfProduct}>{quantity}</Text>
      <TouchableOpacity style={styles.addProduct} onPress={removeFromCart}>
        <Text style={styles.productButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  numOfProductContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 30,
    color: "#303030",
    fontWeight: "bold",
  },
  addProduct: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#909090",
    fontSize: 30,

    alignItems: "center",
    //justifyContent: "center",
  },
  productButtonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    flexDirection: "row",
    //alignItems: "center",
    //justifyContent: "center",
    marginHorizontal: "auto",
    marginTop: -3,
  },
  numOfProduct: {
    marginHorizontal: 15,
  },
});
