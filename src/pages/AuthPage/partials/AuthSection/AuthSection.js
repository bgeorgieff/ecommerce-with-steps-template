import { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { AuthForm } from "./AuthForm";
import { Title } from "components";
import styles from "./authSection.module.scss";
import clsx from "clsx";

const AuthSection = () => {
  const [active, setActive] = useState(false);

  const handleActiveClass = (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(!active);
  };

  return (
    <div
      className={clsx(
        styles["auth-form-container"],
        "d-flex flex-column justify-content-center align-items-center mt-5"
      )}
    >
      <div className="mt-5 mb-3">
        <Title>Merhaba,</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          leo est.
        </p>
      </div>
      <div className={styles["auth-form-container"]}>
        <Tab.Container defaultActiveKey="Login">
          <Row className="gx-0">
            <Nav
              className={clsx(
                styles["auth-tab-container"],
                "d-flex justify-content-between"
              )}
            >
              <Nav.Item
                as={Col}
                className={clsx(styles["auth-nav-container"], "me-1")}
              >
                <Nav.Link
                  eventKey="Login"
                  className={clsx(
                    styles["auth-tab"],
                    active ? styles["auth-active"] : ""
                  )}
                  onClick={handleActiveClass}
                >
                  Giriş Yap
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} className={styles["auth-nav-container"]}>
                <Nav.Link
                  eventKey="Register"
                  className={clsx(
                    styles["auth-tab"],
                    !active ? styles["auth-active"] : ""
                  )}
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
