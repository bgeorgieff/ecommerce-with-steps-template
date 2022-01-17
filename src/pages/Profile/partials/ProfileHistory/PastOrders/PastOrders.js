import { useState } from "react";
import { Row, Col, Collapse } from "react-bootstrap";
import RatingStars from "../RatingStars";

import clsx from "clsx";
import styles from "./pastOrders.module.scss";

const PastOrders = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={clsx("mt-1 border rounded", styles.orderContainer)}>
      <Row onClick={() => setVisible(!visible)}>
        <Col className="col-3">
          <span className={styles.orderDetails}>{props.date}</span>
        </Col>
        <Col className="col-3">
          <span className={styles.orderDetails}>{props.car}</span>
        </Col>
        <Col className="col-3 offset-3">
          <span
            className={clsx(
              props.active ? styles.orderTxt : styles.orderTxtDelivered
            )}
          >
            {props.active ? "In Progress" : "Delivered"}
          </span>
        </Col>
      </Row>
      <Collapse in={visible}>
        <Row className={styles.orderDetailsContainer}>
          <Col className="col-12 mb-2">
            <div className={styles.divider}></div>
          </Col>
          <Col>
            <span className={styles.orderDetails}>Order summary</span>
          </Col>
          <Col>
            <span className={styles.orderTxt}>
              {props.serviceType.name}
              <br />
              {props.serviceType.crossSales}
              <br /> {props.serviceType.price}
            </span>
          </Col>
          <Col>
            <span className={styles.orderDetails}>Dealer</span>
            <div className="d-flex mt-2">
              <div className={clsx(styles.imgContainer, "me-2")}>
                <img src={props.dealer.img} alt={props.dealer.name} />
              </div>
              <div>
                <span className={styles.orderTxt}>
                  {props.dealer.name}
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Avg. Rating {props.dealer.rating}
                  </span>
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <span className={styles.orderDetails}>Rate this service</span>
            <div className="mt-2">
              <RatingStars />
            </div>
          </Col>
        </Row>
      </Collapse>
    </div>
  );
};

export default PastOrders;
