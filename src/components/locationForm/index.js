import { Form } from "react-bootstrap";
import locationSmall from "../../images/location-small.svg";

// TODO FETCH AND UPDATE ADDRESS AND CITIES

const LocationForm = ({ address, city, possibleLocations }) => {
  return (
    <div className="location-form-container d-flex flex-column justify-content-center align-items-center">
      <div style={{ maxWidth: "315px" }}>
        <div className="location-form-text-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            molestie leo est, in
          </p>
        </div>
        <Form.Group controlId="">
          <div className="mt-5">
            <Form.Select
              className="location-placeholder"
              aria-label="Default select"
              defaultValue={address || "Choose District"}
              onChange={(e) => address(e.target.value)}
            >
              <option disabled>Choose District</option>
              {/* {possibleLocations
                ? possibleLocations.map((e, i) => {
                    <option key={i}>{e.address}</option>;
                  })
                : ""} */}
              <option>{address}</option>
            </Form.Select>
          </div>
          <div className="my-4">
            <Form.Select
              className="location-placeholder"
              aria-label="Default select"
              defaultValue={city || "Choose District"}
              onChange={(e) => city(e.target.value)}
            >
              <option disabled>Choose District</option>
              {/* {possibleLocations
                ? possibleLocations.map((e, i) => {
                    <option key={i}>{e.city}</option>;
                  })
                : ""} */}
            </Form.Select>
          </div>
          <div className="find-my-location">
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

export default LocationForm;
