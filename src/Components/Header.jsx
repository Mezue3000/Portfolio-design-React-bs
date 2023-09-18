import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFillPieChartFill } from "react-icons/bs";


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-info py-3">
        <Container>
            <div>
            <BsFillPieChartFill className='pb-1 fs-5'/>
            <Navbar.Brand href="#home" className='fw-bolder fs-5'>Pylot's Folio</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="heady fw-bolder fs-5">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#service">Services</Nav.Link>
                    <Nav.Link href="#work">Works</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default Header