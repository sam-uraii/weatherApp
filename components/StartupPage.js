import React from "react";
import { View, Text, Image } from "react-native";

export default function StartupPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        Search for your city name to get weather report.
      </Text>
      <Image
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          alignItems: "center",
          marginTop: 20,
        }}
        source={require("../assets/images/weather.gif")}
      />
    </View>
  );
}
