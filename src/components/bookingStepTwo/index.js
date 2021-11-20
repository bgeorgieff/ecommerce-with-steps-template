import { Form } from "react-bootstrap"
import { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../state/actions/booking";

const BookingStepTwo = () => {
  const dispatch = useDispatch();
  const bookingDetails = useSelector(
    (state) => state.bookingReducer.bookingDetails
  );
  const serviceId = useSelector(
    (state) => state.bookingReducer.bookingDetails?.serviceId
  );
  const clientDetails = useSelector((state) => state.authReducer?.authData);
  const { nextStep, prevStep } = bindActionCreators(bookingActions, dispatch);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    nextStep({
      serviceId: serviceId,
      clientDetails: {
        name: clientDetails?.result.name || "",
        token: clientDetails?.result.token || "",

      },
      bookingStep: bookingDetails?.bookingStep,
    });
  } catch (e) {
    console.log(e);
  }
};

const handlePrevStep = async (e) => {
  e.preventDefault();
  try {
    prevStep({
      ...bookingDetails,
      bookingStep: bookingDetails?.bookingStep,
    });
  } catch (e) {
    console.log(e);
  }
};
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        step 2
      <button type="button" onClick={(e) => handlePrevStep(e)}>
          Previous Step
        </button>
        <button type="submit">Next Step</button>
      </Form>
    </div>
  )
}

export default BookingStepTwo