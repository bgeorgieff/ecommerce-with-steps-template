import clsx from "clsx";
import styles from "../progressBarManual.module.scss";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const TinyDot = (props) => {
  const { isActive, isPrev, isLast } = props;
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isActive}
      classNames={"dots-grey"}
      appear={true}
      timeout={100}
      nodeRef={nodeRef}
    >
      <div
        current-step={0}
        ref={nodeRef}
        className={clsx(
          "d-flex justify-content-center align-items-center",
          isPrev || isLast ? styles.dotsGreen : styles.dotsGrey
        )}
      >
        {props.children}
      </div>
    </CSSTransition>
  );
};

export default TinyDot;
