import { useState } from "react";
import { Tab, Row, Nav, Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

import styles from "./smallForm.module.scss";

const SmallForm = () => {
  const [activeClass, setActiveClass] = useState(true);
  const [optionListFrom, setOptionListFrom] = useState([]);
  const [optionListTo, setOptionListTo] = useState([]);
  const optionsFrom = useSelector((state) => state.formOptionsReducer?.from);
  const optionsTo = useSelector((state) => state.formOptionsReducer?.to);

  const handleClass = (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      setActiveClass(!activeClass);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Tab.Container defaultActiveKey="copyKey">
      <Row className="gx-0">
        <Nav
          className={`d-flex justify-content-start ${styles["position-adjust"]}`}
        >
          <Nav.Item
            className={`${styles["hp-service-tab"]} me-lg-2 me-1 rounded ${
              activeClass ? styles.activated : styles.deactivated
            }`}
            onClick={handleClass}
          >
            <Nav.Link eventKey="copyKey" className="text-center">
              Copy Key
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            className={`${styles["hp-service-tab"]} me-lg-2 me-0 rounded ${
              activeClass ? styles.deactivated : styles.activated
            }`}
            onClick={handleClass}
          >
            <Nav.Link eventKey="lostKey" className="text-center">
              Lost Key
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row className="gx-0">
        <Col className={styles["hp-tab-content-container"]}>
          <Tab.Content>
            <Tab.Pane eventKey="copyKey">
              <Form
                className={`d-flex flex-lg-row flex-column flex-wrap justify-content-center ${styles["home-form-menu"]}`}
                onSubmit={handleSubmit}
              >
                <Form.Select
                  className={`${styles["c-width"]} me-lg-2 me-0 align-self-center mt-3`}
                  aria-label="Default select"
                  onChange={(e) => setOptionListTo(e.target.value)}
                  defaultValue="Choose City"
                >
                  <option disabled>Choose City</option>
                  {optionsFrom ? (
                    optionsFrom.map((e) => (
                      <option key={e.id}>{e.option}</option>
                    ))
                  ) : (
                    <option>No Options</option>
                  )}
                </Form.Select>
                <Form.Select
                  className={`${styles["c-width"]} mt-3 align-self-center`}
                  aria-label="Default select"
                  onChange={(e) => setOptionListFrom(e.target.value)}
                  defaultValue="Choose District"
                >
                  <option disabled>Choose District</option>
                  {optionsTo ? (
                    optionsTo.map((e) => <option key={e.id}>{e.option}</option>)
                  ) : (
                    <option>No Options</option>
                  )}
                </Form.Select>
                <div className="d-flex ms-lg-4 mt-3 mt-xs-5 justify-content-center">
                  <button type="submit" className={styles["c-btn"]}>
                    Find dealer →
                  </button>
                </div>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="lostKey">Lorem Ipsum</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default SmallForm;
