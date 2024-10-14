import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WeatherCondition = ({ weatherDetails }) => {
  console.log(weatherDetails);

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
    weatherData.map((curr) => {
      return (
        <View style={styles.row}>
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

  return (
    // <View style={styles.secondaryInfoContainer}>
    //   <View style={styles.row}>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>Feels</Text>
    //       <Text style={styles.details}>
    //         {weatherDetails.current &&
    //           Math.round(weatherDetails.current.feelslike_c)}
    //         °C
    //       </Text>
    //     </View>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>Heat</Text>
    //       <Text style={styles.details}>
    //         {weatherDetails.current &&
    //           Math.round(weatherDetails.current.heatindex_c)}
    //         °C
    //       </Text>
    //     </View>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>Pressure</Text>
    //       <Text style={styles.details}>
    //         {weatherDetails.current &&
    //           Math.round(weatherDetails.current.pressure_mb)}
    //         MB
    //       </Text>
    //     </View>
    //   </View>
    //   <View style={styles.row}>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>{"Wind"}</Text>
    //       <Text
    //         style={styles.details}
    //       >{`${weatherDetails.current.wind_mph}mph`}</Text>
    //     </View>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>Humidity</Text>
    //       <Text style={styles.details}>
    //         {weatherDetails.current && weatherDetails.current.humidity}%
    //       </Text>
    //     </View>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>{`Cloud     `}</Text>
    //       <Text style={styles.details}>
    //         {weatherDetails.current && weatherDetails.current.cloud}%
    //       </Text>
    //     </View>
    //   </View>
    //   <View style={styles.row}>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>UV</Text>
    //       <Text style={styles.details}>
    //         {`${weatherDetails.current && weatherDetails.current.uv}       `}
    //       </Text>
    //     </View>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>Dew Point</Text>
    //       <Text style={styles.details}>
    //         {weatherDetails.current && weatherDetails.current.dewpoint_c}%
    //       </Text>
    //     </View>
    //     <View style={styles.detailsBox}>
    //       <Text style={styles.label}>{`Cloud     `}</Text>
    //       <Text style={styles.details}>
    //         {weatherDetails.current && weatherDetails.current.cloud}%
    //       </Text>
    //     </View>
    //   </View>
    // </View>
    weatherConditionWrapper()
  );
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
    color: "black",
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
    color: "black",
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
    color: "black",
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 15,
  },
  currentDegrees: {
    color: "black",
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
    color: "black",
    fontSize: 15,
    textTransform: "capitalize",
  },
});
