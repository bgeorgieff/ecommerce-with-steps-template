import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselItem = ({ img, info, phone, name }) => {
  return (
    <Card
      as={Col}
      lg={4}
      sm={12}
      className="mx-auto my-5 card-element"
      style={{
        width: "255px",
        maxHeight: "342px",
        backgroundColor: "#2D69B3",
        color: "white",
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        className="mx-auto mt-3"
        style={{ maxWidth: "132px", maxHeight: "132px" }}
      />
      <Card.Body className="px-4">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center">{info}</Card.Text>
      </Card.Body>
      <Card.Body className="mx-auto">
        <Link
          to={`tel:${phone}`}
          className="text-center partner-link main-blue"
        >
          Call Now
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CarouselItem;
