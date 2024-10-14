import { ActivityIndicator, View, Appearance, StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
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
import { defaultBackgroundColor } from "../Constants/Colors";
import SearchBox from "../Components/SearchBox";
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
    if (selectedCity) {
      getWeatherForecastDetailsOfCity();
    }
  }, [numberOfDaysForForecast]);
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

  const updateSearch = async (keyword) => {
    updateSearchedKeyword(keyword);
    fetchSearchedCities();
  };

  const onFocus = () => {
    if (searchedCities.length) {
      setIsSearchedCityListVisible(true);
    }
  };
  const onClearCallBack = () => {
    clearSearchedCityReducer();
    inputRef.focus();
  };
  const setInputRef = (searchRef) => {
    inputRef = searchRef;
  };
  return (
    <View style={styles.mainWrapperBox}>
      <SearchBox
        updateSearch={updateSearch}
        searchedKeyword={searchedKeyword}
        isSearchLoading={isSearchLoading}
        setInputRef={setInputRef}
        onFocus={onFocus}
        onClearCallBack={onClearCallBack}
      />

      {isSearchedCityListVisible && <SearchedCityList />}
      {isWeatherDetailsLoading ? (
        <ActivityIndicator
          size={35}
          color={Appearance.getColorScheme() === "dark" ? "white" : "black"}
        />
      ) : (
        areWeatherDetailsVisible && (
          <>
            <CurrentWeatherInfo weatherDetails={weatherDetails} />
            <DropDown
              updateNumberOfDaysForForecast={updateNumberOfDaysForForecast}
              data={FORECAST_DAYS}
              numberOfDaysForForecast={numberOfDaysForForecast}
            />
          </>
        )
      )}

      {isWeatherForecastDetailsLoading ? (
        <ActivityIndicator
          size={35}
          style={{ top: isWeatherDetailsLoading ? 250 : 0 }}
          color={Appearance.getColorScheme() === "dark" ? "white" : "black"}
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

const styles = StyleSheet.create({
  mainWrapperBox: {
    backgroundColor: defaultBackgroundColor,
    flex: 1,
  },
});
