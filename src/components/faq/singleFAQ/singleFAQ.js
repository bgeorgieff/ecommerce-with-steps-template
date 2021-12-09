import { Accordion } from "react-bootstrap";
import styles from "../faq.module.scss";
import PropTypes from "prop-types";

const SingleFAQ = (props) => {
  return (
    <Accordion.Item
      className={`mt-3 ${styles["faq-radius"]}`}
      eventKey={props.itemKey}
    >
      <Accordion.Header className="main-blue">
        {props.itemHeader}
      </Accordion.Header>
      <Accordion.Body>
        <hr style={{ marginTop: "-1%", marginBottom: "3%" }} />
        {props.itemBody}
      </Accordion.Body>
    </Accordion.Item>
  );
};

SingleFAQ.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      itemKey: PropTypes.string,
      itemHeader: PropTypes.string,
      itemBody: PropTypes.itemBody,
    })
  ),
};

export default SingleFAQ;
