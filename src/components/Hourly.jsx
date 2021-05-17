import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Cloud from "../assets/cloud";
import Drop from "../assets/drop";
// import { Poppins_100Thin } from "@expo-google-fonts/poppins";

function Hourly(props) {
  return (
    <View style={style.container}>
      <View style={style.upperbox}>
        <Text style={style.hourly}>Hourly Forecast</Text>
      </View>

      <View style={style.lowerbox}>
        <View style={style.box}>
          <Text style={style.header}>Now</Text>
          <Drop style={style.svg} />
          <Text style={style.data}>28°</Text>
        </View>

        <View style={style.box}>
          <Text style={style.header}>Now</Text>
          <Cloud style={style.svg} />
          <Text style={style.data}>28°</Text>
        </View>

        <View style={style.box}>
          <Text style={style.header}>Now</Text>
          <Cloud style={style.svg} />
          <Text style={style.data}>28°</Text>
        </View>

        <View style={style.box}>
          <Text style={style.header}>Now</Text>
          <Drop style={style.svg} />
          <Text style={style.data}>28°</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 164,

    borderRadius: 10,
    backgroundColor: "#343434",
    flexWrap: "wrap",
  },
  upperbox: {
    flex: 1,
  },

  hourly: {
    marginTop: 15,
    marginLeft: 22,
    fontSize: 18,

    color: "rgba(255, 255, 255, 0.7)",
  },

  lowerbox: {
    flexWrap: "wrap",
    display: "flex",
    flex: 5,
  },

  box: {
    height: 98,
    width: 41,
    margin: 22,
    // padding: 5,
    justifyContent: "space-evenly",
  },
  data: {
    fontSize: 19,
    color: "rgba(255, 255, 255, 0.7)",
  },
  header: {
    color: "rgba(255, 255, 255, 0.7)",
  },
});
export default Hourly;
