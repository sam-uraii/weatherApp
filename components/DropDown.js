import React, { useEffect } from "react";

import { SelectList } from "react-native-dropdown-select-list";

export default function DropDown({ updateNumberOfDaysForForecast, data }) {
  return (
    <SelectList
      boxStyles={{ margin: 5 }}
      setSelected={(val) => {
        console.log("dropdown update");

        updateNumberOfDaysForForecast(val);
      }}
      data={data}
      save="key"
      defaultOption={data[2]}
    />
  );
}
