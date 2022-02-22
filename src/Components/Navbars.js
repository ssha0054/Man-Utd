import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import logo from '../Images/Man-Utd-Logo.png';

const Navbars = () => {
    return ( 
        <Navbar bg="navbar" variant="dark" fixed="top">
            <Container>
            <img src={logo} wdith="50px" height="50px"/>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Brand href="/home">Manchester United</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <br></br>
            <Nav.Link href="/players">Meet The Team</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
     );
}
 
export default Navbars;