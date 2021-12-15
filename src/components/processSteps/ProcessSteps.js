import { useState } from "react";
import { useInViewEffect } from "react-hook-inview";
import { Row, Col, Container } from "react-bootstrap";
import { Title } from "components";
import { bookingSteps } from "./steps";
import { useSelector } from "react-redux";
import { ProgressBarManual } from "./ProgressBarManual";
import { ProgressBar } from "./ProgressBar";
import PropTypes from "prop-types";

const ProcessSteps = (props) => {
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
          {props.children?.title ? (
            <Title style={{ textAlign: "center" }}>
              {props.children?.title}
            </Title>
          ) : (
            ""
          )}
          <div
            style={{ maxWidth: "583px" }}
            className={
              autoAnimateState
                ? "d-block mx-auto mt-4 mb-8 gx-0"
                : "d-block mx-auto my-5 gx-0"
            }
          >
            {props.children?.text ? (
              <p className="text-center pb-5 main-font px-2">
                {props.children?.text}
              </p>
            ) : (
              ""
            )}
            <div ref={visibilityRef} className="mt-6">
              {autoAnimateState ? (
                <ProgressBar visible={isVisible}>{bookingSteps}</ProgressBar>
              ) : (
                <ProgressBarManual>{bookingSteps}</ProgressBarManual>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

ProcessSteps.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};

export default ProcessSteps;
