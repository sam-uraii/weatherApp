import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CurrentWeatherInfo = ({ weatherDetails }) => {
  return (
    <View style={styles.currentView}>
      <Text
        style={styles.timezone}
      >{`${weatherDetails.location.localtime.split(" ")[0]}, ${weatherDetails.location.localtime.split(" ")[1]}`}</Text>
      <View style={styles.mainInfoContainer}>
        <View style={styles.currentTempView}>
          {weatherDetails.current && (
            <Image
              style={styles.weatherIcon}
              source={{
                uri: `https:${weatherDetails.current.condition.icon}`,
              }}
              resizeMode={"contain"}
            />
          )}
          <Text style={styles.currentDegrees}>
            {Math.round(
              weatherDetails.current && weatherDetails.current.temp_c
            )}
            °C
          </Text>
        </View>
        <Text style={styles.description}>
          {weatherDetails.current && weatherDetails.current.condition.text}
        </Text>
      </View>
      <View style={styles.secondaryInfoContainer}>
        <View style={styles.row}>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Feels</Text>
            <Text style={styles.details}>
              {weatherDetails.current &&
                Math.round(weatherDetails.current.feelslike_c)}
              °C
            </Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Heat</Text>
            <Text style={styles.details}>
              {weatherDetails.current &&
                Math.round(weatherDetails.current.heatindex_c)}
              °C
            </Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Pressure</Text>
            <Text style={styles.details}>
              {weatherDetails.current &&
                Math.round(weatherDetails.current.pressure_mb)}
              MB
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Wind</Text>
            <Text style={styles.details}>
              {weatherDetails.current && weatherDetails.current.wind_mph} m/s
            </Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Humidity</Text>
            <Text style={styles.details}>
              {weatherDetails.current && weatherDetails.current.humidity}%
            </Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>{`Cloud     `}</Text>
            <Text style={styles.details}>
              {weatherDetails.current && weatherDetails.current.cloud}%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgb(65,117,155)",
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
  },
  description: {
    color: "white",
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
    color: "white",
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 15,
  },
  currentDegrees: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 60,
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
    color: "black",
    fontSize: 15,
    textTransform: "capitalize",
  },
});

export default CurrentWeatherInfo;
