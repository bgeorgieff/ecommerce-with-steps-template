import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../../state/actions/booking";
import styles from "../services.module.scss";
import PropTypes from "prop-types";

const ServiceCard = (props) => {
  const dispatch = useDispatch();
  const { nextStep } = bindActionCreators(bookingActions, dispatch);
  const clientDetails = useSelector((state) => state.authReducer?.authData);

  const handleClick = () => {
    nextStep({
      serviceName: props.name,
      clientDetails: {
        name: clientDetails?.result.name || "",
        token: clientDetails?.result.token || "",
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
      },
      bookingStep: 0,
    });
  };

  return (
    <Card
      style={{
        width: props.styles.width,
        maxHeight: props.styles.height,
      }}
      className={`mx-1 mx-lg-3 my-3 ${styles["rounded"]}`}
    >
      {props.img ? (
        <div className={`mt-5 mb-2 ${styles["service-img"]}`}>
          <Card.Img variant="top" src={props.img} />
        </div>
      ) : (
        ""
      )}
      <Card.Body className="d-flex justify-content-start align-items-center flex-column">
        <Card.Title className="text-center">
          <h2
            className={`main-blue ${styles["s-txt"]}`}
            style={{ fontSize: props.styles.fontSize }}
          >
            {props.header}
          </h2>
        </Card.Title>
        <Card.Text
          className={`text-center ${
            props.styles.fontSize ? styles["card-txt-transform"] : ""
          }`}
        >
          {props.text}
        </Card.Text>
        {props.cta ? (
          <div className="mt-2">
            <Link
              className={`${styles["card-link"]} mx-auto`}
              to={`/service-page/${props.name}/step-1`}
              onClick={() => handleClick()}
            >
              {props.cta}
            </Link>
          </div>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
};

ServiceCard.propTypes = {
  serviceImg: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  cta: PropTypes.string,
  styles: PropTypes.object,
};

export default ServiceCard;
