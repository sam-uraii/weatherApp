import {
  UPDATE_SELECTED_CITY,
  UPDATE_WEATHER_DETAILS,
  WEATHER_DETAILS_LOADER,
} from "../../../constants/ReduxConstants";

export const updateSelectedCity = (cityDetails) => {
  return {
    type: UPDATE_SELECTED_CITY,
    cityDetails,
  };
};
export const updateWeatherDetails = (weatherDetails) => {
  return {
    type: UPDATE_WEATHER_DETAILS,
    weatherDetails,
  };
};
export const weatherDetailsLoader = (boolValue) => {
  return {
    type: WEATHER_DETAILS_LOADER,
    boolValue,
  };
};
