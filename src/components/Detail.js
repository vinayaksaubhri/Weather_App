import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper_flex}>
        <Text style={styles.detail}>DETAILS</Text>
      </View>
      <View style={styles.lower_flex}>
        <View style={styles.box}>
          <Text style={styles.text}>Precipitation</Text>
          <Text style={styles.data}>0.0 mm</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>HUM</Text>
          <Text style={styles.data}>44.0%</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>UV</Text>
          <Text style={styles.data}>Lowest</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>East wind</Text>
          <Text style={styles.data}>6.0 km/h</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Visibility</Text>
          <Text style={styles.data}>3.54 km</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Pressure</Text>
          <Text style={styles.data}>1003 hPa</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 329,
    display: "flex",
    borderRadius: 10,
    backgroundColor: "#343434",
    flexWrap: "wrap",
  },
  upper_flex: {
    display: "flex",
    flex: 1,
  },
  lower_flex: {
    display: "flex",
    flex: 5,
    flexWrap: "wrap",
  },
  detail: {
    marginLeft: 23,
    marginTop: 18,
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)",
  },
  box: {
    width: 93,
    height: 56,
    margin: 14,
  },
  text: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  data: {
    fontSize: 19,
    color: "rgba(255, 255, 255, 0.7)",
  },
});
export default Detail;
