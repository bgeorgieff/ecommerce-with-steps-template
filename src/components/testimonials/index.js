import { Row, Col, Container } from 'react-bootstrap'
import Title from "../title"
import SingleTestimonialRow from "../singleTestimonial"

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris.',
    author: 'John Doe'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris.',
    author: 'John Doe'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris.',
    author: 'John Doe'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris.',
    author: 'John Doe'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris.',
    author: 'John Doe'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris.',
    author: 'John Doe'
  },
]

const Testimonials = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col lg={12} sm={12}>
          <Title text={'Testimonials'} style={{textAlign: 'center'}} />
        </Col>
        { testimonials ? testimonials.map((e, i) =>
          <SingleTestimonialRow key={i} testimonialTxt={e.text} author={e.author} />) : ''
        }
      </Row>
    </Container>
  )
}

export default Testimonials