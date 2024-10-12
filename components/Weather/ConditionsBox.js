import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { dateFormatter } from "../../utils";
import { Icon } from "@rneui/themed";

export default function ConditionsBox({ selectedDayDetails }) {
  return <View style={styles.mainInfoContainer}></View>;
}
const styles = StyleSheet.create({
  mainInfoContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
    backgroundColor: "#424F6F",
    justifyContent: "center",
  },
  dateText: {
    color: "white",
    fontSize: 15,
    textTransform: "capitalize",
    marginLeft: 5,
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
