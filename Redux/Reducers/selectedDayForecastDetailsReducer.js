import {
  RESET_SELECTED_DAY_DETAILS,
  UPDATE_SELECTED_DAY_DETAILS,
} from "@/Constants/ReduxConstants";

const initialState = {
  selectedDayDetails: null,
  selectedDayIndex: null,
};
const selectedDayForecastDetailsReducer = (state = initialState, action) => {
  const reducerObject = {
    UPDATE_SELECTED_DAY_DETAILS: {
      ...state,
      selectedDayDetails: action.selectedDayDetails,
      selectedDayIndex: action.selectedDayIndex,
    },
    RESET_SELECTED_DAY_DETAILS: {
      ...state,
      selectedDayDetails: null,
      selectedDayIndex: null,
    },
  };

  if (reducerObject.hasOwnProperty(action.type)) {
    return reducerObject[action.type];
  } else {
    return state;
  }
};
export default selectedDayForecastDetailsReducer;
