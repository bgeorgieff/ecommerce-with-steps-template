import PropTypes from "prop-types";
import clsx from "clsx";
import React from "react";

const Title = (props) => {
  return (
    <H2 {...props} className={clsx("title-1 main-blue", props.className)} />
  );
};

const H2 = (props) => React.createElement("h2", props, props.children);

Title.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
};

export default Title;
