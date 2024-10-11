import axios from "axios";
import {
  BASE_URL,
  END_POINT,
  formatBaseUrl,
} from "../../../constants/APIConstants";
import {
  clearSearchedCityReducer,
  updateIsSearchLoading,
  updateSearchedCities,
} from "../Action/searchedCityAction";

export const fetchSearchedCities = () => {
  return async (dispatch, getState) => {
    dispatch(updateIsSearchLoading(true));
    try {
      searchedKeyword = getState().searchedCityReducer.searchedKeyword;
      if (searchedKeyword.length) {
        const response = await axios({
          method: "get",
          url: `${formatBaseUrl(END_POINT["search"])}&q=${searchedKeyword}`,
        });
        dispatch(updateSearchedCities(response.data));
      } else {
        dispatch(clearSearchedCityReducer());
      }
    } catch (error) {
      console.log("error", error);
    }
    dispatch(updateIsSearchLoading(false));
  };
};
