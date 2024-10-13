import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
const HourlyForecastList = ({ hourDetails }) => {
  const CreateListItem = (item, index) => {
    return (
      <ListItem bottomDivider containerStyle={styles.containerStyle}>
        <ListItem.Content>
          <Text style={styles.timeText}>{`${item.time.split(" ")[1]}`}</Text>
          <Avatar rounded source={{ uri: `https:${item.condition.icon}` }} />
          <Text style={styles.tempText}>{`${item.temp_c}°c`}</Text>
        </ListItem.Content>
      </ListItem>
    );
  };
  const itemSeparator = () => (
    <View style={{ width: 5, height: "100%" }}></View>
  );

  return (
    <View style={styles.box}>
      <View>
        <FlatList
          data={hourDetails}
          renderItem={({ item, index }) => {
            return CreateListItem(item, index);
          }}
          horizontal={true}
          ItemSeparatorComponent={itemSeparator}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  containerStyle: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 80,
    width: 70,
    marginLeft: 10,
  },
  timeText: { fontSize: 14 },
  tempText: { fontSize: 13, fontWeight: "500" },
});

export default HourlyForecastList;
