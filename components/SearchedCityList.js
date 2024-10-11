import React, { useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
import { connect } from "react-redux";
import axios from "axios";
import {
  API_KEY,
  BASE_URL,
  END_POINT,
  formatBaseUrl,
} from "../constants/APIConstants";
import { updateSelectedCity } from "../app/Redux/Action/weatherDetailsOfCityAction";
import { getWeatherDetailsOfCity } from "../app/Redux/Middleware/weatherDetailsOfCityMiddleware";

const SearchedCityList = ({
  searchedCities,
  updateSelectedCity,
  getWeatherDetailsOfCity,
}) => {
  const handleCitySelection = async (item) => {
    console.log(item.name);
    updateSelectedCity(item);
    getWeatherDetailsOfCity();
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
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <ListItem.Content>
            <ListItem.Title>{`${item.name}`}</ListItem.Title>
            <ListItem.Subtitle>{`${item.region}, ${item.country}`}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        {/* <ListItem bottomDivider>
        <Avatar
          rounded
          icon={{
            name: "person-outline",
            type: "material",
            size: 26,
          }}
          containerStyle={{ backgroundColor: "#c2c2c2" }}
        />
        <ListItem.Content>
          <ListItem.Title>Alba King</ListItem.Title>
          <ListItem.Subtitle>Vice President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <Avatar
          rounded
          title="A"
          containerStyle={{ backgroundColor: "grey" }}
        />
        <ListItem.Content>
          <ListItem.Title>Adam Eva</ListItem.Title>
          <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.box}>
      {}
      <FlatList
        data={searchedCities}
        renderItem={({ item, index }) => {
          return CreateListItem(item);
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "70%",
    width: "100%",
    // backgroundColor: "pink",
    borderWidth: 2,
    borderColor: "black",
  },
});

const mapStateToProps = (state) => ({
  searchedCities: state.searchedCityReducer.searchedCities,
});

export default connect(mapStateToProps, {
  updateSelectedCity,
  getWeatherDetailsOfCity,
})(SearchedCityList);
