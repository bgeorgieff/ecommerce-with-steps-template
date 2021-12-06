import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Row, Image, Form } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../state/actions/booking";
import CrossSaleOptions from "../crossSaleOptions";
import BookingStepButtons from "../bookingStepButtons";
import Title from "../title";
import { CrossSaleArrowNext, CrossSaleArrowPrev } from "../carouselArrows";

import key from "../../images/key1.png";
import cardSymbol from "../../images/card-symbol.svg";
import cardsListOne from "../../images/card-methods-1.svg";
import cardsListTwo from "../../images/card-methods-2.svg";

const BookingStepThree = () => {
  const [clickedService, setClickedService] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [crossSales, setCrosSales] = useState([]);
  const [csv, setCSV] = useState("");
  const dispatch = useDispatch();
  const bookingDetails = useSelector(
    (state) => state.bookingReducer.bookingDetails
  );
  const crossSaleList = useSelector((state) => state.bookingReducer?.list);
  const { nextStep, prevStep, addCrossSale } = bindActionCreators(
    bookingActions,
    dispatch
  );
  const crossSalesCollection = [];

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

  const handleServiceClick = (e) => {
    e.preventDefault();
    setClickedService(!clickedService);
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

  const handlePrevStep = async (e) => {
    e.preventDefault();
    try {
      prevStep({
        ...bookingDetails,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      nextStep({
        ...bookingDetails,
        cardDetails: {
          cardNumber: cardNumber || "",
          expiryDate: expiryDate || "",
          CSV: csv || "",
        },
      });
    } catch (e) {
      console.log(e);
    }
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

  useEffect(() => {
    setCrosSales(crossSaleList);
  }, [crossSaleList]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="booking-service-card mx-auto mt-3 mb-5">
          <Col
            md={6}
            className="mx-auto p-3 d-flex flex-column justify-content-center"
          >
            <div className="mx-5 mx-auto">
              <Image fluid src={key} className="mx-auto" />
            </div>
          </Col>
          <Col md={6} className="p-3 d-flex flex-column justify-content-center">
            <div className="mx-4 mt-4">
              <Row className="d-flex justify-content-between mb-4">
                <Col lg={7}>
                  <h3 className="offer-name main-blue">Original Key</h3>
                </Col>
                <Col lg={5}>
                  <span className="offer-price">4000 TL</span>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    molestie leo est, in auctor lectus{" "}
                  </p>
                  <button
                    className="select-service"
                    onClick={handleServiceClick}
                  >
                    Choose
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="text-center mx-auto mt-3"
              style={{ maxWidth: "693px" }}
            >
              <Title text={"Custamization options"} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                molestie leo est, in auctor lectus elementum congue. Nulla neque
                nisi, placerat nec dolor nec, semper sodales mauris. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="mt-5 mx-auto">
              {crossSales ? (
                <Slider {...settings}>
                  {crossSales.map((e) => (
                    <CrossSaleOptions
                      id={e.id}
                      key={e.id}
                      name={e.name}
                      text={e.text}
                      price={e.price}
                      image={e.image}
                      onClick={handleCrossSale}
                    />
                  ))}
                </Slider>
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="card-payment-container mx-3 mx-lg-auto mt-5">
            <Row className="ps-3 px-lg-0">
              <Col className="xs-6 order-md-last px-0 px-md-5 my-3 d-flex justify-content-start align-items-center">
                <div className="card-image-holder">
                  <img
                    src={cardSymbol}
                    alt="card-payment"
                    className="card-image"
                  />
                </div>
              </Col>
              <Col className="ps-0 ps-md-4 d-flex align-items-center justify-content-start">
                <div>
                  <p className="card-payment-text">
                    Enter your bank details to complete your order
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                md={6}
                className="col-12 px-4 my-3 mt-lg-0 card-form-container"
              >
                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-3 col-12"
                    controlId="cardFormNumber"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Card Number"
                      className="delivery-input"
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-3 col-6 d-flex flex-column flex-lg-row justify-content-center align-items-lg-center col-md-7"
                    controlId="cardFormExp"
                  >
                    <Form.Label className="card-form-label-exp m-0 mb-2">
                      Expiry Date
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YY"
                      className="delivery-input ms-lg-2"
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-3 col-6 d-flex flex-column flex-lg-row justify-content-end align-items-lg-center col-md-5"
                    controlId="cardFormCSV"
                    style={{ marginLeft: "auto" }}
                  >
                    <Form.Label className="card-form-label m-0 mb-2">
                      CSV
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="XXX"
                      className="delivery-input ms-lg-2"
                      onChange={(e) => setCSV(e.target.value)}
                    />
                  </Form.Group>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div className="mx-2">
            <p>Supported Card</p>
          </div>
          <div className="payment-options-container mx-2">
            <img
              src={cardsListOne}
              alt="payment options"
              className="payment-options"
            />
          </div>
          <div className="payment-options-container mx-2 mt-lg-0 mt-3">
            <img
              src={cardsListTwo}
              alt="payment options"
              className="payment-options"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <BookingStepButtons handlePrevStep={handlePrevStep} type={"submit"} />
        </div>
      </Form>
    </>
  );
};

export default BookingStepThree;
