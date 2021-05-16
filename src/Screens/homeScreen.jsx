import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import weatherApi from "../api/weatherApi";

const homeScreen = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    try {
      const response = await weatherApi.get(
        "/current.json?key=f6eba6a86b784c17acd75643201112",
        {
          params: {
            lat: "2028.5057948",
            long: "77.06794769999999",
          },
        }
      );
      console.log(
        "================================================================="
      );
      console.warn(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Badwa Sala Randibaaz Pradumn </Text>
    </View>
  );
};
export default homeScreen;
