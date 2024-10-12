import { ActivityIndicator, Text, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/APIConstants";
import SearchedCityList from "../Components/SearchedCityList";
import { connect } from "react-redux";
import { fetchSearchedCities } from "../Redux/Middleware/searchedCityMiddleware";
import {
  updateSearchedKeyword,
  clearSearchedCityReducer,
} from "../Redux/Action/searchedCityAction";
import CurrentWeatherInfo from "../Components/Weather/CurrentWeatherInfo";
import WeatherForecastDaysList from "../Components/Weather/WeatherForecastDaysList";
import DropDown from "../Components/DropDown";
import { FORECAST_DAYS } from "../Constants/DropdownConstants";
import { updateNumberOfDaysForForecast } from "../Redux/Action/weatherDetailsOfCityAction";
import { getWeatherForecastDetailsOfCity } from "../Redux/Middleware/weatherDetailsOfCityMiddleware";
const Home = ({
  fetchSearchedCities,
  updateSearchedKeyword,
  searchedKeyword,
  searchedCities,
  clearSearchedCityReducer,
  isSearchLoading,
  selectedCity,
  weatherDetails,
  isWeatherDetailsLoading,
  weatherForecastDetails,
  isWeatherForecastDetailsLoading,
  updateNumberOfDaysForForecast,
  numberOfDaysForForecast,
  getWeatherForecastDetailsOfCity,
}) => {
  const [areWeatherDetailsVisible, setAreWeatherDetailsVisible] =
    useState(false);
  const [isSearchedCityListVisible, setIsSearchedCityListVisible] =
    useState(false);
  let inputRef = useRef(null);
  useEffect(() => {
    console.log("numberOfDaysForForecast", numberOfDaysForForecast);
    if (selectedCity) {
      getWeatherForecastDetailsOfCity();
    }
  }, [numberOfDaysForForecast]);
  const updateSearch = async (keyword) => {
    updateSearchedKeyword(keyword);
    fetchSearchedCities();
  };
  const onFocus = () => {
    if (searchedCities.length) {
      setIsSearchedCityListVisible(true);
    }
  };
  useEffect(() => {
    if (selectedCity) {
      inputRef.blur();
      setAreWeatherDetailsVisible(true);
      setIsSearchedCityListVisible(false);
    }
  }, [selectedCity]);
  useEffect(() => {
    if (searchedCities.length) {
      setIsSearchedCityListVisible(true);
    } else {
      setIsSearchedCityListVisible(false);
    }
  }, [searchedCities]);
  return (
    <View>
      <SearchBar
        ref={(search) => {
          inputRef = search;
        }}
        inputContainerStyle={{ height: 40 }}
        onFocus={() => onFocus()}
        placeholder="City Name..."
        onChangeText={updateSearch}
        value={searchedKeyword}
        lightTheme={true}
        onClear={() => {
          clearSearchedCityReducer();
          inputRef.focus();
        }}
        round={true}
        showLoading={isSearchLoading}
      />
      {isSearchedCityListVisible && <SearchedCityList />}
      {isWeatherDetailsLoading ? (
        <ActivityIndicator size={35} color={"black"} />
      ) : (
        areWeatherDetailsVisible && (
          <>
            <CurrentWeatherInfo weatherDetails={weatherDetails} />
            <DropDown
              updateNumberOfDaysForForecast={updateNumberOfDaysForForecast}
              data={FORECAST_DAYS}
            />
          </>
        )
      )}

      {isWeatherForecastDetailsLoading ? (
        <ActivityIndicator
          size={35}
          style={{ top: isWeatherDetailsLoading ? 250 : 0 }}
          color={"black"}
        />
      ) : (
        areWeatherDetailsVisible && (
          <WeatherForecastDaysList
            weatherForecastDetails={weatherForecastDetails}
          />
        )
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  searchedKeyword: state.searchedCityReducer.searchedKeyword,
  searchedCities: state.searchedCityReducer.searchedCities,
  isSearchLoading: state.searchedCityReducer.isSearchLoading,
  selectedCity: state.weatherDetailsOfCityReducer.selectedCity,
  weatherDetails: state.weatherDetailsOfCityReducer.weatherDetails,
  isWeatherDetailsLoading:
    state.weatherDetailsOfCityReducer.isWeatherDetailsLoading,
  weatherForecastDetails:
    state.weatherDetailsOfCityReducer.weatherForecastDetails,
  isWeatherForecastDetailsLoading:
    state.weatherDetailsOfCityReducer.isWeatherForecastDetailsLoading,
  numberOfDaysForForecast:
    state.weatherDetailsOfCityReducer.numberOfDaysForForecast,
});

export default connect(mapStateToProps, {
  fetchSearchedCities,
  updateSearchedKeyword,
  clearSearchedCityReducer,
  updateNumberOfDaysForForecast,
  getWeatherForecastDetailsOfCity,
})(Home);
