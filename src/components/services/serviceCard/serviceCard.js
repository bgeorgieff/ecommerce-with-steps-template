import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "state/actions/booking";
import styles from "../services.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const ServiceCard = (props) => {
  const { name, img, cta, text, header, style } = props;
  const dispatch = useDispatch();
  const { nextStep } = bindActionCreators(bookingActions, dispatch);
  const clientDetails = useSelector((state) => state.authReducer?.authData);

  const handleClick = () => {
    nextStep({
      serviceName: name,
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
        width: style.width,
        maxHeight: style.height,
      }}
      className={clsx("mx-1 mx-lg-3 my-3", styles["rounded"])}
    >
      {img ? (
        <div className={clsx("mt-5 mb-2", styles["service-img"])}>
          <Card.Img variant="top" src={img} />
        </div>
      ) : (
        ""
      )}
      <Card.Body className="d-flex justify-content-start align-items-center flex-column">
        <Card.Title className="text-center">
          <h2
            className={clsx("main-blue", styles["s-txt"])}
            style={{ fontSize: style.fontSize }}
          >
            {header}
          </h2>
        </Card.Title>
        <Card.Text
          className={clsx(
            "text-center",
            style.fontSize ? styles["card-txt-transform"] : ""
          )}
        >
          {text}
        </Card.Text>
        {cta ? (
          <div className="mt-2">
            <Link
              className={clsx(styles["card-link"], "mx-auto")}
              to={`/service-page/${name}/step-1`}
              onClick={() => handleClick()}
            >
              {cta}
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
