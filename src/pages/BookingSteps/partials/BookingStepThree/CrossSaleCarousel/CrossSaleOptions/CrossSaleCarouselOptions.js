import { useState, useRef, useEffect } from "react";
import { bindActionCreators } from "redux";
import { bookingActions } from "state/actions/booking";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import styles from "../crossSaleCarousel.module.scss";
import { Title } from "components";
import { greenTick } from "../constants";

const CrossSaleCarouselOptions = (props) => {
  const { image, name, text, price, id } = props;
  const dispatch = useDispatch();
  const { addCrossSale } = bindActionCreators(bookingActions, dispatch);
  const { removeCrossSale } = bindActionCreators(bookingActions, dispatch);
  const crossSaleIds = useSelector((state) => state.crossSaleReducer);
  const btnRef = useRef(null);
  const [btnAttrIds, setBtnAttrIds] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleCrossSale = (e) => {
    e.preventDefault();

    if (btnAttrIds && !isSelected) {
      addCrossSale(btnAttrIds);
    } else if (isSelected) {
      removeCrossSale(btnAttrIds);
    }
  };

  useEffect(() => {
    setBtnAttrIds(btnRef.current.getAttribute("elementId"));
    setIsSelected(() => crossSaleIds.some((e) => e.id === btnAttrIds));
  }, [crossSaleIds, btnAttrIds]);

  return (
    <div className="py-3">
      <div
        className={clsx(
          styles["cross-sale-carousel-container"],
          isSelected ? styles.greenBorder : "",
          "mx-auto"
        )}
      >
        <div className="text-center">
          <img src={image} alt={name} className="mx-auto p-4" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between px-4 mb-4">
          <Title
            style={{
              color: isSelected ? "green" : "",
              fontSize: "24px",
            }}
          >
            {name}
          </Title>
          <div
            className={clsx(
              styles["cross-sale-price"],
              "text-left text-md-right"
            )}
          >
            <span>{price}</span>
          </div>
        </div>
        <div className="px-4">
          <p>{text}</p>
        </div>
        <div className="px-4 mt-4 clearfix">
          <button
            ref={btnRef}
            className={clsx(
              styles["cross-sale-btn"],
              isSelected ? styles.btnGreen : ""
            )}
            onClick={handleCrossSale}
            elementid={id}
          >
            Choose
          </button>

          <div
            className={clsx(
              "float-right",
              isSelected ? styles.tickContainerActive : styles.tickContainer
            )}
          >
            <img src={greenTick} alt="green-tick" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossSaleCarouselOptions;
