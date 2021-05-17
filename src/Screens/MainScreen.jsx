import React from "react";
import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import Sun_cloud_icon from "../assets/Sun_cloud_icon";
import Temperature from "../components/Temperature";
import Details from "../components/Detail";
import Hourly from "../components/Hourly";
import Rain from "../components/rain";
import Feelslike from "../components/feelslike";
const MainScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.city}>Gurgaon</Text>
        <View style={styles.icon}>
          <Sun_cloud_icon />
        </View>
        <View
          style={{
            marginBottom: 34,
            paddingLeft: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Temperature />
          <View style={{ alignSelf: "center", paddingRight: 20 }}>
            <View style={{ marginBottom: 10 }}>
              <Rain />
            </View>
            <Feelslike />
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
            marginBottom: 34,
            width: "90%",
          }}
        >
          <Hourly />
        </View>
        <View style={{ alignSelf: "center", marginBottom: 34, width: "90%" }}>
          <Details />
        </View>
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
    paddingLeft: 20,
    paddingTop: 20,
  },
  icon: {
    alignSelf: "flex-end",
  },
});
export default MainScreen;
