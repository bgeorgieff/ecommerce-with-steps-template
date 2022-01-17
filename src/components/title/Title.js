import clsx from "clsx";
import React from "react";

const Title = (props) => {
  return (
    <H2 {...props} className={clsx("title-1 main-blue", props.className)} />
  );
};

const H2 = (props) => React.createElement("h2", props, props.children);

export default Title;
