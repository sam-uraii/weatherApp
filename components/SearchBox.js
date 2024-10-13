import { SearchBar } from "@rneui/themed";
import React from "react";

export default function SearchBox({
  updateSearch,
  searchedKeyword,
  onClearCallBack,
  setInputRef,
  isSearchLoading,
  onFocus,
}) {
  return (
    <SearchBar
      ref={setInputRef}
      inputContainerStyle={{ height: 40 }}
      onFocus={() => onFocus()}
      placeholder="City Name..."
      onChangeText={updateSearch}
      value={searchedKeyword}
      lightTheme={true}
      onClear={onClearCallBack}
      round={true}
      showLoading={isSearchLoading}
    />
  );
}
