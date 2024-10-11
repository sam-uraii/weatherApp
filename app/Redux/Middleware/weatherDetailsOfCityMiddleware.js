import axios from "axios";
import {
  BASE_URL,
  END_POINT,
  formatBaseUrl,
} from "../../../constants/APIConstants";
import {
  updateWeatherDetails,
  weatherDetailsLoader,
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
