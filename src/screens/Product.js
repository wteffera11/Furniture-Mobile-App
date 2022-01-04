import React, { useContext, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { CartContext } from "../contexts/CartContext";
import AddRemoveItems from "../components/AddRemoveItems";
import { addToCart, getAProduct, removeFromCart } from "../contexts/actions";

export default function Product({ route, navigation }) {
  //   console.log(itemId);
  //   var item;
  var item = route.params?.item;
  console.log("Item: ", item);
  //   function getItemById(id) {
  //     dispatch({ type: "GET_ITEM_BY_ID", payload: id });
  //   }

  const [state, dispatch] = useContext(CartContext);
  // useEffect(() => {
  //   item = dispatch(getAProduct(route.params.itemId));
  //   console.log("Item: ", item);
  // }, [route.params?.itemId]);
  console.log("State: ");
  return (
    <View style={styles.container}>
      <ImageContainer image={item.image} navigation={navigation} />
      <ImageInfoContainer
        name={item.name}
        price={item.price}
        quantity={
          state.products[`item-${route.params.item.id}`] !== undefined
            ? state.products[`item-${route.params.item.id}`].quantity
            : 0
        }
        addToCart={() => dispatch(addToCart(item))}
        removeFromCart={() => dispatch(removeFromCart(item.id))}
      />
      <ReviewDescription />
    </View>
  );
}

const ImageContainer = ({ image, navigation }) => {
  return (
    <>
      <Image
        source={{
          uri: image,
        }}
        style={styles.images}
      />
      <View style={styles.bagIcon}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back"
            size={30}
            color="purple"
            onPress={() => navigation.navigate("Home")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const ImageInfoContainer = ({
  name,
  price,
  quantity,
  addToCart,
  removeFromCart,
}) => {
  return (
    <View>
      <Text style={styles.furnitureName}>{name}</Text>
      <View style={styles.priceInfoContainer}>
        <Text style={styles.price}>{price}</Text>
        <AddRemoveItems
          quantity={quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </View>
    </View>
  );
};

const ReviewDescription = ({ review, description }) => {
  return (
    <View style={styles.reviewDescriptionContainer}>
      <View style={styles.reviewContainer}>
        <AntDesign name="star" size={25} color="#F2C94C" />
        <Text style={styles.rating}>4.9</Text>
        <Text style={styles.numOfReview}>(50 Reviews)</Text>
      </View>
      <Text style={styles.description}>
        Minimal Stand is made of by natural wood. The design that is very simple
        and minimal. This is truly one of the best furnitures in any family for
        now. With 3 different colors, you can easily select the best match for
        your home.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginTop: 5,
  },
  images: {
    // alignSelf: "flex-end",
    // resizeMode: "cover",
    width: "95%",
    height: 600,
  },
  bagIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  furnitureName: {
    fontSize: 24,
    color: "#303030",
    fontWeight: "500",
  },
  priceInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
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
    marginHorizontal: 15,

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
  reviewDescriptionContainer: {
    marginTop: 10,
  },
  reviewContainer: { flexDirection: "row", alignItems: "center" },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#303030",
    marginHorizontal: 15,
  },
  numOfReview: {
    fontSize: 14,
    color: "#808080",
  },
  description: {
    fontSize: 14,
  },
});
