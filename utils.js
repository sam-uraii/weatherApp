import { MONTH_MAP } from "./Constants/General";

export const dateFormatter = (dateString) => {
  dateValues = dateString.split("-");
  console.log(dateValues);

  return `${dateValues[2]}, ${MONTH_MAP[dateValues[1]]}`;
};
