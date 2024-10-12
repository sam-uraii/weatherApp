import { MONTH_MAP } from "./Constants/General";

export const dateFormatter = (dateString) => {
  dateValues = dateString.split("-");
  return `${dateValues[2]}, ${MONTH_MAP[dateValues[1]]}`;
};
