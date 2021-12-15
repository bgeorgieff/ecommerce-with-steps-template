import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";
import { Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from "../authSection.module.scss";

import facebookLoginImg from "assets/icons/facebook-login.svg";
import googleLoginImg from "assets/icons/google-login.svg";

const googleOAUTH2ID = process.env.REACT_APP_GOOGLE_ID;
const facebookID = process.env.REACT_APP_FACEBOOK_ID;

const AuthForm = ({ type }) => {
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const passwordViewToggle = (e) => {
    if (e === "password") {
      setShowPass(!showPass);
    } else {
      setShowRePass(!showRePass);
    }
  };

  const handleSubmitLogin = (e) => {
    console.log(e);
  };

  const handleSubmitRegister = (e) => {
    console.log(e);
  };

  const responseFacebook = async (res) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google sign in unsuccessful. Try again.");
  };

  return (
    <>
      <Form
        onSubmit={
          type === "login"
            ? handleSubmit((data) => handleSubmitLogin(data))
            : handleSubmit((data) => handleSubmitRegister(data))
        }
        className={`${styles["auth-form"]} p-4 rounded`}
      >
        <Form.Group
          className="mb-3"
          controlId={
            type === "login" ? "formLoginEmail" : "formRegisterUsername"
          }
        >
          {type === "register" ? (
            <Form.Control
              type="text"
              placeholder="Ad Soyad"
              {...register("username")}
              autoComplete="username"
            />
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId={type === "login" ? "formLoginEmail" : "formRegisterEmail"}
        >
          <Form.Control
            type="email"
            placeholder="E-mail"
            {...register("email")}
            autoComplete="email"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId={
            type === "login" ? "formLoginPassword" : "formRegisterPassword"
          }
        >
          <div className={styles["password-container"]}>
            <Form.Control
              type={showPass ? "text" : "password"}
              placeholder="Sifre"
              {...register("password")}
              autoComplete="current-password"
            />
            <Form.Text className={styles["password-toggle"]}>
              <i
                onClick={() => passwordViewToggle("password")}
                className={`main-blue ${
                  showPass ? "fas fa-eye-slash" : "fas fa-eye"
                }`}
              ></i>
            </Form.Text>
          </div>
        </Form.Group>
        {type === "register" ? (
          <Form.Group
            className="mb-3"
            controlId={
              type === "login"
                ? "formLoginRepeatPassword"
                : "formRegisterRepeatPassword"
            }
          >
            <div className={styles["password-container"]}>
              <Form.Control
                type={showRePass ? "text" : "password"}
                placeholder="Şifrenizi Tekrarlayın"
                {...register("repeatPassword")}
                autoComplete="current-password"
              />
              <Form.Text className={styles["password-toggle"]}>
                <i
                  onClick={() => passwordViewToggle("repassword")}
                  className={`main-blue ${
                    showRePass ? "fas fa-eye-slash" : "fas fa-eye"
                  }`}
                ></i>
              </Form.Text>
            </div>
          </Form.Group>
        ) : (
          ""
        )}
        <div className="mb-3 text-end">
          <Link to="/forgotten-password">Forgot password?</Link>
        </div>
        <div className={`${styles["auth-btn-container"]} text-center`}>
          <button type="submit" className={styles["auth-btn"]}>
            Giriş
          </button>
        </div>
      </Form>
      {type === "login" ? (
        <div className="d-flex justify-content-between align-items-center my-5">
          <div className="mx-2">
            <FacebookLogin
              appId={facebookID}
              autoLoad={false}
              fields="name, email, picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <button
                  className={styles["social-btn"]}
                  onClick={renderProps.onClick}
                >
                  <Image fluid src={facebookLoginImg} />
                </button>
              )}
            />
          </div>
          <div className="mx-2">
            <GoogleLogin
              clientId={googleOAUTH2ID}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className={styles["social-btn"]}
                >
                  <Image fluid src={googleLoginImg} />
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AuthForm;
