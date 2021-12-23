import { createRef, useRef } from "react";
import styles from "./progressBar.module.scss";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";
import { iconArr, textArr } from "../constants";

const ProgressBar = (props) => {
  const { inView } = props;
  const nodeRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-between align-items-start mx-auto">
        {iconArr.map((e, i) => {
          const iconRef = createRef(null);
          return (
            <CSSTransition
              in={inView}
              classNames={"icon-color"}
              nodeRef={iconRef}
              timeout={i * 1000}
              key={i}
            >
              <div ref={iconRef} className={clsx(styles.icons, "text-center")}>
                <img src={e} alt="" />
              </div>
            </CSSTransition>
          );
        })}
      </div>
      <div className={clsx(styles.staticsContainer, "mx-auto")}>
        <div className={styles.progressLine}>
          <CSSTransition
            in={inView}
            classNames={"line-width"}
            nodeRef={nodeRef}
            timeout={600}
          >
            <div ref={nodeRef} className={styles.progressLineInner}></div>
          </CSSTransition>
        </div>

        <div className="d-flex justify-content-between align-items-center mx-auto">
          {textArr.map((e, i) => {
            const dotRef = createRef(null);
            return (
              <CSSTransition
                in={inView}
                classNames={"dots-color"}
                nodeRef={dotRef}
                timeout={i * 1000}
                key={i}
              >
                <div ref={dotRef} className={clsx(styles.dots, "text-center")}>
                  {i + 1}
                </div>
              </CSSTransition>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-md-start align-items-center mx-auto">
        {textArr.map((e, i) => {
          const textRef = createRef(null);
          return (
            <CSSTransition
              in={inView}
              classNames={"texts-color"}
              nodeRef={textRef}
              timeout={i * 1000}
              key={i}
            >
              <div
                ref={textRef}
                style={{ width: "20%" }}
                className={clsx(styles.texts, "text-center mx-auto")}
              >
                {e}
              </div>
            </CSSTransition>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
