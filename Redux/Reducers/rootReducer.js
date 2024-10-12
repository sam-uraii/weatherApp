import { combineReducers } from "redux";
import searchedCityReducer from "./searchedCityReducer";
import weatherDetailsOfCityReducer from "./weatherDetailsOfCityReducer";
import selectedDayForecastDetailsReducer from "./selectedDayForecastDetailsReducer";

export default combineReducers({
  searchedCityReducer,
  weatherDetailsOfCityReducer,
  selectedDayForecastDetailsReducer,
});
