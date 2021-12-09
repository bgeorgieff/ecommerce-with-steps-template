import { Row, Col, Form } from "react-bootstrap";
import cardSymbol from "../../assets/icons/card-symbol.svg";
import styles from "./cardPaymentForm.module.scss";
import PropTypes from "prop-types";

import cardsListOne from "../../assets/icons/card-methods-1.svg";
import cardsListTwo from "../../assets/icons/card-methods-2.svg";

const CardPaymentForm = (props) => {
  return (
    <>
      <Row>
        <Col className={`${styles["card-payment"]} mx-3 mx-lg-auto mt-5`}>
          <Row className="ps-3 px-lg-0">
            <Col className="xs-6 order-md-last px-0 px-md-5 my-3 d-flex justify-content-start align-items-center">
              <div className={styles["card-image-holder"]}>
                <img
                  src={cardSymbol}
                  alt="card-payment"
                  className={styles["card-image"]}
                />
              </div>
            </Col>
            <Col className="ps-0 ps-md-4 d-flex align-items-center justify-content-start">
              <div>
                <p className={styles["card-payment-text"]}>
                  Enter your bank details to complete your order
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              className={`col-12 px-4 my-3 mt-lg-0 ${styles["card-form-container"]}`}
            >
              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3 col-12"
                  controlId="cardFormNumber"
                >
                  <Form.Control
                    type="text"
                    placeholder="Card Number"
                    className={styles.input}
                    onChange={(e) => props.setCardNumber(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3 col-6 d-flex flex-column flex-lg-row justify-content-center align-items-lg-center col-md-7"
                  controlId="cardFormExp"
                >
                  <Form.Label
                    className={`${styles["card-form-label-exp"]} m-0 mb-2`}
                  >
                    Expiry Date
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    className={`${styles.input} ms-lg-2`}
                    onChange={(e) => props.setExpiryDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="mb-3 col-6 d-flex flex-column flex-lg-row justify-content-end align-items-lg-center col-md-5"
                  controlId="cardFormCSV"
                  style={{ marginLeft: "auto" }}
                >
                  <Form.Label
                    className={`${styles["card-form-label"]} m-0 mb-2`}
                  >
                    CSV
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="XXX"
                    className={`${styles.input} ms-lg-2`}
                    onChange={(e) => props.setCSV(e.target.value)}
                  />
                </Form.Group>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="mt-5 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="mx-2">
          <p>Supported Card</p>
        </div>
        <div className={`${styles["payment-options-container"]} mx-2`}>
          <img
            src={cardsListOne}
            alt="payment options"
            className="payment-options"
          />
        </div>
        <div
          className={`${styles["payment-options-container"]} mx-2 mt-lg-0 mt-3`}
        >
          <img
            src={cardsListTwo}
            alt="payment options"
            className="payment-options"
          />
        </div>
      </div>
    </>
  );
};

CardPaymentForm.propTypes = {
  props: PropTypes.exact({
    setCSV: PropTypes.func,
    setCardNumber: PropTypes.func,
    setExpiryDate: PropTypes.func,
  }),
};

export default CardPaymentForm;
