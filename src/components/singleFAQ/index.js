import { Accordion } from "react-bootstrap"

const SingleFAQ = ({header, body, event}) => {
  return (
    <Accordion.Item className='mt-3 faq-radius' eventKey={event}>
      <Accordion.Header className='main-blue'>{header}</Accordion.Header>
      <Accordion.Body>
      <hr style={{marginTop: '-1%', marginBottom: '3%'}} />
        {body}
      </Accordion.Body>
  </Accordion.Item>
  )
}

export default SingleFAQ