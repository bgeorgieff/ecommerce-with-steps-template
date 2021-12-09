import { Col, Row, Container } from "react-bootstrap";
import { Title } from "components";
import ServiceCard from "./serviceCard/serviceCard";
// eslint-disable-next-line no-unused-vars
import styles from "./services.module.scss";
import PropTypes from "prop-types";

const Services = (props) => {
  return (
    <Container fluid className="gx-0">
      <Row className="gx-0">
        <Col>
          <div className={`${props.bgActive ? "bg-keys" : ""}`}>
            {props.headerTxt || props.introduction ? (
              <div className="pt-2">
                {props.headerTxt ? (
                  <Title
                    text={props.headerTxt}
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: "5rem",
                    }}
                  />
                ) : (
                  ""
                )}
                {props.introduction ? (
                  <p
                    className="text-center mx-auto my-3 px-sm-0 px-5"
                    style={{ color: "white", maxWidth: "491px" }}
                  >
                    {props.introduction}
                  </p>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-center flex-wrap mb-5 pb-5">
              {props.cardItems
                ? props.cardItems.map((e, i) => <ServiceCard key={i} {...e} />)
                : ""}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Services.propTypes = {
  bgActive: PropTypes.bool,
  introduction: PropTypes.string,
  headerTxt: PropTypes.string,
  cardItems: PropTypes.arrayOf(PropTypes.object),
};

export default Services;
