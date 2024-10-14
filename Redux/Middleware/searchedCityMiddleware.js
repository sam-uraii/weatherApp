import axios from "axios";
import {
  BASE_URL,
  END_POINT,
  formatBaseUrl,
  formatUrl,
} from "../../Constants/APIConstants";
import {
  clearSearchedCityReducer,
  updateIsSearchLoading,
  updateSearchedCities,
} from "../Action/searchedCityAction";
import api from "../../axiosAdaptor";

export const fetchSearchedCities = () => {
  return async (dispatch, getState) => {
    dispatch(updateIsSearchLoading(true));
    try {
      searchedKeyword = getState().searchedCityReducer.searchedKeyword;
      if (searchedKeyword.length) {
        const response = await api.get(
          `${formatUrl(END_POINT["search"])}&q=${searchedKeyword}`
        );

        dispatch(updateSearchedCities(response.data));
      } else {
        dispatch(clearSearchedCityReducer());
      }
    } catch (error) {
      console.log(error.message);
    }
    dispatch(updateIsSearchLoading(false));
  };
};
