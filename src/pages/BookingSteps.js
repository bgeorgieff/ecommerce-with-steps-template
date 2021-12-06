import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { animationActions } from "../state/actions/serviceStep";
import { bookingActions } from "../state/actions/booking";

import PageWrapper from "../components/pageWrapper";
import ProcessSteps from "../components/processSteps";

import BookingStepOne from "../components/bookingStepOne";
import BookingStepTwo from "../components/bookingStepTwo";
import BookingStepThree from "../components/bookingStepThree";
import BookingStepFour from "../components/bookingStepFour";

const bookingStepComponents = [
  <BookingStepOne />,
  <BookingStepTwo />,
  <BookingStepThree />,
  <BookingStepFour />,
];

const BookingSteps = () => {
  const dispatch = useDispatch();
  const { autoAnimate } = bindActionCreators(animationActions, dispatch);
  const { getCrossSales } = bindActionCreators(bookingActions, dispatch);
  const bookingStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );

  useEffect(() => {
    autoAnimate(false);
    getCrossSales();
  }, [autoAnimate, getCrossSales]);

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
