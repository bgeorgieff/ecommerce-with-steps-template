import { Col, Container, Row, Image } from "react-bootstrap";
import { PageWrapper, AuthSection } from "components";
import loginImage from "assets/images/car-salesperson-giving-keys-to-a-client-close-up-QUYLS89-1.png";

const AuthPage = () => {
  return (
    <PageWrapper>
      <Container fluid className="fluid-keys-container gx-0">
        <Row className="gx-0">
          <Col
            lg={5}
            sm={12}
            className="d-flex justify-content-center justify-content-lg-end align-items-center my-5"
          >
            <AuthSection />
          </Col>
          <Col
            lg={6}
            sm={12}
            className="d-flex justify-content-end align-items-center"
          >
            <div style={{ maxWidth: "540px" }} className="mx-auto mt-lg-0 mt-5">
              <Image src={loginImage}></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default AuthPage;
