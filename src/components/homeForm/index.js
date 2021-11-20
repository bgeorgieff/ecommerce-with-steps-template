import { useState } from "react";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import HomeFormOptions from "../homeFormOptions";

const HomeForm = () => {
  const [activeClass, setActiveClass] = useState(true);

  const options = [
    {
      from: [
        {
          id: 1,
          option: "1",
        },
        {
          id: 2,
          option: "2",
        },
      ],
      to: [
        {
          id: 3,
          option: "3",
        },
        {
          id: 4,
          option: "4",
        },
      ],
    },
  ];

  const handleClass = (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      setActiveClass(!activeClass);
    }
  };

  return (
    <Tab.Container defaultActiveKey="copyKey">
      <Row className="gx-0">
        <Nav className="d-flex justify-content-start">
          <Nav.Item
            className={`hp-service-tab me-2 rounded ${
              activeClass ? "activated" : "deactivated"
            }`}
            onClick={handleClass}
          >
            <Nav.Link eventKey="copyKey" className="text-center">Copy Key</Nav.Link>
          </Nav.Item>
          <Nav.Item
            className={`hp-service-tab me-2 rounded ${
              activeClass ? "deactivated" : "activated"
            }`}
            onClick={handleClass}
          >
            <Nav.Link eventKey="lostKey" className="text-center">Lost Key</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row className="gx-0">
        <Col className="hp-tab-content-container">
          <HomeFormOptions options={options} />
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default HomeForm;
