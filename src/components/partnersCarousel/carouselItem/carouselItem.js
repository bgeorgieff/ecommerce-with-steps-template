import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../partnersCarousel.module.scss";
import PropTypes from "prop-types";

const CarouselItem = (props) => {
  return (
    <Card
      as={Col}
      lg={4}
      sm={12}
      className={`mx-auto my-5 ${styles["card-element"]}`}
      style={{
        width: "255px",
        maxHeight: "342px",
        backgroundColor: "#2D69B3",
        color: "white",
      }}
    >
      <Card.Img
        variant="top"
        src={props.img}
        className="mx-auto mt-3"
        style={{ maxWidth: "132px", maxHeight: "132px" }}
      />
      <Card.Body className="px-4">
        <Card.Title className="text-center">{props.name}</Card.Title>
        <Card.Text className="text-center">{props.info}</Card.Text>
      </Card.Body>
      <Card.Body className="mx-auto">
        <Link
          to={`tel:${props.phone}`}
          className={`${styles["partner-link"]} text-center main-blue`}
        >
          Call Now
        </Link>
      </Card.Body>
    </Card>
  );
};

CarouselItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.string,
  phone: PropTypes.string,
};

export default CarouselItem;
