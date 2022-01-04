import React, { useReducer } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import Navigation from "./components/Navigation/Navigation";
import { CartContext, initialState } from "./contexts/CartContext";
import cartReducer from "./contexts/reducer";

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={[state, dispatch]}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </CartContext.Provider>
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
