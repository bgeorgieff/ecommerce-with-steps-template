import { Row, Col, Container } from "react-bootstrap";
import Title from "../title";
import SingleTestimonial from "../singleTestimonial";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useWindowSize from "../../utils/getWindowSize";
import Slider from "react-slick";
import { CrossSaleArrowNext, CrossSaleArrowPrev } from "../carouselArrows";

const Testimonials = () => {
  const testimonialArr = useSelector((state) => state.testimonialReducer);
  const [testimonials, setTestimonials] = useState([]);
  const [mobileWidth, setMobileWidth] = useState(false);
  const { width } = useWindowSize();

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
    if (width < 992) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  }, [width]);

  useEffect(() => {
    setTestimonials(testimonialArr);
  }, [testimonialArr]);

  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-12">
          <Title text={"Testimonials"} style={{ textAlign: "center" }} />
        </Col>
        {mobileWidth ? (
          testimonials ? (
            <Slider {...settings}>
              {testimonials.map((e, i) => (
                <SingleTestimonial
                  key={i}
                  testimonialTxt={e.text}
                  author={e.author}
                />
              ))}
            </Slider>
          ) : (
            ""
          )
        ) : testimonials ? (
          testimonials.map((e, i) => (
            <Col key={i} className="col-4">
              <SingleTestimonial testimonialTxt={e.text} author={e.author} />
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
