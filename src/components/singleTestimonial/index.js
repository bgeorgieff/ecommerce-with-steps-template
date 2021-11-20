import { Col } from "react-bootstrap"

const SingleTestimonialRow = ({testimonialTxt, author}) => {
  return (
    <Col lg={4} sm={12}>
      <div className='rounded mx-4 my-5 px-4 pt-5 pb-4 pattern-2' style={{backgroundColor: '#2d69b3'}}>
        <p>{testimonialTxt}</p>
        <p>{author}</p>
      </div>
    </Col>
  )
}

export default SingleTestimonialRow