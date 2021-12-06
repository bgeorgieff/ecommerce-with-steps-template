import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import Title from "../title";
import CarouselItem from "../carouselItem";
import { CarouselArrowNext, CarouselArrowPrev } from "../carouselArrows";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Partners = () => {
  const partners = useSelector((state) => state.partnerListReducer);
  const [partnersList, setPartnersList] = useState([]);

  useEffect(() => {
    setPartnersList(partners);
  }, [partners]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
    nextArrow: <CarouselArrowNext />,
    prevArrow: <CarouselArrowPrev />,
  };

  return (
    <Container fluid className="fluid-keys-container gx-0 py-5">
      <Row className="gx-0">
        <Col lg={12} sm={12} style={{ maxWidth: "583px" }} className="mx-auto">
          <Title text={"Partners"} style={{ textAlign: "center" }} />
          <div className="mt-5">
            <p className="text-center mx-lg-2 mx-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              molestie leo est, in auctor lectus elementum congue. Nulla neque
              nisi, placerat nec dolor nec, semper sodales mauris.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="gx-0">
        <Col lg={12} sm={12}>
          <div className="slider-container">
            {partnersList ? (
              <Slider {...settings}>
                {partnersList.map((e, i) => (
                  <CarouselItem
                    key={i}
                    img={e.img}
                    info={e.partnerInfo}
                    phone={e.phone}
                    name={e.name}
                  />
                ))}
              </Slider>
            ) : (
              ""
            )}
          </div>
          <div className="mx-auto text-center">
            <Link className="all-partners" to="/all-partners">
              See all partners→
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Partners;
