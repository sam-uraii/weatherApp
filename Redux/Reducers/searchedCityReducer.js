//initializing state
import {
  UPDATE_SEARCHED_CITIES,
  UPDATE_SEARCHED_KEYWORD,
  CLEAR_SEARCHED_CITY_REDUCER,
  UPDATE_IS_SEARCH_LOADING,
} from "../../Constants/ReduxConstants";
const initialState = {
  searchedCities: [],
  searchedKeyword: "",
  isSearchLoading: false,
};
const searchedCityReducer = (state = initialState, action) => {
  const reducerObject = {
    UPDATE_SEARCHED_KEYWORD: {
      ...state,
      searchedKeyword: action.keyword,
    },
    UPDATE_SEARCHED_CITIES: {
      ...state,
      searchedCities: action.cities,
    },
    UPDATE_IS_SEARCH_LOADING: {
      ...state,
      isSearchLoading: action.isSearchLoading,
    },
    CLEAR_SEARCHED_CITY_REDUCER: {
      ...state,
      searchedCities: [],
    },
  };

  if (reducerObject.hasOwnProperty(action.type)) {
    return reducerObject[action.type];
  } else {
    return state;
  }
};
export default searchedCityReducer;
