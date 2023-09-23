import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Work = () => {
  return (
    <section id='work'>
      <Container>
        <div>
          <h1 className='pt-2 fw-bold fs-1 about'>Our Work</h1>
          <p className='fs-5 about2'>Lorem ipsum dolor sit amet.</p>
        </div>
        <Row>
          <Col sm={4}>bsgggggggg</Col>
          <Col sm={4}>sbggggggggg </Col>
          <Col sm={4}>sbggggggggg </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work