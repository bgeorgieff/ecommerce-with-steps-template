import {
  NEXT_STEP,
  PREVIOUS_STEP,
  NEW_ORDER,
  FETCH_CROSSALES,
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
    case NEW_ORDER:
      sessionStorage.clear();
      sessionStorage.setItem(
        "bookingDetails",
        JSON.stringify({
          ...action?.data,
        })
      );
      return {
        bookingDetails: {
          bookingStep: action?.data.bookingStep || 0,
        },
      };
    case FETCH_CROSSALES:
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};

export default bookingReducer;
