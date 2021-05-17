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
    flex: 1,
    width: 50,
    height: 20,
    left: 280,
    bottom: 650,
    display: "flex",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    flexWrap: "wrap",
    padding: 1,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    padding: 3,
  },
  data: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.7)",
    marginLeft: 5,
    alignItems: "center",
  },
});
export default feelslike;
