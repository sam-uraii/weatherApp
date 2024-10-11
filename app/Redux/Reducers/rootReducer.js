import { combineReducers } from "redux";
import searchedCityReducer from "./searchedCityReducer";
import weatherDetailsOfCityReducer from "./weatherDetailsOfCityReducer";

export default combineReducers({
  searchedCityReducer,
  weatherDetailsOfCityReducer,
});
