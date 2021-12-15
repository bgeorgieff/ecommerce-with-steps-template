import { Col, Row, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import facebookIcon from "assets/icons/fb-nav-img-white.svg";
import instaIcon from "assets/icons/insta-nav-img-white.svg";
import styles from "./footer.module.scss";
import { useWindowSize } from "hooks";
import clsx from "clsx";

const Footer = () => {
  const mobileWidth = useWindowSize("md");

  return (
    <Container
      fluid
      className={clsx(styles["footer-position-container"], "gx-0")}
    >
      <Row
        className={clsx(styles["footer"], "pt-5 justify-content-center gx-0")}
      >
        <Col className="mx-auto col-12">
          <Row style={{ maxWidth: "1024px" }} className="mx-auto gx-0">
            <Col md={3} className="mx-auto gx-0">
              <div
                className={clsx(
                  styles["footer-content"],
                  "mx-auto text-md-start text-center"
                )}
              >
                <Logo style={mobileWidth ? { transform: "scale(1.6)" } : {}} />
                <div className="mt-lg-3 mt-5">
                  <p className="text-center text-md-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    molestie leo est, in auctor lectus elementum congue.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={2} className="mx-auto gx-0 order-1 order-md-0">
              <div
                className={clsx(
                  styles["footer-content"],
                  "mx-auto d-flex flex-column"
                )}
              >
                <NavLink
                  to="/"
                  className={clsx(
                    styles["footer-nav"],
                    "text-md-start text-center"
                  )}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/service-page"
                  className={clsx(
                    styles["footer-nav"],
                    "text-md-start text-center"
                  )}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/franchising"
                  className={clsx(
                    styles["footer-nav"],
                    "text-md-start text-center"
                  )}
                >
                  Franchising
                </NavLink>
                <NavLink
                  to="/about-us"
                  className={clsx(
                    styles["footer-nav"],
                    "text-md-start text-center"
                  )}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={clsx(
                    styles["footer-nav"],
                    "text-md-start text-center"
                  )}
                >
                  Contact
                </NavLink>
              </div>
            </Col>
            <Col md={2} className="mx-auto gx-0 order-1 order-md-0">
              <div
                className={clsx(
                  styles["footer-content"],
                  "mx-auto d-flex flex-column"
                )}
              >
                <NavLink
                  to="/privacy-policy"
                  className={clsx(
                    styles["footer-nav"],
                    "text-md-start text-center"
                  )}
                >
                  Privacy Policy
                </NavLink>
                <NavLink
                  to="/terms-and-conditions"
                  className={clsx(
                    styles["footer-nav"],
                    "text-md-start text-center"
                  )}
                >
                  Terms Of Use
                </NavLink>
              </div>
            </Col>
            <Col md={2} className="mx-auto gx-0 order-0 order-md-1">
              <div
                className={clsx(
                  styles["footer-content"],
                  "mx-auto text-md-start text-center my-md-0 my-4"
                )}
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <img
                    src={facebookIcon}
                    alt="visit us on facebook"
                    style={{ color: "white" }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <img
                    src={instaIcon}
                    alt="visit us on instagram"
                    style={{ color: "white" }}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="gx-0">
            <Col className="mt-5 col-12">
              {mobileWidth ? (
                <div
                  style={{
                    width: "85%",
                    margin: "0 auto",
                    borderTop: "1px solid white",
                    height: "5px",
                  }}
                  className="mb-3"
                ></div>
              ) : (
                ""
              )}
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
