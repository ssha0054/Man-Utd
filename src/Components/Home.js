import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./Home.css";

import ronaldo_celebrating from '../Images/Ronaldo-celebrating.jpeg';
import pl from '../Images/PL-Trophy.jpeg';
// import pl from '../Images/pl.png';
import premier_league from '../Images/PL-Trophy.jpeg';
import champs_league from '../Images/cl_white_bg.jpg';

import {
    FaGithub
} from "react-icons/fa";

const Home = () => {
    return ( 
        <div className="home">
            <br></br> 
            <br></br> 
            <br></br>
            <br></br>
            <div className="our-club">
            <Container>
                <Row>
                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 h-100"
                                src={ronaldo_celebrating}
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Manchester-United-v-Swansea-City---Premier-League-8cac3f4a942ae910bac6a8067fbeaec8.jpg"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt328827c9aac85640/60dc7f13e1461d39eb8ec99a/656fedc92073b5c79fcb807686fbc40ac54f2fdb.png?auto=webp&format=jpg&quality=100"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                    <h2>Manchester United Football Club</h2>
                    Manchester United have won a record 13 titles in the Premier League since the top flight of English football was given that new name in 1992.
Sir Alex Ferguson was the man who masterminded the triumph in the inaugural Premier League season, in 1992/93. The Reds went on to win titles in 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011 and 2013 – more than all other clubs put together to date
Manchester United have won a record 13 titles in the Premier League since the top flight of English football was given that new name in 1992.
Sir Alex Ferguson was the man who masterminded the triumph in the inaugural Premier League season, in 1992/93. The Reds went on to win titles in 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011 and 2013 – more than all other clubs put together to date
                   
                    </Col>
                </Row>
            </Container>
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
                    <img src='https://freepikpsd.com/file/2019/10/premier-league-trophy-png-4-1-Transparent-Images.png' wdith="300px" height="300px"/>
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
                    <img src={champs_league} wdith="300px" height="300px"/>
                    
                    </Col>
                    <Col>
                    <br></br>
                    <br></br>
                        <h2>Champions League</h2>
                        Manchester United have won a record 13 titles in the Premier League since the top flight of English football was given that new name in 1992.
Sir Alex Ferguson was the man who masterminded the triumph in the inaugural Premier League season, in 1992/93. The Reds went on to win titles in 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011 and 2013 – more than all other clubs put together to date
                    </Col>
                </Row>
            </Container>
            <br></br>
            </div>
            
            <div className="history">
            <Container>
                <Row>
                    <Col className="col-2">
                    <br></br>
                    <br></br>
                        <h2>European Trophies</h2>
                        Manchester United have won a record 13 titles in the Premier League since the top flight of English football was given that new name in 1992.
Sir Alex Ferguson was the man who masterminded the triumph in the inaugural Premier League season, in 1992/93. The Reds went on to win titles in 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011 and 2013 – more than all other clubs put together to date
                    </Col>
                    <Col className="col-3">
                    <br></br>
                    <br></br>
                    <img src='https://i.pinimg.com/originals/24/ab/6d/24ab6dd9471dfeed83c75fbda7eea8cb.png' wdith="300px" height="300px"/>
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
                        <h2>Domestic Trophies</h2>
                        Manchester United have won a record 13 titles in the Premier League since the top flight of English football was given that new name in 1992.
Sir Alex Ferguson was the man who masterminded the triumph in the inaugural Premier League season, in 1992/93. The Reds went on to win titles in 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011 and 2013 – more than all other clubs put together to date
                    </Col>
                </Row>
            </Container>
            <br></br>
            </div>
        </div>
     );
}
 
export default Home;