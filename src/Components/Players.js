import { Card, Container, Col, Row } from "react-bootstrap";
import cr7 from '../Images/Players/CR7.png';
import "./Players.css";

const Players = () => {
    return (  
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Meet The Team</h1>
            <Container>
                <h3 className="team-grid__heading">Goalkeepers</h3>
                <Row>
                    <Col>
                        <div>
                            <img src="https://resources.premierleague.com/premierleague/photos/players/250x250/p51940.png" style={{width: '100px'}, {height: '280px'} } />
                            <div>
                                <h4>David De Gea</h4>
                                <h5>1</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="https://resources.premierleague.com/premierleague/photos/players/250x250/p172649.png" style={{width: '100px'}, {height: '280px'} } />
                            <div>
                                <h4>Dean Henderson</h4>
                                <h5>26</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="https://resources.premierleague.com/premierleague/photos/players/250x250/p21205.png" style={{width: '100px'}, {height: '280px'} } />
                            <div>
                                <h4>Tom Heaton</h4>
                                <h5>22</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="https://resources.premierleague.com/premierleague/photos/players/250x250/p6744.png" style={{width: '100px'}, {height: '280px'} } />
                            <div>
                                <h4>Lee Grant</h4>
                                <h5>13</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h3 className="team-grid__heading">Midfielders</h3>
                <Row>
                    <Col>
                        <Card className="text-center" className="player-card">
                        
                            <Card.Body>
                                <Card.Img src={cr7}/>
                                <Card.ImgOverlay></Card.ImgOverlay>
                            </Card.Body>
                        <Card.Footer className="text-muted" className="player-card-footer">Cristiano Ronaldo - #7</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <div class="imageContainer">Some Text</div>
                    </Col>
                    <Col>
                        <div>
                            <img src="https://assets.manutd.com/AssetPicker/images/0/0/16/59/1063877/De_Gea_profile_pic_trial_edit1643296725957.jpg" className="figure-img img-fluid z-depth-1"
                                style={{width: '400px'}, {height: '300px'} } />
                            <div>
                                <h4>Cristiano Ronaldo</h4>
                                <h5>Ronaldo</h5>
                            </div>
                        </div>
                        
                        
                       
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white">
                        <Card.Img src="https://assets.manutd.com/AssetPicker/images/0/0/16/59/1063877/De_Gea_profile_pic_trial_edit1643296725957.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Cristiano Ronaldo
                            </Card.Text>
                            <Card.Text>7</Card.Text>
                            <Card.Footer className="text-muted">Cristiano Ronaldo - #7</Card.Footer>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>


            
        </div>

        
    );
}
 
export default Players;