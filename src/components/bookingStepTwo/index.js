import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../state/actions/booking";
import BookingStepButtons from "../bookingStepButtons";

const BookingStepTwo = () => {
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const dispatch = useDispatch();
  const bookingDetails = useSelector(
    (state) => state.bookingReducer.bookingDetails
  );
  const { nextStep, prevStep } = bindActionCreators(bookingActions, dispatch);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      nextStep({
        ...bookingDetails,
        carBrand: carBrand,
        carModel: carModel,
        carYear: carYear,
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
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="step-2-container mx-auto">
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div
            className="mt-5 mx-auto"
            style={{ maxWidth: "313px", fontStyle: "normal" }}
          >
            <p className="step-2-p-txt text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              molestie leo est, in
            </p>
          </div>
        </Col>
        <Col sm={8} className="mx-auto">
          <Row>
            <Form.Group as={Col} md="4">
              <Form.Select
                className="booking-forms-down-arrow main-blue mt-2 mt-md-0 car-f-selects"
                aria-label="Default select"
                defaultValue="Car Brand"
                onChange={(e) => setCarBrand(e.target.value)}
              >
                <option disabled>Car Brand</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Select
                className="booking-forms-down-arrow main-blue mt-2 mt-md-0 car-f-selects"
                aria-label="Default select"
                defaultValue="Model"
                onChange={(e) => setCarModel(e.target.value)}
              >
                <option disabled>Model</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Select
                className="booking-forms-down-arrow main-blue mt-2 mt-md-0 car-f-selects"
                aria-label="Default select"
                defaultValue="Year"
                onChange={(e) => setCarYear(e.target.value)}
              >
                <option disabled>Year</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <div className="d-flex justify-content-center my-5">
        <BookingStepButtons handlePrevStep={handlePrevStep} type={"submit"} />
      </div>
    </Form>
  );
};

export default BookingStepTwo;
