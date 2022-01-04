import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Topbar from "../components/Topbar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonComp from "../components/Button";
import { TouchableHighlight } from "react-native";

export default function MyOrders({ navigation }) {
  return (
    <View style={styles.container}>
      <Topbar
        headCenter={MyOrdersHeadComp}
        headLeft={
          <TouchableOpacity>
            <Ionicons
              name="chevron-back"
              size={25}
              color="purple"
              onPress={() => navigation.navigate("Profile")}
            />
          </TouchableOpacity>
        }
      />
      <TopMenu />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </View>
  );
}

const MyOrdersHeadComp = () => {
  return (
    <View>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

const TopMenu = () => {
  var [active, setActive] = React.useState({ active: null });
  //   var touchProps = {
  //     activeOpacity: 1,
  //     underlayColor: "blue", // <-- "backgroundColor" will be always overwritten by "underlayColor"
  //     style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
  //     onHideUnderlay: () => setIsPress(false),
  //     onShowUnderlay: () => setIsPress(true),
  //     onPress: () => {
  //       console.log("HELLO"), setIsPress(true);
  //     }, // <-- "onPress" is apparently required
  //   };
  return (
    <View style={styles.menuContainer}>
      <TouchableHighlight onPress={() => setActive({ active: 0 })}>
        <Text
          style={[
            styles.text,
            active === 0 ? styles.active : "",
            { color: "#303030" },
          ]}
        >
          Delivered
        </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.text}>Processing</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.text}>Canceled</Text>
      </TouchableHighlight>
    </View>
  );
};

const OrderCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitle}>
        <Text style={styles.orderId}>Order No238562312</Text>
        <Text style={styles.orderDate}>20/03/2020</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.orderInfoContainer}>
          <Text style={styles.orderInfo}>
            Quantity: <Text style={styles.numText}>03</Text>
          </Text>
          <Text style={styles.orderInfo}>
            Total Amount: <Text style={styles.numText}>$150</Text>
          </Text>
        </View>
        <View style={styles.contentActions}>
          <ButtonComp title="Detail" />
          <TouchableOpacity>
            <Text style={styles.delivered}>Delivered</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#303030",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "95%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#909090",
    paddingBottom: 10,
  },
  active: {
    color: "#303030",
    borderBottomColor: "#303030",
    borderBottomWidth: 2,
  },
  cardContainer: {
    height: 150,
    //
    shadowColor: "rgba(138, 149, 158, 0.6)",

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.84,

    elevation: 2,

    marginVertical: 10,
    borderRadius: 4,
  },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,

    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,

    alignItems: "center",
  },
  contentContainer: {
    height: "80%",
    justifyContent: "space-between",
    padding: 10,
  },
  orderInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderInfo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#909090",
    padding: 10,
  },
  numText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#303030",
  },
  contentActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  delivered: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
  },
});
