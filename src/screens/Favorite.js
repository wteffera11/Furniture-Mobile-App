import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  StatusBar,
} from "react-native";
import { color } from "react-native-reanimated";
import Topbar from "../components/Topbar";
import Fontiso from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { CartContext } from "../contexts/CartContext";
import { addToCart, removeFromCart } from "../contexts/actions";
import ButtonComp from "../components/Button";
import { Icon, withBadge } from "react-native-elements";

const items = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Black Simple Lamp",
    price: "$12.22",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoUy2DUgDrWRNUwY1jfE3Q9IKIx54bQAzb-ormQjcqdFWPJcQuakoDO3uq2cHDXep8y0&usqp=CAU",
    name: "Outdoor couch",
    price: "$19.22",
  },
  {
    id: 3,
    image:
      "https://www.thespruce.com/thmb/7jL_AI-jzYwPWkTXDBTeSNiynuA=/700x700/smart/filters:no_upscale()/Lillis5PieceDiningSet-6895950f09f64d7fb1ec46222a764a07.jpg",
    name: "Wooden Table",
    price: "$22.22",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Black Simple Lamp 2",
    price: "$8.22",
  },
  {
    id: 5,
    image:
      "https://www.thespruce.com/thmb/7jL_AI-jzYwPWkTXDBTeSNiynuA=/700x700/smart/filters:no_upscale()/Lillis5PieceDiningSet-6895950f09f64d7fb1ec46222a764a07.jpg",
    name: "Black Simple Lamp",
    price: "$10.22",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Black Simple Lamp",
    price: "$12.22",
  },
  {
    id: 7,
    image:
      "https://www.thespruce.com/thmb/7jL_AI-jzYwPWkTXDBTeSNiynuA=/700x700/smart/filters:no_upscale()/Lillis5PieceDiningSet-6895950f09f64d7fb1ec46222a764a07.jpg",
    name: "Black Simple Lamp",
    price: "$12.22",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Black Simple Lamp",
    price: "$12.22",
  },
];
export default function Favorite({ navigation }) {
  const [state, dispatch] = useContext(CartContext);
  const BadgedIcon = withBadge(state.size)(Icon);
  return (
    <View style={styles.container}>
      <Topbar
        headCenter={FavoriteHeadComp}
        navigation={navigation}
        headRight={
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <BadgedIcon type="antdesign" name="shoppingcart" size={25} />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <FavoriteItem
            item={item}
            addToCart={() => dispatch(addToCart(item))}
            removeFromCart={() => dispatch(removeFromCart(item.id))}
            key={index}
          />
        ))}
        <ButtonComp title="Add all to My Cart" />
      </ScrollView>
    </View>
  );
}

const FavoriteItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <View style={styles.favoriteItemContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.itemInfoContaienr}>
          <Text style={styles.furnitureName}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={removeFromCart}>
          <Ionicons name="close-circle-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={addToCart}>
          <Fontiso name="shopping-bag" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const FavoriteHeadComp = () => {
  return (
    <View>
      <Text style={styles.title}>Favorite</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#303030",
  },
  favoriteItemContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  image: {
    resizeMode: "cover",
    width: 100,
    height: 100,
  },
  itemInfoContaienr: {
    marginLeft: 10,
  },
  furnitureName: {
    color: "#606060",
  },
  price: {
    color: "#303030",
    fontWeight: "bold",
  },
  iconContainer: {
    justifyContent: "space-between",
  },
});
