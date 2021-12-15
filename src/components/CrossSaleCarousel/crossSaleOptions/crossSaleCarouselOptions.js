import { Title } from "components";
import styles from "../crossSaleCarousel.module.scss";
import clsx from "clsx";

import greenTick from "assets/icons/green-tick.svg";

const CrossSaleCarouselOptions = (props) => {
  return (
    <div className="py-3">
      <div className={clsx(styles["cross-sale-carousel-container"], "mx-auto")}>
        <div className="text-center">
          <img
            src={props.children.image}
            alt={props.children.name}
            className="mx-auto p-4"
          />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between px-4 mb-4">
          <Title style={{ fontSize: "24px" }}>{props.children.name}</Title>
          <div
            className={clsx(
              styles["cross-sale-price"],
              "text-left text-md-right"
            )}
          >
            <span>{props.children.price}</span>
          </div>
        </div>
        <div className="px-4">
          <p>{props.children.text}</p>
        </div>
        <div className="px-4 mt-4 clearfix">
          <button
            className={styles["cross-sale-btn"]}
            onClick={props.onClick}
            elementid={props.children.id}
          >
            Choose
          </button>
          <div className={clsx("float-right", styles["tick-container"])}>
            <img src={greenTick} alt="green-tick" id="green-tick-selected" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossSaleCarouselOptions;
