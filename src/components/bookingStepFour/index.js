import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Title from "../title";

const BookingStepFour = () => {
  const serviceDetails = useSelector(
    (state) => state.bookingReducer.bookingDetails
  );

  return (
    <Row className="mb-5 mx-auto">
      <Col lg={6} className="d-flex flex-column justify-content-center">
        <div className="mx-5" style={{ width: "50%" }}>
          <Title text={"THANK YOU!"} style={{ fontSize: "64px" }} />
        </div>
        <div className="mx-5 mt-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            molestie leo est, in auctor lectus Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam molestie leo est, in auctor lectus
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            molestie leo est, in auctor lectus
          </p>
        </div>
      </Col>
      <Col
        lg={6}
        className="booking-summary d-flex flex-column justify-content-center align-items-center mx-auto p-5 mt-5 mt-lg-0"
      >
        <div>
          <Title
            text={"Order Summary"}
            style={{ color: "white", width: "50%" }}
          />
        </div>
        <Row className="mt-5">
          <Col className="col-6 ">
            <p>Service Chosen</p>
            <p>Car Model</p>
            <p>Customization</p>
            <p>Final Price</p>
            <p>Billed to</p>
            <p>Delivery Address</p>
          </Col>
          <Col className="col-6">
            <p className="fw-bold">{serviceDetails.serviceId}</p>
            <p className="fw-bold">{serviceDetails.carModel}</p>
            <p className="fw-bold">Customization</p>
            <p className="fw-bold">Final Price</p>
            <p className="fw-bold">
              {serviceDetails.clientDetails.firstName}{" "}
              {serviceDetails.clientDetails.lastName}
              <br />
              {serviceDetails.clientDetails.phone}
              <br />
              {serviceDetails.clientDetails.email}
            </p>
            <p className="fw-bold">{serviceDetails.clientDetails.address}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BookingStepFour;
