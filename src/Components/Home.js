import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";

import ronaldo_celebrating from '../Images/Ronaldo-celebrating.jpeg';
// import premier_league from '../Images/PL-Trophy.jpeg';
import premier_league from '../Images/pl_t.jpg';

const Home = () => {
    return ( 
        <div className="home">
            <h2>Our Club</h2>
            <div className="our-club">
            <Container>
                <Row>
                    <Col>
                        <br></br>
                        <img src={ronaldo_celebrating} wdith="300px" height="300px"/>
                    
                    </Col>
                    <Col>
                    <h2>Suiiiiii</h2>
                        Add text here
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            <h2>Our History</h2>
            <div className="history">
            <Container>
                <Row>
                    <Col className="col-2">
                    <br></br>
                    <br></br>
                        <h2>Premier League</h2>
                        Manchester United have won a record 13 titles in the Premier League since the top flight of English football was given that new name in 1992.
Sir Alex Ferguson was the man who masterminded the triumph in the inaugural Premier League season, in 1992/93. The Reds went on to win titles in 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011 and 2013 – more than all other clubs put together to date
                    </Col>
                    <Col className="col-3">
                    <br></br>
                    <br></br>
                    <img src={premier_league} wdith="300px" height="300px"/>
                    </Col>
                </Row>
            </Container>
            <br></br>
            </div>

            <div className="our-club">
            <Container>
                <Row>
                    <Col>
                    <br></br>
                    <br></br>
                    <img src={premier_league} wdith="300px" height="300px"/>
                    
                    </Col>
                    <Col>
                    <br></br>
                    <br></br>
                        <h2>Champions League</h2>
                        add text
                    </Col>
                </Row>
            </Container>
            <br></br>
            </div>
            
        </div>
     );
}
 
export default Home;