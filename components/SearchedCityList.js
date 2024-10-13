import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { connect } from "react-redux";

import { updateSelectedCity } from "../Redux/Action/weatherDetailsOfCityAction";
import {
  getWeatherDetailsOfCity,
  getWeatherForecastDetailsOfCity,
} from "../Redux/Middleware/weatherDetailsOfCityMiddleware";

const SearchedCityList = ({
  searchedCities,
  updateSelectedCity,
  getWeatherDetailsOfCity,
  getWeatherForecastDetailsOfCity,
}) => {
  const handleCitySelection = async (item) => {
    updateSelectedCity(item);
    getWeatherDetailsOfCity();
    getWeatherForecastDetailsOfCity();
  };
  const CreateListItem = (item) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          handleCitySelection(item);
        }}
      >
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{`${item.name}`}</ListItem.Title>
            <ListItem.Subtitle>{`${item.region}, ${item.country}`}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableWithoutFeedback>
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
    borderWidth: 2,
    borderColor: "black",
    position: "absolute",
    zIndex: 11111,
    marginTop: 50,
  },
});

const mapStateToProps = (state) => ({
  searchedCities: state.searchedCityReducer.searchedCities,
});

export default connect(mapStateToProps, {
  updateSelectedCity,
  getWeatherDetailsOfCity,
  getWeatherForecastDetailsOfCity,
})(SearchedCityList);
