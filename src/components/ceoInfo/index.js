import { useEffect, useState } from "react";
import getWindowSize from "../../utils/getWindowSize";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "../title";

import JohnDoeImg from "../../images/JohnDoe.png";
import OprahSignature from "../../images/Oprah-Winfrey-Signature-1.png";

const CEOInfo = () => {
  const { width } = getWindowSize();
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    if (width < 992) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  }, [width]);

  return (
    <Container fluid className="mt-5 mb-0 mb-lg-5 px-0">
      <Row className="gx-0">
        <Col lg={6} className="col-12">
          {mobileWidth ? (
            <div className="mb-5 mt-lg-0">
              <Title
                text={"John Doe"}
                style={mobileWidth ? { textAlign: "center" } : {}}
              />
            </div>
          ) : (
            ""
          )}
          <div className="ceo-image-container ms-auto me-lg-3 me-auto">
            <Image fluid src={JohnDoeImg} alt="John Doe" />
          </div>
        </Col>
        <Col
          lg={6}
          className="col-12 px-5 d-flex flex-column justify-content-center align-items-start ceo-intro-txt-container"
          style={{ maxWidth: "640px" }}
        >
          {!mobileWidth ? (
            <div className="mt-5 mt-lg-0">
              <Title text={"John Doe"} />
            </div>
          ) : (
            ""
          )}
          <div className="mt-5 mt-lg-0">
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
