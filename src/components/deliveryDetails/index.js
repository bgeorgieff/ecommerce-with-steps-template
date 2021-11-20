import { Form, Image } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import portrait from "../../images/portrait-booking-form.svg";
import facebookLoginImg from "../../images/facebook-login.svg"
import locationcity from "../../images/location_city.svg"

const facebookID = process.env.REACT_APP_FACEBOOK_ID

const DeliveryDetails = ({ email, fName, lName, phone }) => {

  const responseFacebook = async (res) => {
    console.log(res);
  }

  return (
    <div>
      <div className="d-flex bradius mx-auto flex-wrap">
        <div className="delivery-form">
          <div className="d-flex justify-content-between mx-5 my-4">
            <img src={portrait} alt={portrait} />
            <FacebookLogin
              appId={facebookID}
              autoLoad={false}
              fields="name, email, picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <button className="social-btn" type="button" onClick={renderProps.onClick}>
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
            <div className="d-flex flex-grow">
              <div className="me-4" style={{width: "100%"}}>
                <Form.Group className="mb-3" controlId="deliveryFormName">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    className="delivery-input"
                    onChange={(e) => fName(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="ms-4" style={{width: "100%"}}>
                <Form.Group className="mb-3" controlId="deliveryFormLastName">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    className="delivery-input"
                    onChange={(e) => lName(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-4" style={{width: "100%"}}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    className="delivery-input"
                    onChange={(e) => phone(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="ms-4" style={{width: "100%"}}>
                <Form.Group className="mb-3" controlId="deliveryFormEmail">
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    className="delivery-input"
                    onChange={(e) => email(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
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
          <div className="d-flex mt-5 mb-4 mx-5 align-items-center">
            <img src={locationcity} alt="location-city" />
            <p className="delivery-info-text my-0">Delivery Information</p>
          </div>
          <div className="mx-5">
            <Form.Label className="delivery-info-text">Please fill in your full address below</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Street, Building Number, etc..." className="delivery-text-area" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
