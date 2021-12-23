import styles from "../testimonials.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const SingleTestimonial = (props) => {
  const { text, author } = props;
  return (
    <div
      className={clsx("mx-4 my-5 px-4 pt-5 pb-4", styles["pattern-2"])}
      style={{ backgroundColor: "#2d69b3" }}
    >
      <p>{text}</p>
      <p>{author}</p>
    </div>
  );
};

SingleTestimonial.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};

export default SingleTestimonial;
