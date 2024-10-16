import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "@rneui/themed";
import { defaultBackgroundColor } from "../../Constants/Colors";
const ConditionDetailBox = ({
  label,
  detailOne,
  detailTwo,
  iconName,
  iconType,
}) => {
  return (
    <View style={styles.boxStyle}>
      <View style={{ flex: 1 }}>
        <Text style={styles.labelText}>{label}</Text>
        <View style={{ flex: 65 }}>
          {detailOne && (
            <>
              <Text style={styles.subLabel}>{detailOne.subLabel}</Text>
              <Text style={styles.finalText}>{detailOne.value}</Text>
            </>
          )}

          {detailTwo && (
            <>
              <Text style={styles.subLabel}>{detailTwo.subLabel}</Text>
              <Text style={styles.finalText}>{detailTwo.value}</Text>
            </>
          )}
        </View>
      </View>
      <View style={styles.iconWrapper}>
        <Icon
          name={iconName}
          type={iconType ? iconType : "material"}
          color="#091D2C"
          size={40}
        />
      </View>
    </View>
  );
};

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
  iconWrapper: { flex: 1, justifyContent: "center" },
});
export default ConditionDetailBox;
