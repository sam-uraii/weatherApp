import React, { useEffect, useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Avatar, Icon, ListItem } from "@rneui/themed";
import { connect } from "react-redux";
const HourlyForecastList = ({ hourDetails }) => {
  const CreateListItem = (item, index) => {
    return (
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          height: 80,
          width: 70,
          marginLeft: 10,
        }}
      >
        <ListItem.Content>
          <Text style={{ fontSize: 14 }}>{`${item.time.split(" ")[1]}`}</Text>
          <Avatar rounded source={{ uri: `https:${item.condition.icon}` }} />
          <Text
            style={{ fontSize: 13, fontWeight: 500 }}
          >{`${item.temp_c}°c`}</Text>
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
});

export default HourlyForecastList;
