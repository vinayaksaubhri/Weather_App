import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Uparrow from "../assets/uparrow";
import Downarrow from "../assets/downarrow";

const Temperature = () => {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <Text style={styles.temperature}>31°</Text>
      <Text style={styles.condition}>Sunny</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.max_temp}>
          <Uparrow />
          25°
        </Text>
        <Text style={styles.min_temp}>
          <Downarrow />
          25°
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  temperature: {
    color: " rgba(255, 255, 255, 0.7)",
    fontSize: 105,
  },
  condition: {
    color: " rgba(255, 255, 255, 0.7)",
    fontSize: 36,
  },

  max_temp: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 19,
  },
  min_temp: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 19,
    marginLeft: 10,
  },
});
export default Temperature;
