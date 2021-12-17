import styles from "./progressBarManualV2.module.scss";
import clsx from "clsx";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect, useState } from "react";

import { ReactComponent as ServiceBlue } from "assets/icons/service-type-blue.svg";
import { ReactComponent as LocationGrey } from "assets/icons/location-grey.svg";
import { ReactComponent as CarGrey } from "assets/icons/car-grey.svg";
import { ReactComponent as PaymentGrey } from "assets/icons/payment-grey.svg";
import { ReactComponent as TickGrey } from "assets/icons/tick-grey.svg";

const ProgressBarManualV2 = () => {
  const serviceBlue = useRef(null);
  const locationGrey = useRef(null);
  const carGrey = useRef(null);
  const paymentGrey = useRef(null);
  const tickGrey = useRef(null);
  const dotOne = useRef(null);
  const dotTwo = useRef(null);
  const dotThree = useRef(null);
  const dotFour = useRef(null);
  const dotFive = useRef(null);
  const textStepOne = useRef(null);
  const textStepTwo = useRef(null);
  const textStepThree = useRef(null);
  const textStepFour = useRef(null);
  const textStepFive = useRef(null);
  const [serviceColor, setServiceColor] = useState(null);
  const [locationColor, setLocationColor] = useState(null);
  const [carColor, setCarColor] = useState(null);
  const [paymentColor, setPaymentColor] = useState(null);
  const [tickColor, setTickColor] = useState(null);
  const [firstDot, setFirstDot] = useState(null);
  const [secondDot, setSecondDot] = useState(null);
  const [thirdDot, setThirdDot] = useState(null);
  const [fourthDot, setFourthDot] = useState(null);
  const [fifthDot, setFifthDot] = useState(null);
  const [firstText, setFirstText] = useState(null);
  const [secondText, setSecondText] = useState(null);
  const [thirdText, setThirdText] = useState(null);
  const [fourthText, setFourthText] = useState(null);
  const [fifthText, setFifthText] = useState(null);
  const bookingStep = useSelector(
    (state) => state.bookingReducer.bookingDetails?.bookingStep
  );

  useEffect(() => {
    setServiceColor(+serviceBlue.current.getAttribute("current-step"));
    setLocationColor(+locationGrey.current.getAttribute("current-step"));
    setCarColor(+carGrey.current.getAttribute("current-step"));
    setPaymentColor(+paymentGrey.current.getAttribute("current-step"));
    setTickColor(+tickGrey.current.getAttribute("current-step"));
    setFirstDot(+dotOne.current.getAttribute("current-step"));
    setSecondDot(+dotTwo.current.getAttribute("current-step"));
    setThirdDot(+dotThree.current.getAttribute("current-step"));
    setFourthDot(+dotFour.current.getAttribute("current-step"));
    setFifthDot(+dotFive.current.getAttribute("current-step"));
    setFirstText(+textStepOne.current.getAttribute("current-step"));
    setSecondText(+textStepTwo.current.getAttribute("current-step"));
    setThirdText(+textStepThree.current.getAttribute("current-step"));
    setFourthText(+textStepFour.current.getAttribute("current-step"));
    setFifthText(+textStepFive.current.getAttribute("current-step"));
  }, [
    serviceBlue,
    locationGrey,
    carGrey,
    paymentGrey,
    tickGrey,
    dotOne,
    dotTwo,
    dotThree,
    dotFour,
    dotFive,
    textStepOne,
    textStepTwo,
    textStepThree,
    textStepFive,
    textStepFour,
  ]);

  return (
    <Row className="mt-2">
      <Col>
        <div
          className="d-flex justify-content-between mx-auto"
          style={{ maxWidth: "78%" }}
        >
          <div
            ref={serviceBlue}
            current-step={0}
            className={clsx(
              "mx-auto text-center",
              styles.iconBlue,
              bookingStep > serviceColor ? styles.iconGreen : styles.iconBlue
            )}
            style={{ width: "20%" }}
          >
            <ServiceBlue />
          </div>
          <div
            ref={locationGrey}
            current-step={1}
            className={clsx(
              "mx-auto text-center",
              bookingStep === locationColor ? styles.iconBlue : styles.iconGrey,
              bookingStep > locationColor ? styles.iconGreen : styles.iconGrey
            )}
            style={{ width: "20%" }}
          >
            <LocationGrey />
          </div>
          <div
            ref={carGrey}
            current-step={2}
            className={clsx(
              "mx-auto text-center",
              bookingStep === carColor ? styles.iconBlue : styles.iconGrey,
              bookingStep > carColor ? styles.iconGreen : styles.iconGrey
            )}
            style={{ width: "20%" }}
          >
            <CarGrey />
          </div>
          <div
            ref={paymentGrey}
            current-step={3}
            className={clsx(
              "mx-auto text-center",
              bookingStep === paymentColor ? styles.iconBlue : styles.iconGrey,
              bookingStep > paymentColor ? styles.iconGreen : styles.iconGrey
            )}
            style={{ width: "20%" }}
          >
            <PaymentGrey />
          </div>
          <div
            ref={tickGrey}
            current-step={4}
            className={clsx(
              "mx-auto text-center",
              bookingStep === tickColor ? styles.iconGreen : styles.iconGrey
            )}
            style={{ width: "20%" }}
          >
            <TickGrey />
          </div>
        </div>
        <div style={{ maxWidth: "65%" }} className="mx-auto">
          <div className={clsx(styles.mainLine)}>
            <div
              className={clsx(styles.secondaryLine)}
              style={{ width: `${bookingStep * 25}%` }}
            ></div>
          </div>
        </div>
        <div
          className="d-flex justify-content-between mx-auto"
          style={{ maxWidth: "65%" }}
        >
          <div
            ref={dotOne}
            current-step={0}
            className={clsx(
              "d-flex justify-content-center align-items-center",
              bookingStep > firstDot ? styles.dotsGreen : styles.dotsBlue
            )}
          >
            1
          </div>
          <div
            ref={dotTwo}
            current-step={1}
            className={clsx(
              "d-flex justify-content-center align-items-center",
              bookingStep === secondDot ? styles.dotsBlue : styles.dotsGrey,
              bookingStep > secondDot ? styles.dotsGreen : styles.dotsGrey
            )}
          >
            2
          </div>
          <div
            ref={dotThree}
            current-step={2}
            className={clsx(
              "d-flex justify-content-center align-items-center",
              bookingStep === thirdDot ? styles.dotsBlue : styles.dotsGrey,
              bookingStep > thirdDot ? styles.dotsGreen : styles.dotsGrey
            )}
          >
            3
          </div>
          <div
            ref={dotFour}
            current-step={3}
            className={clsx(
              "d-flex justify-content-center align-items-center",
              bookingStep === fourthDot ? styles.dotsBlue : styles.dotsGrey,
              bookingStep > fourthDot ? styles.dotsGreen : styles.dotsGrey
            )}
          >
            4
          </div>
          <div
            ref={dotFive}
            current-step={4}
            className={clsx(
              styles.dotsGrey,
              "d-flex justify-content-center align-items-center",
              bookingStep === fifthDot ? styles.dotsGreen : styles.dotsGrey
            )}
          >
            5
          </div>
        </div>
        <div
          className="d-flex justify-content-between mx-auto"
          style={{ maxWidth: "80%" }}
        >
          <div
            ref={textStepOne}
            current-step={0}
            className={clsx(
              styles.textBlue,
              bookingStep > firstText ? styles.textGreen : styles.textGrey
            )}
            style={{ width: "20%" }}
          >
            <p>Hizmet Seçimi</p>
          </div>
          <div
            ref={textStepTwo}
            current-step={1}
            className={clsx(
              bookingStep === secondText ? styles.textBlue : styles.textGrey,
              bookingStep > secondText ? styles.textGreen : styles.textGrey
            )}
            style={{ width: "20%" }}
          >
            <p>Bilgileriniz</p>
          </div>
          <div
            ref={textStepThree}
            current-step={2}
            className={clsx(
              bookingStep === thirdText ? styles.textBlue : styles.textGrey,
              bookingStep > thirdText ? styles.textGreen : styles.textGrey
            )}
            style={{ width: "20%" }}
          >
            <p>Araba Modeliniz</p>
          </div>
          <div
            ref={textStepFour}
            current-step={3}
            className={clsx(
              bookingStep === fourthText ? styles.textBlue : styles.textGrey,
              bookingStep > fourthText ? styles.textGreen : styles.textGrey
            )}
            style={{ width: "20%" }}
          >
            <p>Anahtar Tipi & Ödeme</p>
          </div>
          <div
            ref={textStepFive}
            current-step={4}
            className={clsx(
              bookingStep === fifthText ? styles.textGreen : styles.textGrey
            )}
            style={{ width: "20%" }}
          >
            <p>Şiparişi Tamamla</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProgressBarManualV2;
