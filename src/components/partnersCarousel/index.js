import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import Title from "../title";
import CarouselItem from "../carouselItem";
import { CarouselArrowNext, CarouselArrowPrev } from "../carouselArrows";

import image1 from "../../images/Ellipse16.png";
import image2 from "../../images/Ellipse16-1.png";
import image3 from "../../images/Ellipse16-2.png";

const partnersList = [
  {
    img: image1,
    name: "John Doe",
    partnerInfo: "Atatürk Bulvarı Derman Sk. No: 29 06050",
    phone: "088800000",
  },
  {
    img: image2,
    name: "John Doe",
    partnerInfo: "Atatürk Bulvarı Derman Sk. No: 29 06050",
    phone: "088800000",
  },
  {
    img: image3,
    name: "John Doe",
    partnerInfo: "Atatürk Bulvarı Derman Sk. No: 29 06050",
    phone: "088800000",
  },
  {
    img: image2,
    name: "John Doe",
    partnerInfo: "Atatürk Bulvarı Derman Sk. No: 29 06050",
    phone: "088800000",
  },
];

const Partners = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
        <Col lg={12} sm={12} style={{maxWidth: '583px'}} className="mx-auto">
          <Title text={"Partners"} style={{ textAlign: "center" }} />
          <div className='mt-5'>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris.</p>
          </div>
        </Col>
      </Row>
      <Row className="gx-0">
        <Col lg={12} sm={12}>
          <div className="slider-container">
            <Slider {...settings}>
              {partnersList
                ? partnersList.map((e, i) => (
                    <CarouselItem
                      key={i}
                      img={e.img}
                      info={e.partnerInfo}
                      phone={e.phone}
                      name={e.name}
                    />
                  ))
                : ""}
            </Slider>
          </div>
          <div className="mx-auto text-center">
            <Link className="all-partners" to="/all-partners">See all partners→</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Partners;
