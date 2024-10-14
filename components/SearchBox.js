import { SearchBar } from "@rneui/themed";
import React, { useEffect, useRef } from "react";
import { updateSearchedKeyword } from "../Redux/Action/searchedCityAction";
import { connect } from "react-redux";

const SearchBox = ({
  shouldBlur,
  searchedKeyword,
  onClearCallBack,
  isSearchLoading,
  onFocus,
  fetchCallback,
  updateSearchedKeyword,
}) => {
  let inputRef = useRef(null);

  useEffect(() => {
    shouldBlur && inputRef.blur();
  }, [shouldBlur]);
  const updateSearch = async (keyword) => {
    updateSearchedKeyword(keyword);
    fetchCallback();
  };
  const setInputRef = (searchRef) => {
    inputRef = searchRef;
  };
  const onClear = () => {
    onClearCallBack();
    inputRef.focus();
  };

  return (
    <SearchBar
      ref={setInputRef}
      inputContainerStyle={{ height: 40, backgroundColor: "white" }}
      onFocus={() => onFocus()}
      placeholder="City Name..."
      onChangeText={updateSearch}
      value={searchedKeyword}
      lightTheme={true}
      onClear={onClear}
      round={true}
      showLoading={isSearchLoading}
    />
  );
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {
  updateSearchedKeyword,
})(SearchBox);
