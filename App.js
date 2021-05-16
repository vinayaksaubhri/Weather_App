import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from "./src/Screens/homeScreen";
// import Details from "./src/Screens/Details";
import MainScreen from "./src/Screens/MainScreen";

export default function App() {
  return (
    <>
      <View style={styles.MainScreen}>
        <StatusBar style={{ color: "white" }} />
        <MainScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  MainScreen: {
    backgroundColor:
      "linear-gradient(32.62deg, #000000 0%, rgba(36, 36, 36, 0.9) 100%)",
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
  },
});
