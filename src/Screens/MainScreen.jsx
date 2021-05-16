import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import Sun_cloud_icon from "../assets/Sun_cloud_icon";
import Temperature from "../components/Temperature";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>Gurgaon</Text>
      <View style={styles.icon}>
        <Sun_cloud_icon />
      </View>
      <Temperature />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  city: {
    fontSize: 40,
    color: "rgba(255, 255, 255, 0.7)",
  },
  icon: {
    alignSelf: "flex-end",
  },
});
export default MainScreen;
