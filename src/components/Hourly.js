import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Cloud from "../assets/cloud";
import Drop from "../assets/drop";

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
    width: 330,
    height: 164,
    display: "flex",
    borderRadius: 10,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    flexWrap: "wrap",
  },
  upperbox: {
    flex: 1,
    display: "flex",
  },

  hourly: {
    marginTop: 15,
    marginLeft: 22,
    fontSize: 18,
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.7)",
  },

  lowerbox: {
    flexWrap: "wrap",
    display: "flex",
    flex: 3,
  },

  box: {
    height: 98,
    width: 41,
    margin: 20,
    padding: 5,
    justifyContent: "space-evenly",
  },
  data: {
    fontSize: 19,
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Poppins",
  },
  header: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Poppins",
  },
});
export default Hourly;
