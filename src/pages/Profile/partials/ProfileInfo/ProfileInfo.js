import { Title } from "components";
import { useSelector } from "react-redux";
import { Col, Row, Form } from "react-bootstrap";
import styles from "./profileInfo.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ProfileInfo = () => {
  const { register, handleSubmit } = useForm();
  const firstName = useSelector(
    (state) => state.authReducer?.authData.result.givenName
  );
  const lastName = useSelector(
    (state) => state.authReducer?.authData.result.familyName
  );

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div className="mb-5">
        <Title>Merhaba, {firstName}</Title>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          leo est.
        </p>
      </div>
      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className={styles.formContainer}
      >
        <Row>
          <Col className="col-6">
            <Form.Group className="mb-3 col-12">
              <Form.Label className={styles.labelText}>First Name</Form.Label>
              <Form.Control
                className={styles.inputField}
                defaultValue={firstName}
                type="text"
                {...register("firstName")}
              />
            </Form.Group>
          </Col>
          <Col className="col-6">
            <Form.Group className="mb-3 col-12">
              <Form.Label className={styles.labelText}>Last Name</Form.Label>
              <Form.Control
                className={styles.inputField}
                defaultValue={lastName}
                type="text"
                {...register("lastName")}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <Form.Group className="mb-3 col-12" controlId="cardFormNumber">
              <Form.Label className={styles.labelText}>Tel. Number</Form.Label>
              <Form.Control
                className={styles.inputField}
                type="text"
                {...register("telNumber")}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-12" controlId="cardFormNumber">
              <Form.Label className={styles.labelText}>Email</Form.Label>
              <Form.Control
                className={styles.inputField}
                type="text"
                {...register("email")}
              />
            </Form.Group>
            <div className="mt-5">
              <button type="submit">Update</button>
            </div>
            <div className="mt-4">
              <Link to="/change-password">Change Password</Link>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProfileInfo;
