import { useEffect, useState } from "react";

const breakPoints = {
  lg: 992,
  md: 768,
  sm: 576,
};

const useWindowSize = (type) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    if (!breakPoints.hasOwnProperty(type)) {
      console.error("There is no such option");
    }

    if (breakPoints[type] > width) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => window.removeEventListener("resize", null);
  }, [width, mobileWidth, type]);

  return mobileWidth;
};

export default useWindowSize;
