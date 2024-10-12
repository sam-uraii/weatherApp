import {
  UPDATE_SELECTED_CITY,
  UPDATE_WEATHER_DETAILS,
  WEATHER_DETAILS_LOADER,
} from "../../Constants/ReduxConstants";

const initialState = {
  selectedCity: null,
  weatherDetails: {},
  isWeatherDetailsLoading: false,
  weatherForecastDetails: [],
  isWeatherForecastDetailsLoading: false,
};
const weatherDetailsOfCityReducer = (state = initialState, action) => {
  const reducerObject = {
    UPDATE_SELECTED_CITY: {
      ...state,
      selectedCity: action.cityDetails,
    },
    UPDATE_WEATHER_DETAILS: {
      ...state,
      weatherDetails: action.weatherDetails,
    },
    WEATHER_DETAILS_LOADER: {
      ...state,
      isWeatherDetailsLoading: action.boolValue,
    },
    UPDATE_WEATHER_FORECAST_DETAILS: {
      ...state,
      weatherForecastDetails: action.weatherForecastDetails,
    },
    WEATHER_FORECAST_DETAILS_LOADER: {
      ...state,
      isWeatherForecastDetailsLoading: action.boolValue,
    },
  };

  if (reducerObject.hasOwnProperty(action.type)) {
    return reducerObject[action.type];
  } else {
    return state;
  }
};
export default weatherDetailsOfCityReducer;
