import React, { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Icon, ListItem } from "@rneui/themed";
import { connect } from "react-redux";
import { dateFormatter } from "../../utils";

const WeatherForecastDaysList = ({ weatherForecastDetails, selectedCity }) => {
  const handleCitySelection = async (item) => {
    // console.log(selectedCity);
    console.log(item);
  };
  const CreateListItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleCitySelection(item);
        }}
      >
        <ListItem bottomDivider>
          <Avatar
            rounded
            source={{ uri: `https:${item.day.condition.icon}` }}
          />
          <ListItem.Content>
            <ListItem.Title>{`${dateFormatter(item.date)}`}</ListItem.Title>
            <ListItem.Subtitle>{`${item.day.condition.text}, ${item.day.avgtemp_c}°C`}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  };
  const itemSeparator = () => (
    <View style={{ width: 5, height: "100%" }}></View>
  );

  return (
    <View style={styles.box}>
      <View>
        <FlatList
          data={weatherForecastDetails}
          renderItem={({ item, index }) => {
            return CreateListItem(item);
          }}
          horizontal={true}
          ItemSeparatorComponent={itemSeparator}
          // ListFooterComponent={listFooter}
        ></FlatList>
      </View>

      <Icon
        name="swipe"
        type="material"
        color="#000"
        size={18}
        style={{
          marginLeft: Dimensions.get("window").width - 35,
          marginTop: 4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "70%",
    width: "100%",
    flexDirection: "column",
  },
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(WeatherForecastDaysList);
