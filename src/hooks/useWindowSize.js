import { useEffect } from "react";
import PropTypes from "prop-types";

const { useState } = require("react");

const breakPoints = {
  lg: 992,
  md: 768,
  sm: 576,
};

const useWindowSize = (type) => {
  const { innerWidth: width } = window;
  const [mobileWidth, setMobileWidth] = useState(false);

  const withPropTypesValidation = (e) => {
    PropTypes.checkPropTypes(propTypes, e, "props", "WindowSize");
  };

  useEffect(() => {
    if (!breakPoints.hasOwnProperty(type)) {
      return;
    } else {
      withPropTypesValidation({ type });
    }

    if (breakPoints[type] > width) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  }, [width, mobileWidth, type]);
  return mobileWidth;
};

const propTypes = {
  type: PropTypes.string.isRequired,
};

export default useWindowSize;
