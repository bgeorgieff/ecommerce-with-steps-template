import { Container, Row, Col, Image } from "react-bootstrap";
import { Title } from "components";
import styles from "./aboutOurCompany.module.scss";
import { useWindowSize } from "../../hooks/";
import clsx from "clsx";

import image1 from "assets/images/about-page-h1.png";
import image2 from "assets/images/about-page-h2.png";

const AboutOurCompany = () => {
  const mobileWidth = useWindowSize("md");

  return (
    <Container
      fluid
      className={clsx(
        "fluid-keys-container" + (mobileWidth ? "-mobile" : ""),
        "gx-0 py-5 my-5"
      )}
    >
      <Row className="gx-0">
        <Col
          lg={{ span: 4, offset: 1 }}
          className="d-flex justify-content-center align-items-start flex-wrap"
        >
          <div className={clsx(styles["about-h-txt"], "mt-5 mx-1")}>
            <Title
              style={{
                maxWidth: "90%",
                textAlign: mobileWidth ? "center" : "left",
              }}
            >
              About our company
            </Title>
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
          <div
            className={clsx(
              styles["about-images-container"],
              "d-flex justify-content-lg-start justify-content-center"
            )}
          >
            <div className={clsx(styles["about-image-container"], "mx-3 mt-3")}>
              <Image fluid src={image1} alt="business-computers" />
            </div>
            <div className={clsx(styles["about-image-container"], "mx-3 mt-3")}>
              <Image fluid src={image2} alt="car keys" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutOurCompany;
