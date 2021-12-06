import { Accordion, Col, Row, Container } from "react-bootstrap";
import Title from "../title";
import SingleFAQ from "../singleFAQ";

const faq = [
  {
    itemHeader: "Lorem ipsum - 1",
    itemBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`,
    itemKey: 1,
  },
  {
    itemHeader: "Lorem ipsum - 2",
    itemBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`,
    itemKey: 2,
  },
  {
    itemHeader: "Lorem ipsum - 3",
    itemBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`,
    itemKey: 3,
  },
];

const FAQ = () => {
  return (
    <Container fluid className="fluid-lines-s-container gx-0">
      <Row className="gx-0">
        <Col className="gx-0">
          <div style={{ maxWidth: "920px" }} className="mx-auto mt-5 mb-5">
            <div style={{ maxWidth: "583px" }} className="mx-auto">
              <Title text={"F.A.Q."} style={{ textAlign: "center" }} />
              <p className="text-center my-5 mx-lg-2 mx-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                molestie leo est, in auctor lectus elementum congue.
              </p>
            </div>
            <div>
              <Accordion
                defaultActiveKey="0"
                style={{ backgroundColor: "white" }}
                className="accordion-container"
              >
                {faq
                  ? faq.map((e, i) => (
                      <SingleFAQ
                        key={i}
                        header={e.itemHeader}
                        body={e.itemBody}
                        event={e.itemKey}
                      />
                    ))
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
