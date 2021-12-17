import { Form, Image, Row, Col } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import styles from "./deliveryDetails.module.scss";
// import { FACEBOOK_ID } from "constants";
import portrait from "assets/icons/portrait-booking-form.svg";
import facebookLoginImg from "assets/icons/facebook-login.svg";
import locationcity from "assets/icons/location_city.svg";
import { useWindowSize } from "hooks";

// console.log(FACEBOOK_ID);
const DeliveryDetails = (props) => {
  const mobileWidth = useWindowSize("lg");

  const responseFacebook = async (res) => {
    console.log(res);
  };

  return (
    <div>
      <div className={`${styles["bradius"]} d-flex mx-auto flex-wrap`}>
        <div className={`${styles["delivery-form"]} pb-5 pb-md-0`}>
          <div className="d-flex justify-content-between mx-5 my-4">
            <img src={portrait} alt={portrait} />
            <FacebookLogin
              // appId={FACEBOOK_ID}
              autoLoad={false}
              fields="name, email, picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <button
                  className={styles["social-btn"]}
                  type="button"
                  onClick={renderProps.onClick}
                >
                  <Image fluid src={facebookLoginImg} />
                </button>
              )}
            />
          </div>
          <div className="mx-5">
            <p className={styles["delivery-info-text"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              molestie leo est, in ipsum dolor sit amet, consectetu
            </p>
          </div>
          <div className="mx-5 mt-3">
            <Row>
              <Form.Group
                as={Col}
                md="6"
                className="mb-3"
                controlId="deliveryFormName"
              >
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className={styles.input}
                  defaultValue={props.fNameVal || ""}
                  {...props.setFirstName}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                className="mb-3"
                controlId="deliveryFormLastName"
              >
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  className={styles.input}
                  defaultValue={props.children.lNameVal || ""}
                  {...props.setLastName}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                md="6"
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  className={styles.input}
                  defaultValue={props.children.phoneVal || ""}
                  {...props.setPhone}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                className="mb-3"
                controlId="deliveryFormEmail"
              >
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  className={styles.input}
                  defaultValue={props.children.emailVal || ""}
                  {...props.setEmail}
                />
              </Form.Group>
            </Row>
            <div
              style={{ borderBottom: "0.5px solid white" }}
              className="my-2"
            ></div>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Create an account with the info above"
                className={styles["delivery-form-checkbox"]}
              />
            </Form.Group>
          </div>
        </div>
        <div className={styles["delivery-info-form"]}>
          <div className="d-flex mt-4 mt-lg-5 mb-4 mx-5 align-items-center">
            {mobileWidth ? "" : <img src={locationcity} alt="location-city" />}
            <Form.Label className={`${styles["delivery-info-text"]} my-0`}>
              Delivery Information
            </Form.Label>
          </div>
          <div className="mx-5 mt-0 mt-lg-5 mb-5">
            <p className={styles["delivery-info-text"]}>
              Please fill in your full address below
            </p>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Street, Building Number, etc..."
              className={styles["delivery-text-area"]}
              defaultValue={props.children.addressVal || ""}
              {...props.setAddressDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
