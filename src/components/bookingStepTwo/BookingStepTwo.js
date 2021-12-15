import { Col, Form, Row } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../state/actions/booking";
import BookingStepButtons from "../BookingStepButtons/BookingStepButtons";
import styles from "./bookingStepTwo.module.scss";
import { useForm } from "react-hook-form";

const BookingStepTwo = () => {
  const { register } = useForm();
  const dispatch = useDispatch();
  const bookingDetails = useSelector(
    (state) => state.bookingReducer.bookingDetails
  );
  const { nextStep, prevStep } = bindActionCreators(bookingActions, dispatch);

  const handleSubmit = async (e) => {
    try {
      nextStep({
        ...bookingDetails,
        carBrand: e.carBrand,
        carModel: e.carModel,
        carYear: e.carYear,
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

  const bookingStepButtonsProps = {
    handlePrevStep: handlePrevStep,
    type: "submit",
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className={`${styles["step-2-container"]} mx-auto`}>
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div
            className="mt-5 mx-auto"
            style={{ maxWidth: "313px", fontStyle: "normal" }}
          >
            <p className={`${styles["step-2-p-txt"]} text-center`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              molestie leo est, in
            </p>
          </div>
        </Col>
        <Col sm={8} className="mx-auto">
          <Row>
            <Form.Group as={Col} md="4">
              <Form.Select
                className={`${styles["booking-forms-down-arrow"]} ${styles["car-f-selects"]} main-blue mt-2 mt-md-0`}
                aria-label="Default select"
                defaultValue="Car Brand"
                {...register("carBrand")}
              >
                <option disabled>Car Brand</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Select
                className={`${styles["booking-forms-down-arrow"]} ${styles["car-f-selects"]} main-blue mt-2 mt-md-0`}
                aria-label="Default select"
                defaultValue="Model"
                {...register("carModel")}
              >
                <option disabled>Model</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Select
                className={`${styles["booking-forms-down-arrow"]} ${styles["car-f-selects"]} main-blue mt-2 mt-md-0`}
                aria-label="Default select"
                defaultValue="Year"
                {...register("carYear")}
              >
                <option disabled>Year</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <div className="d-flex justify-content-center my-5">
        <BookingStepButtons {...bookingStepButtonsProps} />
      </div>
    </Form>
  );
};

export default BookingStepTwo;
