import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../logo";
import facebookIcon from "../../images/facebook.png";
import instaIcon from "../../images/instagram.png";

const Footer = () => {
  return (
    <Container fluid className="footer-position-container gx-0">
      <Row className="footer pt-5 justify-content-center gx-0">
        <Col sm={12} lg={12} className="mx-auto">
          <Row style={{ maxWidth: "1024px" }} className="mx-auto gx-0">
            <Col sm={12} lg={3} className="mx-auto gx-0">
              <div className="footer-content mx-auto">
                <Logo />
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    molestie leo est, in auctor lectus elementum congue.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={2} className="mx-auto gx-0">
              <div className="footer-content mx-auto d-flex flex-column">
                <Link to="/" className="footer-nav text-left">
                  Home
                </Link>
                <Link to="/services" className="footer-nav text-left">
                  Services
                </Link>
                <Link to="/franchising" className="footer-nav text-left">
                  Franchising
                </Link>
                <Link to="/about" className="footer-nav text-left">
                  About
                </Link>
                <Link to="/contact" className="footer-nav text-left">
                  Contact
                </Link>
              </div>
            </Col>
            <Col sm={12} lg={2} className="mx-auto gx-0">
              <div className="footer-content mx-auto d-flex flex-column">
                <Link to="/privacy-policy" className="footer-nav">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions" className="footer-nav">
                  Terms Of Use
                </Link>
              </div>
            </Col>
            <Col
              sm={12}
              lg={2}
              className="mx-auto gx-0 mt-5 mt-sm-0"
            >
              <div className="footer-content mx-auto">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <Image src={facebookIcon} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <Image src={instaIcon} />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="gx-0">
            <Col sm={12} className="mt-5">
              <p
                className="text-center"
                style={{
                  fontWeight: "900",
                  lineHeight: "129%",
                  color: "white",
                }}
              >
                Online Anahtar 2021. All rights reserved.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
