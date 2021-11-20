import { useState } from "react";
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
  const [phone, setPhone] = useState(0);
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
          address: address,
          city: city,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
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
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="my-5">
          <Col
            sm={12}
            className="my-5 location-bg d-flex justify-content-center align-items-center"
          >
            <LocationForm address={setAddress} city={setCity} possibleLocations={[1, 2, 3]} />
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="my-5">
            <DeliveryDetails
              email={setEmail}
              fName={setFirstName}
              lName={setLastName}
              phone={setPhone}
            />
          </Col>
        </Row>
        <div className="d-flex justify-content-center mb-5">
          <BookingStepButtons handlePrevStep={handlePrevStep} />
        </div>
      </Form>
    </>
  ); 
};

export default BookingStepOne;
