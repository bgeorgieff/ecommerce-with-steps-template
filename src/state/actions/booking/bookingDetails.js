import {
  NEXT_STEP,
  PREVIOUS_STEP,
  ADD_CROSSSALE,
  FETCH_CROSSALES,
} from "../../constants/actionTypes";
import { push } from "connected-react-router";
import * as api from "api";

export const nextStep = (details) => async (dispatch) => {
  // TODO ON STEP 2 FETCH CAR MAKE AND MODEL AND FILL IN KEYS FOR STEP 3
  // TODO ON STEP 3 CARD DETAILS VERIFICATION
  try {
    const stepForward = details.bookingStep + 1;
    if (details.cardDetails) {
      delete details.cardDetails;
    }

    dispatch(push(`/service-page/${details.serviceName}/step-${stepForward}`));
    dispatch({
      type: NEXT_STEP,
      data: {
        ...details,
        bookingStep: stepForward,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const prevStep = (details) => async (dispatch) => {
  try {
    const stepBack = details.bookingStep - 1 < 0 ? 0 : details.bookingStep - 1;

    if (stepBack === 0) {
      dispatch(push("/service-page"));
    } else {
      dispatch(push(`/service-page/${details.serviceName}/step-${stepBack}`));
    }
    dispatch({
      type: PREVIOUS_STEP,
      data: { ...details, bookingStep: stepBack },
    });
  } catch (e) {
    console.log(e);
  }
};

export const getCrossSales = () => async (dispatch) => {
  try {
    const crossales = await api.fetchCrossSales();
    dispatch({
      type: FETCH_CROSSALES,
      data: crossales,
    });
  } catch (e) {
    console.log(e);
  }
};

export const addCrossSale = (details) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CROSSSALE,
      data: details,
    });
  };
};
