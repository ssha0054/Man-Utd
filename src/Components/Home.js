import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./Home.css";

import ronaldo_celebrating from '../Images/Ronaldo-celebrating.jpeg';
import champs_league from '../Images/cl_white_bg.jpg';

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
                    <br></br>
                        <Carousel fade>
                            <Carousel.Item interval={6000}>
                                <img
                                className="d-block w-100 h-100"
                                src={ronaldo_celebrating}
                                alt=""
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                className="d-block w-100"
                                src="https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Manchester-United-v-Swansea-City---Premier-League-8cac3f4a942ae910bac6a8067fbeaec8.jpg"
                                alt=""
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                className="d-block w-100"
                                src="https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt328827c9aac85640/60dc7f13e1461d39eb8ec99a/656fedc92073b5c79fcb807686fbc40ac54f2fdb.png?auto=webp&format=jpg&quality=100"
                                alt=""
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                    <h2>Manchester United Football Club</h2>
                    Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England that competes in the English Premier League, which is the top flight of English football. Manchester United, also known as “the Red Devils” were founded as Newton Heath LYR Football Club in 1878, but changes its name to Manchester United in 1902. The club move to its current home stadium, Old Trafford, in 1910, which holds a capacity of 74,140. 
                    <br></br>
                    <br></br>
                    Manchester United is one of the most widely supported football clubs in the world with more than 75 million fans globally. Not only do Manchester United have a huge global presence, they are also the joint most successful English Football Club. Manchester united have won a record 20 league titles, 12 FA Cups, 5 League Cups also a record 21 FA Community Shields. They have also won the UEFA Champions League 3 times, along with the UEFA Europa League, UEFA Cup Winner’s Cup, the UEFA Super Cup, the Intercontinental Cup and the FIFA Club World Cup.
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
                        Manchester United have won a record 13 titles in the Premier League since the top flight of English football was given that new name in 1992. Sir Alex Ferguson was the man who masterminded the triumph in the inaugural Premier League season, in 1992/93. The Reds went on to win titles in 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011 and 2013 – more than all other clubs put together to date. Manchester United have won 20 top flight Leagues, which makes them the most successful team in the English Premier League. 
                    </Col>
                    <Col className="col-3">
                    <br></br>
                    <img src='https://freepikpsd.com/file/2019/10/premier-league-trophy-png-4-1-Transparent-Images.png' alt="" wdith="300px" height="300px"/>
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
                    <img src={champs_league} alt="" wdith="300px" height="300px"/>
                    
                    </Col>
                    <Col>
                    <br></br>
                    <br></br>
                        <h2>Champions League</h2>
                        The UEFA Champions League is the ultimate club competition in European football and Manchester United have won the trophy three times. Manchester United’s first Champions League trophy came with a 4-1 win over Benfica at Wembley Stadium in London in 1968. Manchester United famously beat Bayern Munich 2-1 at Camp Nou in Barcelona in 1999 to lift their second Champions League Trophy. Trailing by a goal the whole game, Manchester United scored 2 late goals during injury time to win their second Champions League trophy. Their most recent Champions League victory was at Luzhniki Stadium in Moscow in 2008, where Manchester United beat their English rivals Chelsea 6-5 on penalties.
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
                        Manchester United have won the Champion League on 3 occasions during 1968, 1999 and 2008. Manchester United also won the European Cup Winner’s Cup in 1991, which is a European football club competition contested annually by the winners of domestic cup competitions but has subsequently been turned into the UEFA Cup after 1999. Manchester United won the European Super Cup in 1991, beating Red Star Belgrade 1-0 at their home stadium, Old Trafford. The club also won its maiden UEFA Europa League in 2017, when they beat Ajax 2-0 at Friends Arena, Stockholm. 
                    </Col>
                    <Col className="col-3">
                    <br></br>
                    <br></br>
                    <img src='https://i.pinimg.com/originals/24/ab/6d/24ab6dd9471dfeed83c75fbda7eea8cb.png' alt="" wdith="300px" height="250px"/>
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
                    
                    <img src="https://m.media-amazon.com/images/I/61eRFljomAL._AC_SY679_.jpg" alt="" wdith="300px" height="300px"/>
                    
                    </Col>
                    <Col>
                    <br></br>
                    <br></br>
                        <h2>Domestic Trophies</h2>
                        Manchester United have won a total of 60 domestic trophies. They have a record total of 20 top flight trophies, in which they first won the first division in 1908. Manchester United won the inaugural season of the Premier League in 1993 and has since won it 13 times. The club has also won numerous cups during their existence. Manchester United has won the FA Cup 12 times, with their most recent win being in 2016, beating Crystal Palace 2-1 in the final. Manchester United have won the EFL Cup 5 times and have the FA Charity/Community Shield a record 21 times. The club’s first shield trophy came in 1908, with their most recent being in 2016. Manchester United have won two major trophies in the same season 7 times in their history. Manchester United are the only English team to win three major trophies in the same season, known as a ‘treble’. They achieved this during the 1998-99 season.
                    </Col>
                </Row>
            </Container>
            <br></br>
            </div>
        </div>
     );
}
 
export default Home;