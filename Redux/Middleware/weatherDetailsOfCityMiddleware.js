import axios from "axios";
import { END_POINT, formatBaseUrl } from "../../Constants/APIConstants";
import {
  updateWeatherDetails,
  updateWeatherForecastDetails,
  weatherDetailsLoader,
  weatherForecastDetailsLoader,
} from "../Action/weatherDetailsOfCityAction";

export const getWeatherDetailsOfCity = () => {
  return async (dispatch, getState) => {
    dispatch(weatherDetailsLoader(true));
    try {
      selectedCity = getState().weatherDetailsOfCityReducer.selectedCity;
      const response = await axios({
        method: "get",
        url: `${formatBaseUrl(END_POINT["current"])}&q=${selectedCity.name}`,
      });
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
      const response = await axios({
        method: "get",
        url: `${formatBaseUrl(END_POINT["forecast"])}&q=${selectedCity.name}&days=${numberOfDays}&aqi=yes`,
      });
      dispatch(updateWeatherForecastDetails(response.data));
    } catch (error) {
      console.log("error", error);
    }
    dispatch(weatherForecastDetailsLoader(false));
  };
};
