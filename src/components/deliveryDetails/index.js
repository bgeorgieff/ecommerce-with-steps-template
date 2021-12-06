import { useEffect, useState } from "react";
import getWindowSize from "../../utils/getWindowSize";
import { Form, Image, Row, Col } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import portrait from "../../images/portrait-booking-form.svg";
import facebookLoginImg from "../../images/facebook-login.svg";
import locationcity from "../../images/location_city.svg";

const facebookID = process.env.REACT_APP_FACEBOOK_ID;

const DeliveryDetails = (props) => {
  const {
    setEmail,
    setFirstName,
    setLastName,
    setPhone,
    setAddressDetails,
    emailVal,
    phoneVal,
    fNameVal,
    lNameVal,
    addressVal,
  } = props;
  const { width } = getWindowSize();
  const [mobileWidth, setMobileWidth] = useState(false);

  const responseFacebook = async (res) => {
    console.log(res);
  };

  useEffect(() => {
    if (width < 992) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  }, [width]);

  return (
    <div>
      <div className="d-flex bradius mx-auto flex-wrap">
        <div className="delivery-form pb-5 pb-md-0">
          <div className="d-flex justify-content-between mx-5 my-4">
            <img src={portrait} alt={portrait} />
            <FacebookLogin
              appId={facebookID}
              autoLoad={false}
              fields="name, email, picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <button
                  className="social-btn"
                  type="button"
                  onClick={renderProps.onClick}
                >
                  <Image fluid src={facebookLoginImg} />
                </button>
              )}
            />
          </div>
          <div className="mx-5">
            <p className="delivery-info-text">
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
                  className="delivery-input"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={fNameVal || ""}
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
                  className="delivery-input"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lNameVal || ""}
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
                  className="delivery-input"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phoneVal || ""}
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
                  className="delivery-input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={emailVal || ""}
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
                className="delivery-form-checkbox"
              />
            </Form.Group>
          </div>
        </div>
        <div className="delivery-info-form">
          <div className="d-flex mt-4 mt-lg-5 mb-4 mx-5 align-items-center">
            {mobileWidth ? "" : <img src={locationcity} alt="location-city" />}
            <Form.Label className="delivery-info-text my-0">
              Delivery Information
            </Form.Label>
          </div>
          <div className="mx-5 mt-0 mt-lg-5 mb-5">
            <p className="delivery-info-text">
              Please fill in your full address below
            </p>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Street, Building Number, etc..."
              className="delivery-text-area"
              onChange={(e) => setAddressDetails(e.target.value)}
              value={addressVal || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
