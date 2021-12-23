import styles from "./progressBarManual.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useWindowSize } from "hooks";
import { Row, Col } from "react-bootstrap";
import { TinyIcon, TinyDot, TinyText } from "./Elements";
import { textArr, iconArr } from "components/ProcessSteps/constants";

const ProgressBarManual = () => {
  const bookingStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );
  const [currentStep, setCurrentStep] = useState(bookingStep || 0);
  const mobileWidth = useWindowSize("sm");
  const [position, setPosition] = useState("");

  useEffect(() => {
    setCurrentStep(bookingStep);
    if (mobileWidth) {
      console.log("here");
      if (currentStep === 0) {
        setPosition("initial");
      } else if (currentStep === 1) {
        setPosition("step-one");
      } else if (currentStep === 2) {
        setPosition("step-two");
      } else if (currentStep === 3) {
        setPosition("step-three");
      } else if (currentStep === 4) {
        setPosition("step-four");
      }
    }
  }, [currentStep, mobileWidth, bookingStep, position]);

  return (
    <Row className="mt-2">
      <Col>
        <div className={clsx(styles.container, styles[position])}>
          <div className="d-flex justify-content-between mx-auto">
            {iconArr.map((e, i) => (
              <TinyIcon
                key={i}
                isActive={currentStep === i ? true : false}
                isPrev={currentStep > i ? true : false}
                isLast={currentStep === 4 ? true : false}
              >
                {e}
              </TinyIcon>
            ))}
          </div>
          <div style={{ width: "85%" }} className="mx-auto">
            <div className={clsx(styles.mainLine)}>
              <div
                className={clsx(styles.secondaryLine)}
                style={{ width: `${bookingStep * 25}%` }}
              ></div>
            </div>
          </div>
          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "85%" }}
          >
            {textArr.map((e, i) => (
              <TinyDot
                key={i}
                isActive={currentStep === i ? true : false}
                isPrev={currentStep > i ? true : false}
                isLast={currentStep === 4 ? true : false}
              >
                {i + 1}
              </TinyDot>
            ))}
          </div>
          <div
            className={clsx(
              styles.textContainer,
              "d-flex justify-content-between mx-auto"
            )}
          >
            {textArr.map((e, i) => (
              <TinyText
                key={i}
                isActive={currentStep === i ? true : false}
                isPrev={currentStep > i ? true : false}
                isLast={currentStep === 4 ? true : false}
              >
                {e}
              </TinyText>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProgressBarManual;
