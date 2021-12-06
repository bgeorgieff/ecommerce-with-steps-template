import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Row } from "react-bootstrap";
import { bookingActions } from "../../state/actions/booking";
import DeliveryDetails from "../deliveryDetails";
import LocationForm from "../locationForm";
import BookingStepButtons from "../bookingStepButtons";

const BookingStepOne = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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
          address: address || "",
          city: city || "",
          firstName: firstName || "",
          lastName: lastName || "",
          phone: phone || "",
          email: email || "",
          deliveryDetails: addressDetails || "",
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

  useEffect(() => {
    setEmail(bookingDetails.clientDetails?.email);
    setPhone(bookingDetails.clientDetails?.phone);
    setFirstName(bookingDetails.clientDetails?.firstName);
    setLastName(bookingDetails.clientDetails?.lastName);
    setAddressDetails(bookingDetails.clientDetails?.deliveryDetails);
  }, [bookingDetails]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-5 mt-3">
          <Col
            lg={12}
            className="mt-2 mb-5 my-md-5 location-bg d-flex justify-content-center align-items-center"
          >
            <LocationForm
              address={setAddress}
              city={setCity}
              possibleLocations={[1, 2, 3]}
            />
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="mt-5">
            <DeliveryDetails
              setEmail={setEmail}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setPhone={setPhone}
              setAddressDetails={setAddressDetails}
              emailVal={email}
              fNameVal={firstName}
              lNameVal={lastName}
              phoneVal={phone}
              addressVal={addressDetails}
            />
          </Col>
        </Row>
        <div className="d-flex justify-content-center mb-5">
          <BookingStepButtons handlePrevStep={handlePrevStep} type={"submit"} />
        </div>
      </Form>
    </>
  );
};

export default BookingStepOne;
