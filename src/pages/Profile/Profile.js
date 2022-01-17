import { Tab, Row, Col, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageWrapper } from "components";
import { ProfileHistory, ProfileInfo } from "./partials";
import styles from "./profile.module.scss";
import clsx from "clsx";

const Profile = () => {
  return (
    <PageWrapper>
      <Container fluid className="mt-8 fluid-keys-container">
        <Row className="gx-0">
          <Col>
            <Tab.Container defaultActiveKey="my-profile">
              <Row>
                <Col className="col-2 offset-2">
                  <Nav className="flex-column">
                    <Nav.Item className={styles.navItem}>
                      <Nav.Link
                        className={styles.activeMenu}
                        eventKey="my-profile"
                      >
                        My Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.navItem}>
                      <Nav.Link
                        className={styles.activeMenu}
                        eventKey="my-orders"
                      >
                        My Orders
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.navItem}>
                      <Link className={styles.activeMenu} to="/logout">
                        Logout
                      </Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col className={clsx("col-6", styles.profileDetails)}>
                  <div className="ms-5">
                    <Tab.Content>
                      <Tab.Pane eventKey="my-profile">
                        <ProfileInfo />
                      </Tab.Pane>
                      <Tab.Pane eventKey="my-orders">
                        <ProfileHistory />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default Profile;
