import { Container, Row, Col, Image, Accordion, ListGroup } from 'react-bootstrap';
import pylot from '../assets/Medias/pylot.jpg'

const About = () => {
  return (
    <section id='about' className='abt-section'>
        <Container>
            <div>
              <h1 className='fw-bold fs-1 pt-2 about'>About-Us</h1>
              <p className='fs-5 about2'>Lorem ipsum dolor, sit amet elit.</p>
            </div>
            <Row>
              <Col sm={6}><img className='pylot rounded-circle' src={pylot} alt="portrait" /></Col>
              <Col sm={6}>  
                  <Accordion className='accordion'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Explore my Skills </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Read pylot's doc.. </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <ListGroup className='listgroup'>
                    <ListGroup.Item className='bg-dark text-light'>Name</ListGroup.Item>
                    <ListGroup.Item>Mezue Obiora</ListGroup.Item>
                    <ListGroup.Item className='bg-dark text-light'>E-mail</ListGroup.Item>
                    <ListGroup.Item>Worldpylot@yahoo.com</ListGroup.Item>
                  </ListGroup>
              </Col>
            </Row>
        </Container>

       
    </section>
  )
}

export default About