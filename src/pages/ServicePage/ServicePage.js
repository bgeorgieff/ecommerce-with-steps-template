import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper, ProcessSteps, Services } from "components";
import { bindActionCreators } from "redux";
import { bookingActions } from "state/actions/booking";

const ServicePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookingStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );
  const serviceName = useSelector(
    (state) => state.bookingReducer.bookingDetails?.serviceName
  );
  const { newCrossSaleArr, newOrder } = bindActionCreators(
    bookingActions,
    dispatch
  );

  useEffect(() => {
    if (!!bookingStep) {
      history.push(`/service-page/${serviceName}/step-${bookingStep}`);
    } else {
      newCrossSaleArr();
      newOrder({ bookingDetails: { bookingStep: 0 } });
    }

    if (bookingStep === 4) {
      newCrossSaleArr();
      newOrder({ bookingDetails: { bookingStep: 0 } });
      history.push("/service-page/");
    }
  }, [bookingStep, history, serviceName, dispatch, newCrossSaleArr, newOrder]);

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
      <Services bgActive={false} home={true} />
    </PageWrapper>
  );
};

export default ServicePage;
