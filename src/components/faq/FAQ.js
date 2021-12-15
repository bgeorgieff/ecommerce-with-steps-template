import { Accordion, Col, Row, Container } from "react-bootstrap";
import { Title } from "components";
import { SingleFAQ, faqList } from "./SingleFAQ";
import styles from "./faq.module.scss";

const FAQ = () => {
  return (
    <Container fluid className="fluid-lines-s-container gx-0">
      <Row className="gx-0">
        <Col className="gx-0">
          <div style={{ maxWidth: "920px" }} className="mx-auto mt-5 mb-5">
            <div style={{ maxWidth: "583px" }} className="mx-auto">
              <Title style={{ textAlign: "center" }}>F.A.Q.</Title>
              <p className="text-center my-5 mx-lg-2 mx-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                molestie leo est, in auctor lectus elementum congue.
              </p>
            </div>
            <div>
              <Accordion
                defaultActiveKey="0"
                style={{ backgroundColor: "white" }}
                className={styles["accordion-container"]}
              >
                {faqList
                  ? faqList.map((e, i) => <SingleFAQ key={i}>{e}</SingleFAQ>)
                  : ""}
              </Accordion>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
