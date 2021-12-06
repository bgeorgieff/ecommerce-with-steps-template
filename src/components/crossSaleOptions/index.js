import Title from "../title";

import greenTick from "../../images/green-tick.svg";

const CrossSaleOptions = ({ id, price, image, text, name, onClick }) => {
  return (
    <div className="py-3">
      <div className="cross-sale-carousel-container mx-auto">
        <div className="text-center">
          <img src={image} alt={name} className="mx-auto p-4" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between px-4 mb-4">
          <Title text={name} style={{ fontSize: "24px" }} />
          <div className="cross-sale-price text-left text-md-right">
            <span>{price}</span>
          </div>
        </div>
        <div className="px-4">
          <p>{text}</p>
        </div>
        <div className="px-4 mt-4 clearfix">
          <button className="cross-sale-btn" onClick={onClick} elementid={id}>
            Choose
          </button>
          <div className="float-right">
            <img src={greenTick} alt="green-tick" id="green-tick-selected" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossSaleOptions;
