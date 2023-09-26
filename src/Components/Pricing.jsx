import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Pricing = () => {
  return (
    <section id='pricing' className='pricing'>
        <Container>
            <div>
                <h1 className='about fw-bold pt-5'>Pricing</h1>
                <p className='about2'>Lorem ipsum dolor sit amet.</p>
            </div>
            <Row className='pt-3'>
                <Col>
                    <div className='bg-dark text-light'>
                        <h3 className='text-center pt-2'>pricing</h3>
                        <p className='text-center'>$240</p>
                        <ListGroup className='text-center'>
                            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </div>               
                </Col>
                <Col>
                    <div className='bg-danger'>
                        <h3 className='text-center pt-2'>pricing</h3>
                        <p className='text-center'>$240</p>
                        <ListGroup className='text-center'>
                            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </div>               
                </Col>
                <Col>
                    <div className='bg-dark text-white'>
                        <h3 className='text-center pt-2'>pricing</h3>
                        <p className='text-center'>$240</p>
                        <ListGroup className='text-center'>
                            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </div>               
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Pricing