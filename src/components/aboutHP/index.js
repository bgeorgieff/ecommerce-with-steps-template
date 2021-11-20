import { Col, Row, Image, Container } from "react-bootstrap";
import Title from "../title";
import aboutImage from "../../images/aboutImage.png";
import { Link } from "react-router-dom";

const AboutHomePage = () => {
  return (
    <Container className="my-5">
      <Row
        style={{ maxWidth: "960px" }}
        className="mx-auto d-flex justify-content-center align-items-center"
      >
        <Col lg={6} sm={12}>
          <div className="about-text-container pe-sm-0 me-sm-0 pe-lg-5 me-lg-5">
            <Title text={"About Us"} style={{ textAlign: "left" }} />
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
        <Col lg={6} sm={12} className="mt-5 mt-lg-0">
          <div className="a-i-container mx-auto">
            <Image fluid className="about-image" src={aboutImage} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutHomePage;
