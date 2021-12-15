import PropTypes from "prop-types";
import clsx from "clsx";

const Title = (props) => {
  return (
    <h2 className={clsx("title-1 main-blue", props.className)} {...props}>
      {props.children}
    </h2>
  );
};

Title.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
};

export default Title;
