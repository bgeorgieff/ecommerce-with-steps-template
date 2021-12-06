import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import getWindowSize from "../../utils/getWindowSize";
import Title from "../title";

import image1 from "../../images/about-page-h1.png";
import image2 from "../../images/about-page-h2.png";

const AboutOurCompany = () => {
  const { width } = getWindowSize();
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    if (width < 748) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  }, [width]);

  return (
    <Container
      fluid
      className={`fluid-keys-container${
        mobileWidth ? "-mobile" : ""
      } gx-0 py-5 my-5`}
    >
      <Row className="gx-0">
        <Col
          lg={{ span: 4, offset: 1 }}
          className="d-flex justify-content-center align-items-start flex-wrap"
        >
          <div className="mt-5 about-h-txt mx-1">
            <Title
              text={`About our company`}
              style={
                mobileWidth
                  ? { maxWidth: "90%", textAlign: "center" }
                  : { maxWidth: "90%" }
              }
            />
            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                molestie leo est, in auctor lectus elementum congue. Nulla neque
                nisi, placerat nec dolor nec, semper sodales mauris. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 6 }}>
          <div className="about-images-container d-flex justify-content-lg-start justify-content-center">
            <div className="about-image-container mx-3 mt-3">
              <Image fluid src={image1} alt="business-computers" />
            </div>
            <div className="about-image-container mx-3 mt-3">
              <Image fluid src={image2} alt="car keys" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutOurCompany;
