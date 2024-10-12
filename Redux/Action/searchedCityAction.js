import {
  CLEAR_SEARCHED_CITY_REDUCER,
  UPDATE_IS_SEARCH_LOADING,
  UPDATE_SEARCHED_CITIES,
  UPDATE_SEARCHED_KEYWORD,
} from "../../Constants/ReduxConstants";

export const updateSearchedKeyword = (keyword) => {
  return {
    type: UPDATE_SEARCHED_KEYWORD,
    keyword,
  };
};
export const updateSearchedCities = (cities) => {
  return {
    type: UPDATE_SEARCHED_CITIES,
    cities,
  };
};
export const updateIsSearchLoading = (boolValue) => {
  return {
    type: UPDATE_IS_SEARCH_LOADING,
    isSearchLoading: boolValue,
  };
};
export const clearSearchedCityReducer = () => {
  return {
    type: CLEAR_SEARCHED_CITY_REDUCER,
  };
};
