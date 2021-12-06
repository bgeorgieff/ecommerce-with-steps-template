import { Col, Row, Container } from "react-bootstrap";
import Title from "../title";
import ServiceCard from "../serviceCard";

const Services = ({ cardItems, headerTxt, introduction, bgActive }) => {
  return (
    <Container fluid className="gx-0">
      <Row className="gx-0">
        <Col>
          <div className={`${bgActive ? "bg-keys" : ""}`}>
            {headerTxt || introduction ? (
              <div className="pt-2">
                {headerTxt ? (
                  <Title
                    text={headerTxt}
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: "5rem",
                    }}
                  />
                ) : (
                  ""
                )}
                {introduction ? (
                  <p
                    className="text-center mx-auto my-3 px-sm-0 px-5"
                    style={{ color: "white", maxWidth: "491px" }}
                  >
                    {introduction}
                  </p>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-center flex-wrap mb-5 pb-5">
              {cardItems
                ? cardItems.map((e, i) => (
                    <ServiceCard
                      key={i}
                      serviceImg={e.img}
                      header={e.header}
                      text={e.text}
                      cta={e.cta}
                      styles={e.styles}
                      serviceId={e.id}
                    />
                  ))
                : ""}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
