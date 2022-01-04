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
import { addToCart } from "../contexts/actions";
import ButtonComp from "../components/Button";
var items = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Your order #123456789 has been confirmed",

    notificatino:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turp h et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ",
    status: "New",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Your order #123456789 has been confirmed",

    notificatino:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turp h et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ",
    status: "Hot",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Your order #123456789 has been confirmed",

    notificatino:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turp h et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ",
  },
];
export default function Notifications({ navigation }) {
  return (
    <View style={styles().container}>
      <Topbar headCenter={NotificationHeadComp} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <NotificationItem
            item={item}
            addToCart={() => dispatch(addToCart(item))}
            key={index}
          />
        ))}
        {/* <ButtonComp title="Add all to My Cart" /> */}
      </ScrollView>
    </View>
  );
}

const NotificationItem = ({ item, addToCart }) => {
  return (
    <View style={styles().notificationItemContainer}>
      <Image source={{ uri: item.image }} style={styles().image} />
      <View style={styles().itemInfoContaienr}>
        <Text style={styles().notificationTitle}>{item.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text numberOfLines={10} style={styles().notificationText}>
            {item.notificatino}
          </Text>
        </View>
        <Text style={styles(item.status).status}>{item.status}</Text>
      </View>
    </View>
  );
};
const NotificationHeadComp = () => {
  return (
    <View>
      <Text style={styles().title}>Notification</Text>
    </View>
  );
};

const styles = (val) =>
  StyleSheet.create({
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
    notificationItemContainer: {
      flexDirection: "row",
      marginTop: 10,
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
      flexShrink: 1,
    },
    notificationTitle: {
      color: "#303030",
      fontSize: 12,
      fontWeight: "bold",
    },
    notificationText: {
      color: "#808080",
      fontSize: 12,
      flexShrink: 1,
    },
    iconContainer: {
      justifyContent: "space-between",
    },
    status: {
      alignSelf: "flex-end",
      color: val === "New" ? "green" : val === "Hot" ? "red" : "black",
    },
  });
