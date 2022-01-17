import { useState } from "react";
import styles from "./ratingStars.module.scss";

const RatingStars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = async (index) => {
    try {
      setRating(index);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <div
              className={index <= (hover || rating) ? styles.on : styles.off}
            ></div>
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;
