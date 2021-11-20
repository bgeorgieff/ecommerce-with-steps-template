import { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import AuthForm from "../authForm";

const AuthSection = () => {
  const [active, setActive] = useState(false);

  const handleActiveClass = (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(!active);
  };

  return (
    <Tab.Container defaultActiveKey="Login">
      <Row className="gx-0">
        <Nav className="d-flex justify-content-between auth-tab-container">
          <Nav.Item as={Col} className="auth-nav-container me-2">
            <Nav.Link
              eventKey="Login"
              className={`auth-tab ${active ? "auth-active" : ""}`}
              onClick={handleActiveClass}
            >
              Giriş Yap
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as={Col} className="auth-nav-container">
            <Nav.Link
              eventKey="Register"
              className={`auth-tab ${!active ? "auth-active" : ""}`}
              onClick={handleActiveClass}
            >
              Üye Ol
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row className="gx-0">
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="Login">
              <AuthForm type="login" />
            </Tab.Pane>
            <Tab.Pane eventKey="Register">
              <AuthForm type="register" />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default AuthSection;
