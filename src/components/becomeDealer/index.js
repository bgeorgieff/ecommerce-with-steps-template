import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Title from "../title";

const BecomeDealer = () => {
  return (
    <Container className="gx-0 my-2">
      <Row className="gx-0">
        <Col lg={12} sm={12} className="my-5">
          <div className="b-d-container mx-auto">
            <div className="ms-auto d-card me-8 d-flex flex-column justify-content-center align-items-center px-5">
              <Title
                text={"Become Dealer"}
                style={{ color: "white", textAlign: "left", width: "100%" }}
              />
              <p className="mt-3" style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                molestie leo est, in auctor lectus elementum congue. Nulla neque
                nisi, placerat nec dolor nec, semper sodales mauris.
              </p>
              <Link className="b-g-start rounded mt-4" to="/about">
                Get started now
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BecomeDealer;