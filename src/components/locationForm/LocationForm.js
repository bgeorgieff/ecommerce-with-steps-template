import { Form } from "react-bootstrap";
import locationSmall from "../../assets/icons/location-small.svg";
import styles from "./locationForm.module.scss";
import PropTypes from "prop-types";

// TODO FETCH AND UPDATE ADDRESS AND CITIES

const LocationForm = (props) => {
  return (
    <div
      className={`${styles["location-form-container"]} d-flex flex-column justify-content-center align-items-center`}
    >
      <div style={{ maxWidth: "315px" }}>
        <div className={styles["location-form-text-container"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            molestie leo est, in
          </p>
        </div>
        <Form.Group controlId="">
          <div className="mt-5">
            <Form.Select
              className={`${styles["location-placeholder"]} booking-forms-down-arrow`}
              aria-label="Default select"
              defaultValue={props.address || "Choose District"}
              onChange={(e) => props.address(e.target.value)}
            >
              <option disabled>Choose District</option>

              <option>{props.address}</option>
            </Form.Select>
          </div>
          <div className="my-4">
            <Form.Select
              className={`${styles["location-placeholder"]} booking-forms-down-arrow`}
              aria-label="Default select"
              defaultValue={props.city || "Choose District"}
              onChange={(e) => props.city(e.target.value)}
            >
              <option disabled>Choose District</option>
            </Form.Select>
          </div>
          <div className={styles["find-my-location"]}>
            <div>
              <span className="me-1">
                <img src={locationSmall} alt="find location" />
              </span>
              or find my location→
            </div>
          </div>
        </Form.Group>
      </div>
    </div>
  );
};

LocationForm.propTypes = {
  address: PropTypes.func,
  city: PropTypes.func,
};

export default LocationForm;
