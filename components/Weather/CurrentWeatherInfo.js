import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { dateFormatter } from "../../utils";
import WeatherCondition from "./WeatherConditon";
import { primaryTextColor } from "../../Constants/Colors";

const CurrentWeatherInfo = ({ weatherDetails }) => {
  return (
    <View style={styles.currentView}>
      <View style={styles.regionTempTimeWrapper}>
        <View style={{ flex: 1 }}>
          <Text style={styles.currentRegionText}>
            {`${weatherDetails && weatherDetails.location && weatherDetails.location.name}`}
          </Text>
          <Text
            style={{
              color: primaryTextColor,
              fontSize: 20,
            }}
          >
            {`${weatherDetails && weatherDetails.location && weatherDetails.location.region}`}
          </Text>
        </View>
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
      </View>

      <Text
        style={styles.timezone}
      >{`${dateFormatter(weatherDetails.location.localtime.split(" ")[0])} - ${weatherDetails.location.localtime.split(" ")[1]}`}</Text>
      <WeatherCondition weatherDetails={weatherDetails} />
    </View>
  );
};

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

export default CurrentWeatherInfo;
