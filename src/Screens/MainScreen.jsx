import React from "react";
import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import Sun_cloud_icon from "../assets/Sun_cloud_icon";
import Temperature from "../components/Temperature";
import Detail from "../components/Detail";

const MainScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.city}>Gurgaon</Text>
        <View style={styles.icon}>
          <Sun_cloud_icon />
        </View>
        <Temperature />
        <Detail />
      </View>
    </ScrollView>
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
