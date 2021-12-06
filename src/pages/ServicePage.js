import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import PageWrapper from "../components/pageWrapper";
import ProcessSteps from "../components/processSteps";
import Services from "../components/services";
import { animationActions } from "../state/actions/serviceStep";
import { NEW_ORDER } from "../state/constants/actionTypes";
import { homePageServiceItems } from "../utils/CardCollection";

const ServicePage = () => {
  const dispatch = useDispatch();
  const { autoAnimate } = bindActionCreators(animationActions, dispatch);
  const history = useHistory();
  const bookingStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );
  const serviceId = useSelector(
    (state) => state.bookingReducer.bookingDetails?.serviceId
  );

  useEffect(() => {
    autoAnimate(false);

    if (!!bookingStep) {
      history.push(`/service-page/${serviceId}/step-${bookingStep}`);
    }
    // CHECK IF IT IS THE LAST BOOKING STEP
    if (bookingStep === 4) {
      dispatch({
        type: NEW_ORDER,
        data: { bookingDetails: { bookingStep: 0 } },
      });
      history.push("/service-page/");
    }
  }, [autoAnimate, bookingStep, history, serviceId, dispatch]);

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
      <Services cardItems={homePageServiceItems} bgActive={false} />
    </PageWrapper>
  );
};

export default ServicePage;
