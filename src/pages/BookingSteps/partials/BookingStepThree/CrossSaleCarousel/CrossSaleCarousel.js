import {
  CrossSaleArrowNext,
  CrossSaleArrowPrev,
} from "components/CarouselArrows";
import { CrossSaleCarouselOptions } from "./CrossSaleOptions";
import Slider from "react-slick";

import { Title } from "components";

const CrossSaleCarousel = ({ children }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    dotsClass: "cross-sale-carousel-dots",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dotsClass: "cross-sale-carousel-dots",
          dots: true,
          arrows: true,
        },
      },
    ],
    nextArrow: <CrossSaleArrowNext currentClass={"arrow-next"} />,
    prevArrow: <CrossSaleArrowPrev currentClass={"arrow-prev"} />,
  };

  return (
    <>
      <div className="text-center mx-auto mt-3" style={{ maxWidth: "693px" }}>
        <Title>Custamization options</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat
          nec dolor nec, semper sodales mauris. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
      <div className="mt-5 mx-auto">
        {children ? (
          <Slider {...settings}>
            {children.map((e, i) => (
              <CrossSaleCarouselOptions key={i} {...e} />
            ))}
          </Slider>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CrossSaleCarousel;
