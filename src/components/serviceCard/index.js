import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../state/actions/booking";

const ServiceCard = ({ serviceImg, header, text, cta, styles, serviceId }) => {
  const dispatch = useDispatch();
  const { nextStep } = bindActionCreators(bookingActions, dispatch);
  const clientDetails = useSelector((state) => state.authReducer?.authData);

  const handleClick = () => {
    nextStep({
      serviceId: serviceId,
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
      style={{ width: styles.width, maxHeight: styles.height }}
      className="mx-1 mx-lg-3 my-3 rounded-card"
    >
      {serviceImg ? (
        <div className="mt-5 mb-2 service-img">
          <Card.Img variant="top" src={serviceImg} />
        </div>
      ) : (
        ""
      )}
      <Card.Body className="d-flex justify-content-start align-items-center flex-column">
        <Card.Title className="text-center">
          <h2 className="main-blue s-txt" style={{ fontSize: styles.fontSize }}>
            {header}
          </h2>
        </Card.Title>
        <Card.Text
          className={`text-center ${
            styles.fontSize ? "card-txt-transform" : ""
          }`}
        >
          {text}
        </Card.Text>
        {cta ? (
          <div className="mt-2">
            <Link
              className="card-link mx-auto"
              to={`/service-page/${serviceId}/step-1`}
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

export default ServiceCard;
