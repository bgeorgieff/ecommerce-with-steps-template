import {
  NEXT_STEP,
  PREVIOUS_STEP,
} from "../../constants/actionTypes";
import { push } from "connected-react-router";

export const nextStep = (details) => {
  const stepForward = details.bookingStep + 1;
  return (dispatch) => {
    dispatch(push(`/service-page/${details.serviceId}/step-${stepForward}`));
    dispatch({
      type: NEXT_STEP,
      data: { ...details, bookingStep: stepForward },
    });
  };
};

export const prevStep = (details) => {
  const stepBack = details.bookingStep - 1 < 0 ? 0 : details.bookingStep - 1;
  return (dispatch) => {
    if (stepBack === 0) {
      dispatch(push("/service-page"));
    } else {
      dispatch(push(`/service-page/${details.serviceId}/step-${stepBack}`));
    }
    dispatch({
      type: PREVIOUS_STEP,
      data: { ...details, bookingStep: stepBack },
    });
  };
};
