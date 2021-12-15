import styles from "./bookingStepButtons.module.scss";
import clsx from "clsx";

const BookingStepButtons = (props) => {
  return (
    <>
      <div className="mx-md-3 mx-1">
        <button
          className={clsx(styles["btn-previous"], "main-blue mt-2 mt-sm-0")}
          type="button"
          onClick={(e) => props.handlePrevStep(e)}
        >
          ←Previos step
        </button>
      </div>
      <div className="mx-1 mx-lg-3 mt-2 mt-sm-0">
        {props.handleClick ? (
          <button
            className={styles["btn-next"]}
            type={props.type}
            onClick={(e) => props.handleClick(e)}
          >
            Next
          </button>
        ) : (
          <button className={styles["btn-next"]} type={props.type}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default BookingStepButtons;
