import PropTypes from "prop-types";

const Title = (props) => {
  return (
    <h2 className="title-1 main-blue" style={props.style}>
      {props.text}
    </h2>
  );
};

Title.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
};

export default Title;
