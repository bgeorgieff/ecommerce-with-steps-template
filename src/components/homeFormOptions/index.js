import { Tab, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const HomeFormOptions = ({ options }) => {
  const [optionListFrom, setOptionListFrom] = useState([]);
  const [optionListTo, setOptionListTo] = useState([]);
  const [optionsFrom, setOptionsFrom] = useState([]);
  const [optionsTo, setOptionsTo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setOptionsFrom(options[0].from);
    setOptionsTo(options[0].to);
  }, [options]);

  return (
    <Tab.Content>
      <Tab.Pane eventKey="copyKey">
        <Form
          className="d-flex flex-lg-row flex-column flex-wrap justify-content-center home-form-menu"
          onSubmit={handleSubmit}
        >
          <Form.Select
            className="c-width me-lg-2 me-0 align-self-center mt-3"
            aria-label="Default select"
            onChange={(e) => setOptionListTo(e.target.value)}
            defaultValue="Choose City"
          >
            <option disabled>Choose City</option>
            {optionsFrom ? (
              optionsFrom.map((e) => <option key={e.id}>{e.option}</option>)
            ) : (
              <option>No Options</option>
            )}
          </Form.Select>
          <Form.Select
            className="c-width mt-3 align-self-center"
            aria-label="Default select"
            onChange={(e) => setOptionListFrom(e.target.value)}
            defaultValue="Choose District"
          >
            <option disabled>Choose District</option>
            {optionsTo ? (
              optionsTo.map((e) => <option key={e.id}>{e.option}</option>)
            ) : (
              <option>No Options</option>
            )}
          </Form.Select>
          <div className="d-flex ms-lg-4 mt-3 mt-xs-5 justify-content-center">
            <button type="submit" className="c-btn">
              Find dealer →
            </button>
          </div>
        </Form>
      </Tab.Pane>
      <Tab.Pane eventKey="lostKey">Lorem Ipsum</Tab.Pane>
    </Tab.Content>
  );
};

export default HomeFormOptions;
