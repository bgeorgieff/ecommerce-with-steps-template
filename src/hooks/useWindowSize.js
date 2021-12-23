import { useEffect, useState } from "react";

const breakPoints = {
  lg: 992,
  md: 768,
  sm: 576,
};

const useWindowSize = (type) => {
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    if (!breakPoints.hasOwnProperty(type)) {
      console.error("There is no such option");
    }

    window.addEventListener("resize", () => {
      if (breakPoints[type] > window.innerWidth) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    });
    return () => window.removeEventListener("resize", null);
  }, [mobileWidth, type]);

  return mobileWidth;
};

export default useWindowSize;
