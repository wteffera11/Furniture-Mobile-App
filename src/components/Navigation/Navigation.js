import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Home from "../../screens/Home";
import Favorite from "../../screens/Favorite";
import Notifications from "../../screens/Notifications";
import Profile from "../../screens/Profile";

import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "../../screens/Product";
import MyCart from "../../screens/MyCart";
import MyOrders from "../../screens/MyOrders";
import ShippingAddress from "../../screens/ShippingAddress";
import PaymentMethod from "../../screens/PaymentMethod";
import MyReviews from "../../screens/MyReview";
import AddShippingAddress from "../../screens/AddShippingAddress";
import AddPaymentAddress from "../../screens/AddPaymentMethod";
import Setting from "../../screens/Setting";
import CheckOout from "../../screens/CheckOout";

const ProductStack = createNativeStackNavigator();

const ProductStackScreen = () => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProductStack.Screen name="Home" component={Home} />
      <ProductStack.Screen name="Product" component={Product} />
      <ProductStack.Screen name="MyCart" component={MyCart} />
      <ProductStack.Screen name="Checkout" component={CheckOout} />
    </ProductStack.Navigator>
  );
};

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="MyOrders" component={MyOrders} />
      <ProfileStack.Screen name="ShippingAddress" component={ShippingAddress} />
      <ProfileStack.Screen name="PaymentMethod" component={PaymentMethod} />
      <ProfileStack.Screen name="MyReviews" component={MyReviews} />
      <ProfileStack.Screen
        name="AddShippingAddress"
        component={AddShippingAddress}
      />
      <ProfileStack.Screen
        name="AddPaymentAddress"
        component={AddPaymentAddress}
      />
      <ProfileStack.Screen name="Setting" component={Setting} />
    </ProfileStack.Navigator>
  );
};
export default function Navigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Products"
          component={ProductStackScreen}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name="favorite" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="notifications" color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="ProfilePage"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="person" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
