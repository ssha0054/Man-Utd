import { Container, Navbar, Nav } from "react-bootstrap";

const Navbars = () => {
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Manchester United</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <br></br>
            <Nav.Link href="/features">Meet The Team</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
     );
}
 
export default Navbars;