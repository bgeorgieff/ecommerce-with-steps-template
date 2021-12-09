import styles from "./bookingStepButtons.module.scss";
import PropTypes from "prop-types";

const BookingStepButtons = (props) => {
  return (
    <>
      <div className="mx-md-3 mx-1">
        <button
          className={`${styles["btn-previous"]} main-blue mt-2 mt-sm-0`}
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

BookingStepButtons.propTypes = {
  props: PropTypes.shape({
    handleClick: PropTypes.func,
    type: PropTypes.string,
    handlePrevStep: PropTypes.func,
  }),
};

export default BookingStepButtons;
