import React from "react";
import { StyleSheet, View } from "react-native";
import ConditionDetailBox from "./ConditionDetailBox";
import { defaultBackgroundColor } from "../../Constants/Colors";
export default function ConditionsMainBox({ selectedDayDetails }) {
  return (
    <View style={styles.mainInfoContainer}>
      <View>
        <View style={styles.windAndHumidCondWrapper}>
          <ConditionDetailBox
            label={"Wind"}
            detailOne={{
              subLabel: "Max",
              value: `${selectedDayDetails.day.maxwind_kph}Km/h`,
            }}
            iconName={"air"}
          />
          <ConditionDetailBox
            label={"Humid"}
            detailOne={{
              subLabel: "Avg",
              value: `${selectedDayDetails.day.avghumidity}%`,
            }}
            iconName={"water-percent"}
            iconType={"material-community"}
          />
        </View>
        <View style={styles.UVAndAQICondWrapper}>
          <ConditionDetailBox
            label={"UV"}
            detailOne={{
              subLabel: "Index",
              value: `${selectedDayDetails.day.uv}`,
            }}
            iconName={"sun-wireless"}
            iconType={"material-community"}
          />
          <ConditionDetailBox
            label={"AQI"}
            detailOne={{
              subLabel: "co",
              value: `${Math.round(selectedDayDetails.day.air_quality.co)}`,
            }}
            detailTwo={{
              subLabel: "so2",
              value: `${Math.round(selectedDayDetails.day.air_quality.so2)}`,
            }}
            iconName={"air-filter"}
            iconType={"material-community"}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainInfoContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
    backgroundColor: defaultBackgroundColor,
    justifyContent: "center",
  },
  boxStyle: {
    width: 160,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 12,
    flexDirection: "row",
  },
  labelText: {
    color: "#091D2C",
    fontWeight: "600",
    fontSize: 18,
    flex: 35,
  },
  subLabel: {
    color: "#091D2C",
    fontSize: 10,
  },
  finalText: {
    color: "#091D2C",
    fontSize: 13,
    fontWeight: "700",
  },

  weatherIcon: {
    width: 50,
    height: 50,
  },
  windAndHumidCondWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  UVAndAQICondWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
});
