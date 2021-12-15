import { Row, Col, Container } from "react-bootstrap";
import { Title } from "components";
import { SingleTestimonial } from "./SingleTestimonial";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  CrossSaleArrowNext,
  CrossSaleArrowPrev,
} from "../CarouselArrows/CarouselArrows";
import { useWindowSize } from "hooks";

const Testimonials = () => {
  const testimonialArr = useSelector((state) => state.testimonialReducer);
  const [testimonials, setTestimonials] = useState([]);
  const mobileWidth = useWindowSize("lg");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "cross-sale-carousel-dots",
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dotsClass: "cross-sale-carousel-dots",
          dots: true,
          arrows: true,
        },
      },
    ],
    nextArrow: (
      <CrossSaleArrowNext
        currentClass={"arrow-next"}
        styles={{ marginBottom: "4rem" }}
      />
    ),
    prevArrow: (
      <CrossSaleArrowPrev
        currentClass={"arrow-prev"}
        styles={{ marginBottom: "4rem" }}
      />
    ),
  };

  useEffect(() => {
    setTestimonials(testimonialArr);
  }, [testimonialArr]);

  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-12">
          <Title style={{ textAlign: "center" }}>Testimonials</Title>
        </Col>
        {mobileWidth ? (
          testimonials ? (
            <Slider {...settings}>
              {testimonials.map((e, i) => (
                <SingleTestimonial key={i}>{e}</SingleTestimonial>
              ))}
            </Slider>
          ) : (
            ""
          )
        ) : testimonials ? (
          testimonials.map((e, i) => (
            <Col key={i} className="col-4">
              <SingleTestimonial>{e}</SingleTestimonial>
            </Col>
          ))
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

export default Testimonials;
