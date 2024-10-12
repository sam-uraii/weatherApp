import {
  UPDATE_SELECTED_CITY,
  UPDATE_WEATHER_DETAILS,
  UPDATE_WEATHER_FORECAST_DETAILS,
  WEATHER_DETAILS_LOADER,
  WEATHER_FORECAST_DETAILS_LOADER,
} from "../../Constants/ReduxConstants";

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
export const updateWeatherForecastDetails = (weatherForecastDetails) => {
  return {
    type: UPDATE_WEATHER_FORECAST_DETAILS,
    weatherForecastDetails: weatherForecastDetails.forecast.forecastday,
  };
};
export const weatherForecastDetailsLoader = (boolValue) => {
  return {
    type: WEATHER_FORECAST_DETAILS_LOADER,
    boolValue,
  };
};
