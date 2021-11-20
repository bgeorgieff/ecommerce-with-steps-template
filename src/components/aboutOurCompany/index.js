import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "../title";

import image1 from "../../images/about-page-h1.png";
import image2 from "../../images/about-page-h2.png";

const AboutOurCompany = () => {
  return (
    <Container fluid className="fluid-keys-container gx-0 py-5 my-5">
      <Row className="gx-0">
        <Col
          lg={12}
          sm={12}
          className="d-flex justify-content-center align-items-start flex-wrap"
        >
          <div className="mt-5 about-h-txt mx-5">
            <Title text={`About our company`} style={{ maxWidth: "90%" }} />
            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                molestie leo est, in auctor lectus elementum congue. Nulla neque
                nisi, placerat nec dolor nec, semper sodales mauris. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div className="about-image-container mx-3 mt-3">
            <Image fluid src={image1} alt="business-computers" />
          </div>
          <div className="about-image-container mx-3 mt-3">
            <Image fluid src={image2} alt="car keys" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutOurCompany;
