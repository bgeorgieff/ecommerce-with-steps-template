import {
  NEXT_STEP,
  PREVIOUS_STEP,
} from "../constants/actionTypes";

const initialState = {
  bookingDetails: JSON.parse(sessionStorage.getItem("bookingDetails")),
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      sessionStorage.setItem(
        "bookingDetails",
        JSON.stringify({
          ...action?.data,
          bookingStep: action?.data.bookingStep || 0,
        })
      );
      return {
        ...state,
        bookingDetails: {
          ...action?.data,
          bookingStep: action?.data.bookingStep || 0,
        },
      };
    case PREVIOUS_STEP:
      sessionStorage.setItem(
        "bookingDetails",
        JSON.stringify({
          ...action?.data,
          bookingStep: action?.data.bookingStep || 0,
        })
      );
      return {
        ...state,
        bookingDetails: {
          ...action?.data,
          bookingStep: action?.data.bookingStep || 0,
        },
      };
    default:
      return state;
  }
};

export default bookingReducer;
