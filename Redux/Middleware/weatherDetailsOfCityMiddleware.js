import axios from "axios";
import {
  API_KEY,
  END_POINT,
  formatBaseUrl,
  formatUrl,
} from "../../Constants/APIConstants";
import {
  updateWeatherDetails,
  updateWeatherForecastDetails,
  weatherDetailsLoader,
  weatherForecastDetailsLoader,
} from "../Action/weatherDetailsOfCityAction";
import api from "../../axiosAdaptor";

export const getWeatherDetailsOfCity = () => {
  return async (dispatch, getState) => {
    dispatch(weatherDetailsLoader(true));
    try {
      selectedCity = getState().weatherDetailsOfCityReducer.selectedCity;
      const response = await api.get(
        `${formatUrl(END_POINT["current"])}&q=${selectedCity.name}`
      );
      dispatch(updateWeatherDetails(response.data));
    } catch (error) {
      console.log("error", error);
    }
    dispatch(weatherDetailsLoader(false));
  };
};
export const getWeatherForecastDetailsOfCity = () => {
  return async (dispatch, getState) => {
    dispatch(weatherForecastDetailsLoader(true));
    try {
      const selectedCity = getState().weatherDetailsOfCityReducer.selectedCity;
      const numberOfDays =
        getState().weatherDetailsOfCityReducer.numberOfDaysForForecast;
      const response = await api.get(
        `${formatUrl(END_POINT["forecast"])}&q=${selectedCity.name}&days=${numberOfDays}&aqi=yes`
      );

      dispatch(updateWeatherForecastDetails(response.data));
    } catch (error) {
      console.log("error", error);
    }
    dispatch(weatherForecastDetailsLoader(false));
  };
};
