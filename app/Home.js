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
}) => {
  const [areWeatherDetailsVisible, setAreWeatherDetailsVisible] =
    useState(false);
  const [isSearchedCityListVisible, setIsSearchedCityListVisible] =
    useState(false);
  const [howManyForecastDays, setHowManyForecastDays] = useState(4);
  let inputRef = useRef(null);
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
        <ActivityIndicator size={30} />
      ) : (
        areWeatherDetailsVisible && (
          <CurrentWeatherInfo weatherDetails={weatherDetails} />
        )
      )}

      {isWeatherForecastDetailsLoading ? (
        <ActivityIndicator size={30} style={{ top: 200 }} />
      ) : (
        areWeatherDetailsVisible && (
          <>
            <DropDown
              howManyForecastDays={howManyForecastDays}
              setHowManyForecastDays={setHowManyForecastDays}
              data={FORECAST_DAYS}
            />
            <WeatherForecastDaysList
              selectedCity={selectedCity}
              weatherForecastDetails={weatherForecastDetails}
            />
          </>
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
});

export default connect(mapStateToProps, {
  fetchSearchedCities,
  updateSearchedKeyword,
  clearSearchedCityReducer,
})(Home);
{
  /* <>
<Text>{`${weatherDetails.location.region},${weatherDetails.location.name}, ${weatherDetails.location.country},`}</Text>
<Text>{`Latitude: ${weatherDetails.location.lat}             longitude: ${weatherDetails.location.lon},                    Time: ${weatherDetails.location.localtime},`}</Text>
<Text>---------------------</Text>
<Text>{`last_updated :${weatherDetails.current.last_updated},`}</Text>
<Text>{`Temp :${weatherDetails.current.temp_c}C or ${weatherDetails.current.temp_f}F`}</Text>
<Text>{`Feels like :${weatherDetails.current.feelslike_c}C or ${weatherDetails.current.feelslike_f}F`}</Text>
<Text>{`Condition :${weatherDetails.current.condition.text},`}</Text>
<Text>{`Wind :${weatherDetails.current.wind_mph}mph or ${weatherDetails.current.wind_kph} kph,`}</Text>
<Text>{`Wind Degree :${weatherDetails.current.wind_degree},`}</Text>
<Text>{`Wind Direction :${weatherDetails.current.wind_dir},`}</Text>
<Text>{`Pressure :${weatherDetails.current.pressure_mb},`}</Text>
<Text>{`Precipitate :${weatherDetails.current.precip_mm},`}</Text>
<Text>{`Humind :${weatherDetails.current.humidity},`}</Text>
<Text>{`Cloud :${weatherDetails.current.cloud},`}</Text>
<Text>{`Wind Chill :${weatherDetails.current.windchill_c} or ${weatherDetails.current.windchill_f},`}</Text>
<Text>{`Heat Index :${weatherDetails.current.heatindex_c} or ${weatherDetails.current.heatindex_f},`}</Text>
<Text>{`Dew  :${weatherDetails.current.dewpoint_c} or ${weatherDetails.current.dewpoint_f},`}</Text>
<Text>{`UV :${weatherDetails.current.uv},`}</Text>
<Text>{`Gust  :${weatherDetails.current.gust_mph}mph or ${weatherDetails.current.gust_kph}kph,`}</Text>
</> */
}
