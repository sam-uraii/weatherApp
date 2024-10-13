import React, { useEffect } from "react";

import { SelectList } from "react-native-dropdown-select-list";

export default function DropDown({ updateNumberOfDaysForForecast, data }) {
  return (
    <SelectList
      boxStyles={{ margin: 5, backgroundColor: "#fff" }}
      dropdownStyles={{ backgroundColor: "#fff" }}
      setSelected={(val) => {
        updateNumberOfDaysForForecast(val);
      }}
      data={data}
      save="key"
      defaultOption={data[2]}
    />
  );
}
