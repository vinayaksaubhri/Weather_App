import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Umbrella from "../assets/umbrella";

function rain(props) {
  return (
    <View style={style.container}>
      <Umbrella />
      <Text style={style.data}>7%</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 50,
    height: 20,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  data: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.7)",
  },
});
export default rain;
