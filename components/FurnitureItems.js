import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Fontiso from "react-native-vector-icons/Fontisto";

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
    name: "Black Simple Lamp",
    price: "$12.22",
  },
  {
    id: 3,
    image:
      "https://www.thespruce.com/thmb/7jL_AI-jzYwPWkTXDBTeSNiynuA=/700x700/smart/filters:no_upscale()/Lillis5PieceDiningSet-6895950f09f64d7fb1ec46222a764a07.jpg",
    name: "Black Simple Lamp",
    price: "$12.22",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Black Simple Lamp",
    price: "$12.22",
  },
  {
    id: 5,
    image:
      "https://www.thespruce.com/thmb/7jL_AI-jzYwPWkTXDBTeSNiynuA=/700x700/smart/filters:no_upscale()/Lillis5PieceDiningSet-6895950f09f64d7fb1ec46222a764a07.jpg",
    name: "Black Simple Lamp",
    price: "$12.22",
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
export default function FurnitureItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity activeOpacity={1} style={styles.imageWrapper}>
        {items.map((item, index) => (
          <View
            style={[
              styles.imageCard,
              { paddingLeft: index % 2 !== 0 ? 10 : 0 },
            ]}
            key={index}
          >
            <ImageContainer image={item.image} />
            <ImageInfoContainer name={item.name} price={item.price} />
          </View>
        ))}
      </TouchableOpacity>
    </ScrollView>
  );
}

const ImageContainer = ({ image }) => {
  return (
    <>
      <Image
        style={styles.images}
        source={{
          uri: image,
        }}
      />
      <TouchableOpacity style={styles.bagIcon}>
        <Fontiso name="shopping-bag" size={20} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const ImageInfoContainer = ({ name, price }) => {
  return (
    <View>
      <Text style={styles.furnitureName}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  imageCard: {
    paddingVertical: 10,
    backgroundColor: "white",
    width: "50%",
  },
  images: {
    resizeMode: "cover",
    width: "100%",
    height: 300,
  },
  bagIcon: {
    position: "absolute",
    bottom: 50,
    right: 10,
    width: 40,
    height: 40,
    backgroundColor: "#606060",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  furnitureName: {
    color: "#606060",
  },
  price: {
    color: "#303030",
    fontWeight: "bold",
  },
});
