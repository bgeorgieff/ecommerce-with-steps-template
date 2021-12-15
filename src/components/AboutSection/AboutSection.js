import { Col, Row, Image, Container } from "react-bootstrap";
import { Title } from "..";
import aboutImage from "assets/images/aboutImage.png";
import { Link } from "react-router-dom";
import styles from "./aboutSection.module.scss";
import { useWindowSize } from "hooks";
import clsx from "clsx";

const AboutSection = () => {
  const mobileWidth = useWindowSize("md");

  return (
    <Container fluid className="my-5 px-0">
      <Row
        style={{ maxWidth: "960px" }}
        className="mx-auto d-flex justify-content-center align-items-center gx-0"
      >
        <Col lg={6} sm={12} className="mx-auto order-lg-0 order-1 mt-5 mt-lg-0">
          <div
            className={clsx(
              styles["about-text-container"],
              "pe-lg-5 mx-5 mx-lg-2"
            )}
          >
            <Title
              style={
                mobileWidth ? { textAlign: "center" } : { textAlign: "left" }
              }
            >
              About Us
            </Title>
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
              <Link className={clsx(styles["a-btn"], "rounded")} to="/about-us">
                About us →
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} className="order-lg-1 order-0 mb-5 mb-lg-0">
          <div className={clsx(styles["a-i-container"], "mx-auto")}>
            <Image fluid className={styles["about-image"]} src={aboutImage} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
