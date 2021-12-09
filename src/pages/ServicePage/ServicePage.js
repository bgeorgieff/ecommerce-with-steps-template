import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { PageWrapper, ProcessSteps, Services } from "components";
import { animationActions } from "../../state/actions/serviceStep";
import { NEW_ORDER } from "../../state/constants/actionTypes";
import { homeServiceCardItems } from "pages/partials";

const ServicePage = () => {
  const dispatch = useDispatch();
  const { autoAnimate } = bindActionCreators(animationActions, dispatch);
  const history = useHistory();
  const bookingStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );
  const serviceName = useSelector(
    (state) => state.bookingReducer.bookingDetails?.serviceName
  );

  const serviceItemsProps = {
    cardItems: homeServiceCardItems,
    bgActive: false,
  };

  useEffect(() => {
    autoAnimate(false);

    if (!!bookingStep) {
      history.push(`/service-page/${serviceName}/step-${bookingStep}`);
    }
    // CHECK IF IT IS THE LAST BOOKING STEP
    if (bookingStep === 4) {
      dispatch({
        type: NEW_ORDER,
        data: { bookingDetails: { bookingStep: 0 } },
      });
      history.push("/service-page/");
    }
  }, [autoAnimate, bookingStep, history, serviceName, dispatch]);

  return (
    <PageWrapper>
      <Container fluid className="px-0">
        <Row className="gx-0">
          <Col style={{ overflow: "hidden" }}>
            <ProcessSteps
              title={"Process Steps"}
              text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
      molestie leo est, in auctor lectus elementum congue. Nulla neque
      nisi, placerat nec dolor nec, semper sodales mauris.`}
            />
          </Col>
        </Row>
      </Container>
      <Services {...serviceItemsProps} />
    </PageWrapper>
  );
};

export default ServicePage;
