import { useState } from "react";
import { Col, Row, Image, Form } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "state/actions/booking";
import { CrossSaleCarousel } from "components";
import BookingStepButtons from "../BookingStepButtons/BookingStepButtons";
import styles from "./bookingStepThree.module.scss";
import { useForm } from "react-hook-form";

import key from "assets/images/key1.png";

import CardPaymentForm from "components/CardPaymentForm/CardPaymentForm";

const BookingStepThree = () => {
  const { register } = useForm();
  const [clickedService, setClickedService] = useState(false);
  const dispatch = useDispatch();
  const bookingDetails = useSelector(
    (state) => state.bookingReducer.bookingDetails
  );
  const crossSaleList = useSelector((state) => state.bookingReducer?.list);
  const { nextStep, prevStep } = bindActionCreators(bookingActions, dispatch);

  const handleServiceClick = (e) => {
    e.preventDefault();
    setClickedService(!clickedService);
  };

  const handlePrevStep = async (e) => {
    e.preventDefault();
    try {
      prevStep({
        ...bookingDetails,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    try {
      nextStep({
        ...bookingDetails,
        cardDetails: {
          cardNumber: e.cardNumber || "",
          expiryDate: e.expiryDate || "",
          CSV: e.csv || "",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const bookingStepButtonsProps = {
    handlePrevStep: handlePrevStep,
    type: "submit",
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className={`${styles["booking-service-card"]} mx-auto mt-3 mb-5`}>
          <Col
            md={6}
            className="mx-auto p-3 d-flex flex-column justify-content-center"
          >
            <div className="mx-5 mx-auto">
              <Image fluid src={key} className="mx-auto" />
            </div>
          </Col>
          <Col md={6} className="p-3 d-flex flex-column justify-content-center">
            <div className="mx-4 mt-4">
              <Row className="d-flex justify-content-between mb-4">
                <Col lg={7}>
                  <h3 className={`${styles["offer-name"]} main-blue`}>
                    Original Key
                  </h3>
                </Col>
                <Col lg={5}>
                  <span className={styles["offer-price"]}>4000 TL</span>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    molestie leo est, in auctor lectus{" "}
                  </p>
                  <button
                    className={styles["select-service"]}
                    onClick={handleServiceClick}
                  >
                    Choose
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <CrossSaleCarousel>{crossSaleList}</CrossSaleCarousel>
          </Col>
        </Row>
        <CardPaymentForm
          setCSV={{ ...register("setCSV") }}
          setCardNumber={{ ...register("setCardNumber") }}
          setExpiryDate={{ ...register("setExpiryDate") }}
        />
        <div className="d-flex justify-content-center my-5">
          <BookingStepButtons {...bookingStepButtonsProps} />
        </div>
      </Form>
    </>
  );
};

export default BookingStepThree;
