import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Topbar from "../components/Topbar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileImage from "../assets/images/index";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
//log-out-outline
const profileMenus = [
  {
    id: 1,
    title: "My Orders",
    subtitle: "Already have 10 orders",
    path: "MyOrders",
  },
  {
    id: 2,
    title: "Shipping Address",
    subtitle: "03 Address",
    path: "ShippingAddress",
  },
  {
    id: 3,
    title: "Payment Method",
    subtitle: "You have two cards",
    path: "PaymentMethod",
  },
  {
    id: 4,
    title: "My Reviews",
    subtitle: "Reviews for 5 items",
    path: "MyReviews",
  },
  {
    id: 5,
    title: "Setting",
    subtitle: "Notification, Password, FAQ, Contact",
    path: "Setting",
  },
];
export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Topbar
        headCenter={ProfileHeadComp}
        headRight={<Ionicons name="log-out-outline" size={25} />}
      />
      <ProfileContainer />
      {profileMenus.map((menu, index) => (
        <MenuCard
          key={index}
          title={menu.title}
          subtitle={menu.subtitle}
          link={menu.path}
          navigation={navigation}
        />
      ))}
    </View>
  );
}

const ProfileHeadComp = () => {
  return (
    <View>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

const ProfileContainer = () => {
  return (
    <View style={styles.profileImage}>
      <Image
        source={{
          uri: "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>Ermias Tefera</Text>
        <Text style={styles.email}>ermias.tefera.dt@gmail.com</Text>
      </View>
    </View>
  );
};

const MenuCard = ({ title, subtitle, link, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(link)}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubTitle}>{subtitle}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  profileImage: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#303030",
  },
  image: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#303030",
    marginBottom: 10,
  },
  email: {
    fontSize: 14,
    color: "#808080",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //""
    shadowColor: "rgba(138, 149, 158, 0.6)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.84,

    elevation: 2,

    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10,

    // backgroundColor: "green",
  },
  cardTitle: {
    color: "#303030",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardSubTitle: {
    fontSize: 12,
    color: "#808080",
  },
});
