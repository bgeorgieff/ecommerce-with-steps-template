import { Col, Row, Image, Container } from "react-bootstrap";
import Title from "../title";
import aboutImage from "../../images/aboutImage.png";
import { Link } from "react-router-dom";
import getWindowSize from "../../utils/getWindowSize";
import { useEffect, useState } from "react";

const AboutHomePage = () => {
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
    <Container fluid className="my-5 px-0">
      <Row
        style={{ maxWidth: "960px" }}
        className="mx-auto d-flex justify-content-center align-items-center gx-0"
      >
        <Col lg={6} sm={12} className="mx-auto order-lg-0 order-1 mt-5 mt-lg-0">
          <div className="about-text-container pe-lg-5 mx-5 mx-lg-2">
            <Title
              text={"About Us"}
              style={
                mobileWidth ? { textAlign: "center" } : { textAlign: "left" }
              }
            />
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              molestie leo est, in auctor lectus elementum congue. Nulla neque
              nisi, placerat nec dolor nec, semper sodales mauris. Aenean ipsum
              libero, volutpat quis sodales non, rutrum vitae nibh. Aenean nibh
              leo, facilisis vel mollis ac, vestibulum nec ligula. Mauris ut
              lacus venenatis, accumsan ipsum at, convallis tellus. Proin vitae
              odio eros.
            </p>
            <div className="mt-4">
              <Link className="a-btn rounded" to="/about-us">
                About us →
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} className="order-lg-1 order-0 mb-5 mb-lg-0">
          <div className="a-i-container mx-auto">
            <Image fluid className="about-image" src={aboutImage} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutHomePage;
