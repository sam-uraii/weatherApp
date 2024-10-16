import React, { useCallback } from "react";
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
  const keyExtractor = useCallback((item, index) => `${index}`, []);

  return (
    <View style={styles.box}>
      <FlatList
        data={searchedCities}
        renderItem={({ item, index }) => {
          return CreateListItem(item);
        }}
        removeClippedSubviews={true}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "70%",
    width: "100%",
    position: "absolute",
    zIndex: 11111,
    marginTop: 68,
    marginLeft: 20,
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
