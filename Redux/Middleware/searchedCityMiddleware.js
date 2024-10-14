import axios from "axios";
import {
  BASE_URL,
  END_POINT,
  formatBaseUrl,
} from "../../Constants/APIConstants";
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
      console.log("caling API", searchedKeyword);

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
      console.log(error.message);
    }
    dispatch(updateIsSearchLoading(false));
  };
};
