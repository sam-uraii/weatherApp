import React, { useEffect } from "react";

import { SelectList } from "react-native-dropdown-select-list";

export default function DropDown({
  howManyForecastDays,
  setHowManyForecastDays,
  data,
}) {
  return (
    <SelectList
      boxStyles={{ margin: 5 }}
      setSelected={(val) => setHowManyForecastDays(val)}
      data={data}
      save="key"
      defaultOption={data[2]}
    />
  );
}
