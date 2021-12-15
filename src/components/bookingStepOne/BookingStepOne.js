import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Row } from "react-bootstrap";
import { bookingActions } from "state/actions/booking";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import LocationForm from "../LocationForm/LocationForm";
import BookingStepButtons from "../BookingStepButtons/BookingStepButtons";
import styles from "./bookingStepOne.module.scss";
import { useForm } from "react-hook-form";

const BookingStepOne = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const bookingDetails = useSelector(
    (state) => state.bookingReducer.bookingDetails
  );
  const serviceName = useSelector(
    (state) => state.bookingReducer.bookingDetails?.serviceName
  );
  const clientDetails = useSelector((state) => state.authReducer?.authData);
  const { nextStep, prevStep } = bindActionCreators(bookingActions, dispatch);

  const handleStepOneForm = async (e) => {
    try {
      nextStep({
        serviceName: serviceName,
        clientDetails: {
          name: clientDetails?.result.name || "",
          token: clientDetails?.result.token || "",
          address: e.address || "",
          city: e.city || "",
          firstName: e.firstName || "",
          lastName: e.lastName || "",
          phone: e.phone || "",
          email: e.email || "",
          deliveryDetails: e.addressDetails || "",
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

  const deliveryDetails = {
    emailVal: bookingDetails.clientDetails?.email,
    fNameVal: bookingDetails.clientDetails?.firstName,
    lNameVal: bookingDetails.clientDetails?.lastName,
    phoneVal: bookingDetails.clientDetails?.phone,
    addressVal: bookingDetails.clientDetails?.deliveryDetails,
  };

  const bookingStepButtonsProps = {
    type: "submit",
    handlePrevStep: handlePrevStep,
  };

  return (
    <>
      <Form onSubmit={handleSubmit((data) => handleStepOneForm(data))}>
        <Row className="mb-5 mt-3">
          <Col
            lg={12}
            className={`${styles["location-bg"]} mt-2 mb-5 my-md-5 d-flex justify-content-center align-items-center`}
          >
            <LocationForm
              setAddress={{ ...register("address") }}
              setCity={{ ...register("city") }}
            />
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="mt-5">
            <DeliveryDetails
              setEmail={{ ...register("email") }}
              setFirstName={{ ...register("firstName") }}
              setLastName={{ ...register("lastName") }}
              setPhone={{ ...register("phone") }}
              setAddressDetails={{ ...register("addressDetails") }}
            >
              {deliveryDetails}
            </DeliveryDetails>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mb-5">
          <BookingStepButtons {...bookingStepButtonsProps} />
        </div>
      </Form>
    </>
  );
};

export default BookingStepOne;
