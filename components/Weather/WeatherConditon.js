import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { primaryTextColor } from "../../Constants/Colors";

const WeatherCondition = ({ weatherDetails }) => {
  const weatherData = [
    [
      {
        label: "Feels",
        value: `${Math.round(weatherDetails.current.feelslike_c)}°C`,
      },
      {
        label: "   Heat",
        value: `   ${Math.round(weatherDetails.current.heatindex_c)}°C`,
      },
      {
        label: "Pressure",
        value: `${Math.round(weatherDetails.current.pressure_mb)}MB`,
      },
    ],
    [
      { label: "Wind", value: `${weatherDetails.current.wind_mph}mph` },
      { label: "  Humid", value: `  ${weatherDetails.current.humidity}%` },
      { label: "Cloud    ", value: `${weatherDetails.current.cloud}%` },
    ],
    [
      { label: "UV", value: `${weatherDetails.current.uv}` },
      {
        label: "    Dew",
        value: `    ${weatherDetails.current.dewpoint_c}%`,
      },
      { label: "Gust      ", value: `${weatherDetails.current.gust_kph}Kph` },
    ],
  ];

  const weatherConditionWrapper = () =>
    weatherData.map((curr, index) => {
      return (
        <View style={styles.row} key={`${index}`}>
          {curr.map((element) => {
            return (
              <View style={styles.detailsBox} key={element.label}>
                <Text style={styles.label}>{element.label}</Text>
                <Text style={styles.details}>{element.value}</Text>
              </View>
            );
          })}
        </View>
      );
    });

  return weatherConditionWrapper();
};
export default WeatherCondition;

const styles = StyleSheet.create({
  currentView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#E3E3EE",
  },
  regionTempTimeWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-around",
    alignItems: "center",
  },
  currentRegionText: {
    color: primaryTextColor,
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 40,
  },
  currentTempView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainInfoContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  description: {
    color: primaryTextColor,
    fontSize: 15,
    textTransform: "capitalize",
  },
  secondaryInfoContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 10,
    width: "95%",
    maxWidth: 478,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  timezone: {
    color: primaryTextColor,
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 15,
  },
  currentDegrees: {
    color: primaryTextColor,
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 50,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  detailsBox: {
    display: "flex",
  },
  label: {
    fontSize: 18,
  },
  details: {
    color: primaryTextColor,
    fontSize: 15,
    textTransform: "capitalize",
  },
});
