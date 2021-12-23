import { Col, Row, Container } from "react-bootstrap";
import { Title } from "components";
import ServiceCard from "./ServiceCard/ServiceCard";
// eslint-disable-next-line no-unused-vars
import styles from "./services.module.scss";
import PropTypes from "prop-types";
import clsx from "clsx";
import { aboutPageServiceItems, homePageServiceItems } from "./constants";
import { useEffect, useState } from "react";

const Services = (props) => {
  const { headerTxt, introduction, home } = props;
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(home);
  }, [home]);

  return (
    <Container fluid className="gx-0">
      <Row className="gx-0">
        <Col>
          <div className={clsx(props.bgActive ? "bg-keys" : "")}>
            {headerTxt || introduction ? (
              <div className="pt-2">
                {headerTxt ? (
                  <Title
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: "5rem",
                    }}
                  >
                    {headerTxt}
                  </Title>
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
              {isHome
                ? homePageServiceItems.map((e, i) => (
                    <ServiceCard key={i} {...e} />
                  ))
                : aboutPageServiceItems.map((e, i) => (
                    <ServiceCard key={i} {...e} />
                  ))}
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
