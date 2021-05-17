import React from "react";
import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import Sun_cloud_icon from "../assets/Sun_cloud_icon";
import Temperature from "../components/Temperature";
<<<<<<< HEAD
import Details from "../components/Detail";
=======
import Detail from "../components/Detail";
>>>>>>> Pradumn-Singh-Patel-master

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
<<<<<<< HEAD
      <Temperature />
      <Details />
    </View>
=======
    </ScrollView>
>>>>>>> Pradumn-Singh-Patel-master
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
