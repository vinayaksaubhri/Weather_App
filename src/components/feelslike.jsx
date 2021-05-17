import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Group from "../assets/group";
function feelslike() {
  return (
    <View style={style.container}>
      <View style={style.box}></View>
      <Group />
      <Text style={style.data}>32°</Text>
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
export default feelslike;
