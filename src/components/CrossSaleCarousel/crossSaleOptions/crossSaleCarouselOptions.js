import { Title } from "components";
import styles from "../crossSaleCarousel.module.scss";
import PropTypes from "prop-types";

import greenTick from "../../../assets/icons/green-tick.svg";

const CrossSaleCarouselOptions = (props) => {
  const titleStyle = { fontSize: "24px" };

  const titleProps = {
    text: props.name,
    style: titleStyle,
  };

  return (
    <div className="py-3">
      <div className={`${styles["cross-sale-carousel-container"]} mx-auto`}>
        <div className="text-center">
          <img src={props.image} alt={props.name} className="mx-auto p-4" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between px-4 mb-4">
          <Title {...titleProps} />
          <div
            className={`${styles["cross-sale-price"]} text-left text-md-right`}
          >
            <span>{props.price}</span>
          </div>
        </div>
        <div className="px-4">
          <p>{props.text}</p>
        </div>
        <div className="px-4 mt-4 clearfix">
          <button
            className={styles["cross-sale-btn"]}
            onClick={props.onClick}
            elementid={props.id}
          >
            Choose
          </button>
          <div className={`float-right ${styles["tick-container"]}`}>
            <img src={greenTick} alt="green-tick" id="green-tick-selected" />
          </div>
        </div>
      </div>
    </div>
  );
};

CrossSaleCarouselOptions.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      text: PropTypes.string,
      onClick: PropTypes.func,
      id: PropTypes.string,
    })
  ),
};

export default CrossSaleCarouselOptions;
