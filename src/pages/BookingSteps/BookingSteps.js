import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "state/actions/booking";
import { PageWrapper, ProcessSteps } from "components";
import {
  BookingStepOne,
  BookingStepTwo,
  BookingStepThree,
  BookingStepFour,
} from "./partials";

const bookingStepComponents = [
  <BookingStepOne />,
  <BookingStepTwo />,
  <BookingStepThree />,
  <BookingStepFour />,
];

const BookingSteps = () => {
  const dispatch = useDispatch();
  const { getCrossSales } = bindActionCreators(bookingActions, dispatch);
  const bookingStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );

  useEffect(() => {
    getCrossSales();
  }, [getCrossSales]);

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col style={{ overflow: "hidden" }}>
            <ProcessSteps />
            {bookingStepComponents.map((e, i) =>
              bookingStep - 1 === i ? <div key={i}>{e}</div> : ""
            )}
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default BookingSteps;
