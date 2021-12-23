import clsx from "clsx";
import styles from "../progressBarManual.module.scss";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const TinyIcon = (props) => {
  const { isActive, isPrev, isLast } = props;
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isActive}
      classNames={"icon-grey"}
      appear={true}
      timeout={100}
      nodeRef={nodeRef}
    >
      <div
        current-step={4}
        ref={nodeRef}
        className={clsx(
          "mx-auto text-center",
          isPrev || isLast ? styles.iconGreen : styles.iconGrey
        )}
        style={{ width: "20%" }}
      >
        <img src={props.children} alt="" />
      </div>
    </CSSTransition>
  );
};

export default TinyIcon;
