import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { dateFormatter } from "../../utils";
import { Icon, Image } from "@rneui/themed";
import { defaultBackgroundColor } from "../../Constants/Colors";
import WeatherImage from "../AnimatedComponent/WeatherImage";
export default function TemperatureBox({ selectedDayDetails }) {
  return (
    <View style={styles.mainInfoContainer}>
      <Text style={styles.dateText}>
        {selectedDayDetails &&
          selectedDayDetails.date &&
          dateFormatter(selectedDayDetails.date)}
      </Text>
      <View style={styles.temperatureWrapper}>
        <Icon
          name="straight"
          type="material"
          color="#fff"
          size={18}
          style={{
            transform: `rotateX(180deg)`,
          }}
        />
        <Text
          style={styles.currentDegrees}
        >{`${selectedDayDetails.day.mintemp_c}°/${selectedDayDetails.day.maxtemp_c}°`}</Text>
        <Icon name="straight" type="material" color="#fff" size={18} />
        {/* <Image
          style={styles.weatherIcon}
          source={{
            uri: `https:${selectedDayDetails.day.condition.icon}`,
          }}
          resizeMode={"contain"}
        /> */}
        {/* <Image
          transition={true}
          transitionDuration={5000}
          containerStyle={styles.weatherIcon}
          source={{
            uri: `https:${selectedDayDetails.day.condition.icon}`,
          }}
        ></Image> */}
        <WeatherImage
          imageUri={`https:${selectedDayDetails.day.condition.icon}`}
        />
      </View>
      <Text style={styles.description}>
        {selectedDayDetails.day.condition.text}
      </Text>
    </View>
  );
}
//
const styles = StyleSheet.create({
  mainInfoContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
    backgroundColor: defaultBackgroundColor,
    justifyContent: "center",
  },
  dateText: {
    color: "white",
    fontSize: 15,
    textTransform: "capitalize",
    marginLeft: 5,
  },
  temperatureWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    color: "white",
    fontSize: 15,
    textTransform: "capitalize",
    marginLeft: 5,
  },

  weatherIcon: {
    width: 50,
    height: 50,
  },

  currentDegrees: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 40,
  },
});
