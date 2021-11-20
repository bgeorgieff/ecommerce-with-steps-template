import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "../title";

import JohnDoeImg from '../../images/JohnDoe.png'
import OprahSignature from '../../images/Oprah-Winfrey-Signature-1.png'

const CEOInfo = () => {
  return (
    <Container className="my-5">
      <Row className="mx-5">
        <Col lg={6} sm={12}>
          <div className="ceo-image-container">
            <Image fluid src={JohnDoeImg} alt="John Doe" />
          </div>
        </Col>
        <Col
          lg={6}
          sm={12}
          className="d-flex flex-column justify-content-end align-items-start"
        >
          <div className="mt-5 mt-lg-0">
            <Title text={"John Doe"} />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              molestie leo est, in auctor lectus elementum congue. Nulla neque
              nisi, placerat nec dolor nec, semper sodales mauris. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="ceo-signature-container">
            <Image fluid src={OprahSignature} alt="John Doe signature" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CEOInfo;
