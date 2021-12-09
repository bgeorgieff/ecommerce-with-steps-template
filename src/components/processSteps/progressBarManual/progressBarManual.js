import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import styles from "../processSteps.module.scss";
import PropTypes from "prop-types";
import { useWindowSize } from "hooks";

let _i = 0;

const ProgressBarManual = (props) => {
  const { initialState, eventCollection } = props;
  const mobileWidth = useWindowSize("sm");
  const currentStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );
  const endState = 100;
  const [progress, setProgress] = useState(initialState);
  const [dotLength, setDotLength] = useState(0);
  const dotEvents = useRef([]);
  const line = useRef(null);
  const textEvents = useRef([]);
  const linesContainer = useRef(null);
  const activeDots = dotEvents.current.length;

  const textTransitionBlue = (e) => {
    e.querySelector("p").style.color = "#2D69B3";
  };

  const textTransitionGreen = (e) => {
    e.querySelector("p").style.color = "#36a341";
  };

  const textTransitionGrey = (e) => {
    e.querySelector("p").style.color = "#B2B3B4";
  };

  const transitionBlue = (e) => {
    e.style.backgroundColor = "#2D69B3";
    e.style.transform = "scale(1.06) translateY(-55%)";
    e.querySelector(".ps-image-container-g > svg").style.fill = "#2D69B3";
  };

  const transitionGreen = (e) => {
    e.style.backgroundColor = "#36a341";
    e.querySelector(".ps-image-container-g > svg").style.fill = "#36a341";
    e.querySelector(".ps-image-container-g > svg").style.transitionProperty =
      "color";
  };

  const transitionGrey = (e) => {
    e.style.backgroundColor = "#B2B3B4";
    e.style.transform = "scale(1) translateY(-55%)";
    e.querySelector(".ps-image-container-g > svg").style.fill = "#B2B3B4";
  };

  useEffect(() => {
    if (_i <= activeDots) {
      _i = currentStep ? currentStep : 0;
      const prevSteps = dotEvents.current.slice(0, _i);
      const nextSteps = dotEvents.current.slice(_i + 1, activeDots);
      const prevText = textEvents.current.slice(0, _i);
      const nextText = textEvents.current.slice(_i + 1, activeDots);

      if (_i === activeDots && _i > 0) {
        transitionGreen(dotEvents.current[_i - 1]);
        textTransitionGreen(textEvents.current[_i - 1]);
      } else if (dotEvents.current[_i]) {
        transitionBlue(dotEvents.current[_i]);
        textTransitionBlue(textEvents.current[_i]);
      }

      if (_i === 4) {
        transitionGreen(dotEvents.current[_i]);
        textTransitionGreen(textEvents.current[_i]);
      }

      setDotLength(prevSteps.length * 25);

      if (prevText.length > 0) {
        prevText.forEach((e) => {
          textTransitionGreen(e);
        });
      }

      if (nextText.length > 0) {
        nextText.forEach((e) => {
          textTransitionGrey(e);
        });
      }

      if (prevSteps.length > 0) {
        prevSteps.forEach((e) => {
          transitionGreen(e);
        });
      }

      if (nextSteps.length > 0) {
        nextSteps.forEach((e) => {
          transitionGrey(e);
        });
      }

      // const getDotPosition = dotEvents.current[_i].getBoundingClientRect();
      // var x = window.innerWidth / 2;
      // TODO Logic here has to be reworked at some point

      if (mobileWidth) {
        if (_i === 0) {
          linesContainer.current.style.transform = `scale(1.5) translateX(32%)`;
        } else if (_i === 1) {
          linesContainer.current.style.transform = "scale(1.5) translateX(12%)";
        } else if (_i === 2) {
          linesContainer.current.style.transform =
            "scale(1.5) translateX(-9.5%)";
        } else if (_i === 3) {
          linesContainer.current.style.transform =
            "scale(1.5) translateX(-29%)";
        } else if (_i === 4) {
          linesContainer.current.style.transform =
            "scale(1.5) translateX(-47%)";
        }
      }
    }
  }, [currentStep, dotEvents, activeDots, dotLength, mobileWidth]);

  useEffect(() => {
    if (progress < dotLength && _i > 0 && progress < endState) {
      line.current.style.height = "100%";
      const timer = setInterval(() => {
        setProgress((e) => e + 1);
      }, 30);
      return () => {
        clearInterval(timer);
      };
    }
    if (progress > dotLength && _i > 0 && progress >= initialState) {
      line.current.style.height = "100%";
      const timer = setInterval(() => {
        setProgress((e) => e - 1);
      }, 30);
      return () => {
        clearInterval(timer);
      };
    }
  }, [progress, dotLength, endState, initialState]);

  const textRef = (el) => {
    if (el && !textEvents.current.includes(el)) {
      textEvents.current.push(el);
    }
  };

  const dots = (el) => {
    if (el && !dotEvents.current.includes(el)) {
      dotEvents.current.push(el);
    }
  };

  return (
    <div ref={linesContainer} className={styles["lines-container"]}>
      <Row className="gx-0">
        <Col className="mx-5">
          <div className={styles["timeline-line-grey"]}>
            <span
              ref={line}
              style={{ width: `${progress}%` }}
              className={styles["timeline-cover-line-grey"]}
            ></span>
          </div>
        </Col>
      </Row>
      <Row className="gx-0">
        {eventCollection
          ? eventCollection.map((e, i) => (
              <Col key={i}>
                <div ref={dots} className={styles["dots-grey"]}>
                  <div
                    className="text-center d-flex align-items-center justify-content-center"
                    style={{ color: "white" }}
                  >
                    <div style={{ height: "100%", lineHeight: "130%" }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="ps-image-container-g">{e.imageGrey}</div>
                </div>
                <div ref={textRef} className="text-center">
                  <p
                    className={`${styles["font-grey"]} ${styles["font-adjust"]}`}
                  >
                    {e.name}
                  </p>
                </div>
              </Col>
            ))
          : ""}
      </Row>
    </div>
  );
};

ProgressBarManual.propTypes = {
  initialState: PropTypes.number,
  eventCollection: PropTypes.arrayOf(PropTypes.object),
};

export default ProgressBarManual;
