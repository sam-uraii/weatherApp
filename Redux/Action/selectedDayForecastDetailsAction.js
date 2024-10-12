import {
  RESET_SELECTED_DAY_DETAILS,
  UPDATE_SELECTED_DAY_DETAILS,
} from "../../Constants/ReduxConstants";

export const updateSelectedDayDetails = (
  selectedDayDetails,
  selectedDayIndex
) => {
  return {
    type: UPDATE_SELECTED_DAY_DETAILS,
    selectedDayDetails,
    selectedDayIndex,
  };
};
export const resetSelectedDayDetails = () => {
  return {
    type: RESET_SELECTED_DAY_DETAILS,
  };
};
