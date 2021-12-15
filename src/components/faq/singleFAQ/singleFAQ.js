import { Accordion } from "react-bootstrap";
import styles from "../faq.module.scss";
import clsx from "clsx";

const SingleFAQ = ({ children }) => {
  return (
    <Accordion.Item
      className={clsx("mt-3", styles["faq-radius"])}
      eventKey={children.itemKey}
    >
      <Accordion.Header className="main-blue">
        {children.itemHeader}
      </Accordion.Header>
      <Accordion.Body>
        <hr style={{ marginTop: "-1%", marginBottom: "3%" }} />
        {children.itemBody}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SingleFAQ;
