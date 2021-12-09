import {
  CrossSaleArrowNext,
  CrossSaleArrowPrev,
} from "../CarouselArrows/CarouselArrows";
import CrossSaleOptions from "./crossSaleOptions/crossSaleCarouselOptions";
import Slider from "react-slick";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { bookingActions } from "state/actions/booking";
import { Title } from "components";

const CrossSaleCarousel = ({ list }) => {
  const dispatch = useDispatch();
  const { addCrossSale } = bindActionCreators(bookingActions, dispatch);
  const crossSalesCollection = [];

  const titleProps = {
    text: "Custamization options",
  };

  const transition = (
    currentDiv,
    currentBtn,
    currentTitle,
    currentSelected
  ) => {
    if (currentDiv.classList.contains("green-border")) {
      currentDiv.classList.remove("green-border");
      currentBtn.style.backgroundColor = "#2D69B3";
      currentTitle.style.color = "#2D69B3";
      currentSelected.style.opacity = "0";
    } else {
      currentDiv.classList.add("green-border");
      currentBtn.style.backgroundColor = "#36A341";
      currentTitle.style.color = "#36A341";
      currentSelected.style.opacity = "1";
    }
  };

  const handleCrossSale = (e) => {
    e.preventDefault();
    const $currentNode = e.target.parentNode.parentNode;
    const $currentBtn = e.target;
    const $currentTitle = e.target.parentNode.parentNode.querySelector(
      "h2.title-1.main-blue"
    );
    const $currentSelected = e.target.parentNode.querySelector(
      "div.float-right img"
    );
    const $crossSaleAttrId = e.target.attributes.elementid.value;

    transition($currentNode, $currentBtn, $currentTitle, $currentSelected);

    if ($crossSaleAttrId && !crossSalesCollection.includes($crossSaleAttrId)) {
      crossSalesCollection.push($crossSaleAttrId);
    } else if (crossSalesCollection.includes($crossSaleAttrId)) {
      const index = crossSalesCollection.indexOf($crossSaleAttrId);
      crossSalesCollection.splice(index, 1);
    }

    addCrossSale({ crossSales: crossSalesCollection });
  };

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
        <Title {...titleProps} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat
          nec dolor nec, semper sodales mauris. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
      <div className="mt-5 mx-auto">
        {list ? (
          <Slider {...settings}>
            {list.map((e, i) => (
              <CrossSaleOptions key={i} {...e} onClick={handleCrossSale} />
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
