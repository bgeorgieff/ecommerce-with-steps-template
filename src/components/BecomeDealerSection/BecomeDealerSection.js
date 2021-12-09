import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Title } from "components";
import styles from "./becomeDealerSection.module.scss";
import { useWindowSize } from "hooks";

const BecomeDealerSection = () => {
  const mobileWidth = useWindowSize("md");

  const titleStyle = mobileWidth
    ? { color: "white", textAlign: "center", width: "100%" }
    : { color: "white", textAlign: "left", width: "100%" };

  const titleProps = {
    text: "Become Dealer",
    style: titleStyle,
  };

  return (
    <Container fluid className="gx-0 my-2">
      <Row className="gx-0">
        <Col lg={12} sm={12} className="my-5">
          <div className={`${styles["b-d-container"]} mx-auto`}>
            <div
              className={`${styles["d-card"]} ms-auto me-8 d-flex flex-column justify-content-center align-items-center px-5`}
            >
              <Title {...titleProps} />
              <p className="mt-3" style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                molestie leo est, in auctor lectus elementum congue. Nulla neque
                nisi, placerat nec dolor nec, semper sodales mauris.
              </p>
              <Link
                className={`${styles["b-d-start"]} rounded mt-4`}
                to="/about"
              >
                Get started now
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BecomeDealerSection;
