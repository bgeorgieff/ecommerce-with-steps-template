import { useState } from "react";
import { useInViewEffect } from "react-hook-inview";
import { Row, Col, Container } from "react-bootstrap";
import { Title } from "components";
import PropTypes from "prop-types";
import ProgressBarManual from "./ProgressBarManual/ProgressBarManual";
import ProgressBar from "./ProgressBar/ProgressBar";

const ProcessSteps = (props) => {
  const { text, title, autoAnimate } = props;
  const [isVisible, setIsVisible] = useState(false);

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
      className={autoAnimate ? "fluid-keys-container gx-0 pt-6" : "gx-0 pt-6"}
    >
      <Row className="gx-0">
        <Col lg={12} sm={12} style={{ zIndex: "1" }}>
          {title ? <Title style={{ textAlign: "center" }}>{title}</Title> : ""}
          <div
            style={{ maxWidth: "600px" }}
            className={
              autoAnimate
                ? "d-block mx-auto mt-4 mb-8 gx-0"
                : "d-block mx-auto my-5 gx-0"
            }
          >
            {text ? (
              <p className="text-center pb-5 main-font px-2">{text}</p>
            ) : (
              ""
            )}
            <div ref={visibilityRef} className="mt-3">
              {autoAnimate ? (
                <ProgressBar inView={isVisible} />
              ) : (
                <ProgressBarManual />
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
