import { useState } from "react";
import { useInViewEffect } from "react-hook-inview";
import { Row, Col, Container } from "react-bootstrap";
import Progress from "../progressBar";
import Title from "../title";
import { bookingSteps } from "../../utils/bookingSteps";
import { useSelector } from "react-redux";
import ProgressBarManual from "../progressBarManual";

const ProcessSteps = ({ title, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const autoAnimateState = useSelector((state) => state.autoAnimateReducer);

  const visibilityRef = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.5 }
  );

  return (
    <Container
      fluid
      className={
        autoAnimateState ? "fluid-keys-container gx-0 pt-6" : "gx-0 pt-6"
      }
    >
      <Row className="gx-0">
        <Col lg={12} sm={12} style={{ zIndex: "1" }}>
          {title ? <Title text={title} style={{ textAlign: "center" }} /> : ""}
          <div
            style={{ maxWidth: "583px" }}
            className={
              autoAnimateState
                ? "d-block mx-auto mt-4 mb-8 gx-0"
                : "d-block mx-auto my-5 gx-0"
            }
          >
            {text ? (
              <p className="text-center pb-5 main-font px-2">{text}</p>
            ) : (
              ""
            )}
            <div ref={visibilityRef} className="mt-6">
              {autoAnimateState ? (
                <Progress
                  visible={isVisible}
                  initialState={1}
                  endState={100}
                  eventCollection={bookingSteps}
                />
              ) : (
                <ProgressBarManual
                  initialState={1}
                  endState={100}
                  eventCollection={bookingSteps}
                />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProcessSteps;
