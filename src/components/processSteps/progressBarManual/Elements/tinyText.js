import clsx from "clsx";
import styles from "../progressBarManual.module.scss";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const TinyText = (props) => {
  const { isActive, isPrev, isLast } = props;
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isActive}
      classNames={"text-grey"}
      appear={true}
      timeout={100}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={clsx(isPrev || isLast ? styles.textGreen : styles.textGrey)}
        style={{ width: "20%" }}
      >
        <p className={clsx(styles.text, "mx-3")}>{props.children}</p>
      </div>
    </CSSTransition>
  );
};

export default TinyText;
