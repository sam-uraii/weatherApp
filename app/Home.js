import {
  ActivityIndicator,
  View,
  Appearance,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
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
import SearchBox from "../Components/SearchBox";
import CurrentWeatherWrapper from "../Components/Weather/CurrentWeatherWrapper";
import ForecastListWrapper from "../Components/Weather/ForecastListWrapper";
import StartupPage from "../Components/StartupPage";
import { debounce } from "../utils";

const Home = ({
  fetchSearchedCities,
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

  useEffect(() => {
    if (selectedCity) getWeatherForecastDetailsOfCity();
  }, [numberOfDaysForForecast]);

  useEffect(() => {
    if (selectedCity) {
      setAreWeatherDetailsVisible(true);
      setIsSearchedCityListVisible(false);
    }
  }, [selectedCity]);

  useEffect(() => {
    setIsSearchedCityListVisible(searchedCities.length > 0);
  }, [searchedCities]);

  const onFocus = () => {
    if (searchedCities.length) {
      setIsSearchedCityListVisible(true);
    }
  };
  const debouncedFetch = useCallback(debounce(fetchSearchedCities, 500), []);

  return (
    <View style={styles.mainWrapperBox}>
      <SearchBox
        shouldBlur={selectedCity}
        searchedKeyword={searchedKeyword}
        isSearchLoading={isSearchLoading}
        onFocus={onFocus}
        onClearCallBack={clearSearchedCityReducer}
        fetchCallback={debouncedFetch}
      />

      {isSearchedCityListVisible && <SearchedCityList />}

      {weatherDetails ? (
        <>
          <CurrentWeatherWrapper
            isWeatherDetailsLoading={isWeatherDetailsLoading}
            areWeatherDetailsVisible={areWeatherDetailsVisible}
            weatherDetails={weatherDetails}
            updateNumberOfDaysForForecast={updateNumberOfDaysForForecast}
            numberOfDaysForForecast={numberOfDaysForForecast}
          />
          <ForecastListWrapper
            isWeatherForecastDetailsLoading={isWeatherForecastDetailsLoading}
            isWeatherDetailsLoading={isWeatherDetailsLoading}
            areWeatherDetailsVisible={areWeatherDetailsVisible}
            weatherForecastDetails={weatherForecastDetails}
          />
        </>
      ) : (
        <StartupPage />
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

const styles = StyleSheet.create({
  mainWrapperBox: {
    backgroundColor: "#E3E3EE",
    flex: 1,
    padding: 15,
  },
});
