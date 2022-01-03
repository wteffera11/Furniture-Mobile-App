import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const categories = [
  {
    id: 1,
    image:
      "https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red",
    name: "Popular",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/photos/old-wooden-chair-picture-id1288259097?b=1&k=20&m=1288259097&s=170667a&w=0&h=J6H9f5HTSNxxlf5ffiRpYZWQakQENYWXmUhg8XaBjBk=",
    name: "Chair",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/photos/wooden-round-table-picture-id900257448?k=20&m=900257448&s=170667a&w=0&h=iRtQfYVIqNUnBspMZ_SevZ_2EZOo0Is-8Du2xeI80EU=",
    name: "Table",
  },
  {
    id: 4,
    image:
      "https://d1jbdnkobaa8jr.cloudfront.net/media/catalog/product/cache/803ebc76ce7a6b29bc1280aad4e9c678/d/r/draper-armchair-light-fabric-grey-brown-legs-front_3.jpg",
    name: "Armchair",
  },
  {
    id: 5,
    image:
      "https://image.made-in-china.com/2f0j00cGjUlEWzawqp/Modern-New-Design-Bedroom-Sets-Wardrobe-Dressing-Table-Home-Furniture-Chest-Drawer-Bed-Classic-Bed.jpg",
    name: "Bed",
  },
  {
    id: 6,
    image:
      "https://framacph.centracdn.net/client/dynamic/images/218_d1fa9c9c50-shelf-d20-w60-black-1600.jpg",
    name: "Shelf",
  },
];
export default function FurnitureCategories() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={{ flexDirection: "row" }}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.containerView}>
              <Image
                source={{ uri: category.image }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryName}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  containerView: {
    alignItems: "center",
    marginRight: 30,
  },
  categoryImage: { width: 50, height: 40, resizeMode: "contain" },
  categoryName: { fontSize: 13, fontWeight: "bold", color: "#303030" },
});
