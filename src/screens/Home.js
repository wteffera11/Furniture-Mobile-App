import React, { useContext, useReducer } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Topbar from "../components/Topbar";
import FurnitureItems from "../components/FurnitureItems";
import FurnitureCategories from "../components/FurnitureCategories";
import { CartContext } from "../contexts/CartContext";
import { Icon, withBadge } from "react-native-elements";

export default function Home({ navigation }) {
  const [state, dispatch] = useContext(CartContext);
  const items = [];
  const BadgedIcon = withBadge(state.size)(Icon);
  return (
    <View style={styles.container}>
      <Topbar
        headCenter={HomeHeadComp}
        navigation={navigation}
        headRight={
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <BadgedIcon type="antdesign" name="shoppingcart" size={25} />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FurnitureCategories />
        <FurnitureItems navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const HomeHeadComp = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.subTitle}>Make home</Text>
      <Text style={styles.title}>BEAUTIFULL</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
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
