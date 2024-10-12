import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { dateFormatter } from "../../utils";
import { Icon } from "@rneui/themed";
import ConditionDetailBox from "./ConditionDetailBox";

export default function ConditionsMainBox({ selectedDayDetails }) {
  console.log(selectedDayDetails.day);
  return (
    <View style={styles.mainInfoContainer}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 5,
          }}
        >
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
    backgroundColor: "#424F6F",
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
});
