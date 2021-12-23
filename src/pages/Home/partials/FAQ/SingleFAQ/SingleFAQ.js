import { Accordion } from "react-bootstrap";
import styles from "../faq.module.scss";
import clsx from "clsx";

const SingleFAQ = (props) => {
  const { itemKey, itemHeader, itemBody } = props;
  return (
    <Accordion.Item
      className={clsx("mt-3", styles["faq-radius"])}
      eventKey={itemKey}
    >
      <Accordion.Header className="main-blue">{itemHeader}</Accordion.Header>
      <Accordion.Body>
        <hr style={{ marginTop: "-1%", marginBottom: "3%" }} />
        {itemBody}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SingleFAQ;
