import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { animationActions } from "../state/actions/serviceStep";

import PageWrapper from "../components/pageWrapper";
import ProcessSteps from "../components/processSteps";

import BookingStepOne from "../components/bookingStepOne";
import BookingStepTwo from "../components/bookingStepTwo";
import BookingStepThree from "../components/bookingStepThree";
import BookingStepFour from "../components/bookingStepFour";
import BookingStepFive from "../components/bookingStepFive";

const bookingStepComponents = [
  <BookingStepOne />,
  <BookingStepTwo />,
  <BookingStepThree />,
  <BookingStepFour />,
  <BookingStepFive />,
];

const BookingSteps = () => {
  const dispatch = useDispatch();
  const { autoAnimate } = bindActionCreators(animationActions, dispatch);
  const bookingStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );

  useEffect(() => {
    autoAnimate(false);
  }, [autoAnimate]);

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col>
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
