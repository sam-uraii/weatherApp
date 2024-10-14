import { MONTH_MAP } from "./Constants/General";

export const dateFormatter = (dateString) => {
  dateValues = dateString.split("-");
  return `${dateValues[2]}, ${MONTH_MAP[dateValues[1]]}`;
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (value) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(value);
    }, delay);
  };
};
