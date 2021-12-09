import { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import AuthForm from "./AuthForm/AuthForm";
import { Title } from "components";
import styles from "./authSection.module.scss";

const AuthSection = () => {
  const [active, setActive] = useState(false);

  const titleProps = {
    text: "Merhaba,",
  };

  const handleActiveClass = (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(!active);
  };

  return (
    <div
      className={`${styles["auth-form-container"]} d-flex flex-column justify-content-center align-items-center mt-5`}
    >
      <div className="mt-5 mb-3">
        <Title {...titleProps} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          leo est.
        </p>
      </div>
      <div className={styles["auth-form-container"]}>
        <Tab.Container defaultActiveKey="Login">
          <Row className="gx-0">
            <Nav
              className={`d-flex justify-content-between ${styles["auth-tab-container"]}`}
            >
              <Nav.Item
                as={Col}
                className={`${styles["auth-nav-container"]} me-1`}
              >
                <Nav.Link
                  eventKey="Login"
                  className={`${styles["auth-tab"]} ${
                    active ? styles["auth-active"] : ""
                  }`}
                  onClick={handleActiveClass}
                >
                  Giriş Yap
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} className={`${styles["auth-nav-container"]}`}>
                <Nav.Link
                  eventKey="Register"
                  className={`${styles["auth-tab"]} ${
                    !active ? styles["auth-active"] : ""
                  }`}
                  onClick={handleActiveClass}
                >
                  Üye Ol
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row className="gx-0">
            <Col className={styles.zPosition}>
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
      </div>
    </div>
  );
};

export default AuthSection;
