import { Row, Col } from "react-bootstrap";
import { Title } from "components";
import styles from "./profileHistory.module.scss";
import clsx from "clsx";
import PastOrders from "./PastOrders";

import img from "assets/images/Ellipse16small.png";

const someOrders = [
  {
    id: 1,
    date: "12.12.2021",
    car: "toyota yaris",
    serviceType: {
      id: 4,
      name: "CopyKey",
      crossSales: "Custom Case",
      price: "7000TL",
    },
    dealer: {
      img: img,
      name: "John Doe",
      rating: 4.2,
    },
    active: true,
  },
  {
    id: 2,
    date: "12.12.2021",
    car: "toyota yaris",
    serviceType: {
      id: 4,
      name: "CopyKey",
      crossSales: "Custom Case",
      price: "3000TL",
    },
    dealer: {
      img: img,
      name: "John D.",
      rating: 5,
    },
    active: false,
  },
  {
    id: 3,
    date: "12.12.2021",
    car: "toyota yaris",
    serviceType: {
      id: 4,
      name: "NewKey",
      crossSales: "Custom Case",
      price: "4000TL",
    },
    dealer: {
      img: img,
      name: "J Doe",
      rating: 3.2,
    },
    active: false,
  },
];

const ProfileHistory = () => {
  return (
    <div>
      <div>
        <Title>My Orders</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          leo est.
        </p>
      </div>
      <Row className="mx-auto">
        <Col className="col-3">
          <span className={clsx(styles.orderInfo)}>Date</span>
        </Col>
        <Col className="col-3">
          <span className={clsx(styles.orderInfo)}>Car model</span>
        </Col>
        <Col className="col-3 offset-3">
          <span className={clsx(styles.orderInfo)}>Status</span>
        </Col>
      </Row>
      {someOrders.map((e) => (
        <PastOrders key={e.id} {...e} />
      ))}
    </div>
  );
};

export default ProfileHistory;
