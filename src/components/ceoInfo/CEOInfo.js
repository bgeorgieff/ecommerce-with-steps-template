import { Container, Row, Col, Image } from "react-bootstrap";
import { Title } from "components";
import { useWindowSize } from "hooks";
import styles from "./ceoInfo.module.scss";
import clsx from "clsx";

import JohnDoeImg from "assets/images/JohnDoe.png";
import OprahSignature from "assets/images/Oprah-Winfrey-Signature-1.png";

const CEOInfo = () => {
  const mobileWidth = useWindowSize("lg");

  return (
    <Container fluid className="mt-5 mb-0 mb-lg-5 px-0">
      <Row className="gx-0">
        <Col lg={6} className="col-12">
          {mobileWidth ? (
            <div className="mb-5 mt-lg-0">
              <Title style={{ textAlign: "center" }}>John Doe</Title>
            </div>
          ) : (
            ""
          )}
          <div
            className={clsx(
              styles["ceo-image-container"],
              "ms-auto me-lg-3 me-auto"
            )}
          >
            <Image fluid src={JohnDoeImg} alt="John Doe" />
          </div>
        </Col>
        <Col
          lg={6}
          className={clsx(
            "col-12 px-5 d-flex flex-column justify-content-center align-items-start",
            styles["ceo-intro-txt-container"]
          )}
          style={{ maxWidth: "640px" }}
        >
          {!mobileWidth ? (
            <div className="mt-5 mt-lg-0">
              <Title style={{ textAlign: "center" }}>John Doe</Title>
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
          <div className={styles["ceo-signature-container"]}>
            <Image fluid src={OprahSignature} alt="John Doe signature" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CEOInfo;
