import { Col, Row, Container } from "react-bootstrap";
import { Title } from "components";
import ServiceCard from "./ServiceCard/ServiceCard";
// eslint-disable-next-line no-unused-vars
import styles from "./services.module.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

const Services = (props) => {
  console.log(props);
  return (
    <Container fluid className="gx-0">
      <Row className="gx-0">
        <Col>
          <div className={clsx(props.bgActive ? "bg-keys" : "")}>
            {props.children.headerTxt || props.children.introduction ? (
              <div className="pt-2">
                {props.children.headerTxt ? (
                  <Title
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: "5rem",
                    }}
                  >
                    {props.children.headerTxt}
                  </Title>
                ) : (
                  ""
                )}
                {props.children.introduction ? (
                  <p
                    className="text-center mx-auto my-3 px-sm-0 px-5"
                    style={{ color: "white", maxWidth: "491px" }}
                  >
                    {props.children.introduction}
                  </p>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-center flex-wrap mb-5 pb-5">
              {props.children.cardItems
                ? props.children.cardItems.map((e, i) => (
                    <ServiceCard key={i}>{e}</ServiceCard>
                  ))
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
