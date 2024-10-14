import React from "react";

import { SelectList } from "react-native-dropdown-select-list";

export default function DropDown({
  updateNumberOfDaysForForecast,
  data,
  numberOfDaysForForecast,
}) {
  const dropDownWidth = "90%";
  return (
    <SelectList
      boxStyles={{
        margin: 5,
        backgroundColor: "#fff",
        width: dropDownWidth,
      }}
      dropdownStyles={{
        backgroundColor: "#fff",
        // width: dropDownWidth,
      }}
      setSelected={(val) => {
        updateNumberOfDaysForForecast(val);
      }}
      data={data}
      save="key"
      defaultOption={data[numberOfDaysForForecast - 1]}
    />
  );
}
