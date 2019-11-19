import React, {Component} from "react";
import {Container, Row, Col, Image} from "react-bootstrap"
import "./Projects.css"
import imgReminder from "../../assets/imgs/reminder.gif"
import imgRabbit from "../../assets/imgs/findRabbit.png"

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <Container>
                    <h1 className="text-center">Projects</h1>
                    <Row>
                        <Col xs={4}>
                            <Image src={imgReminder} rounded />
                        </Col>
                        <Col xs={8}>
                            <h1>Reminder(Android App)</h1>
                            <p>Teamwork with Supriya</p>
                            <p>Tools: Android Studo, Java, Gitlab</p>
                            <p>Features and API:</p>
                            <p>1)Insert, update, and delete an event (Dao for database)</p>
                            <p>2)Search an event (SearchView)</p>
                            <p>3)Track completed/incompleted event. (SwipeView)</p>
                            <p>4)Add event to calendar (Calendar and 3rd library CalendarView)</p>
                            <p>5)Mark event locations and location-triggered notification (Google Maps and Places)</p>
                            <p>6)Immediate or scheduled notification (Notification)</p>
                            <p>7)UI Test (Espresso)</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={8}>
                            <h2>FindRabbit(IOS App)</h2>
                            <p>A memory game to help children aged 3-6 recognized shape and color and improve memory. Successfully shipped. Individual work.</p>
                            <p>Tools: Android Studo, Java, Gitlab</p>
                            <p>Features and API:</p>
                            <p>1)Insert, update, and delete an event (Dao for database)</p>
                            <p>2)Search an event (SearchView)</p>
                            <p>3)Track completed/incompleted event. (SwipeView)</p>
                            <p>4)Add event to calendar (Calendar and 3rd library CalendarView)</p>
                            <p>5)Mark event locations and location-triggered notification (Google Maps and Places)</p>
                            <p>6)Immediate or scheduled notification (Notification)</p>
                            <p>7)UI Test (Espresso)</p>
                        </Col>
                        <Col xs={4}>
                            <Image src={imgRabbit} rounded/>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col></Col>
                        <Col>
                            <h2>Interactive Web Story Game</h2>
                            <p>An interactive to save fish and protect ocean from rubbish pollution.</p>
                            <p>Tools: VSCode, Javascript, p5.js</p>
                            <p>Features and API:</p>
                            <p>1)2D Rectangle Collide</p>
                            <p>2)3 kinds of collision (p5.play.js)</p>
                            <p>3)Camera to detect nose position (p5.ml.js, PoseNet)</p>
                            <p>4)Audio volume to control rubbish position </p>
                            <p>5)Text to speech (p5.speech.js)</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h2>Online Toy Shop (http://www.boygirl88.com)  </h2>
                            <p>It sell toys, music instruments and computer science courses. Individual work</p>
                            <p>Tools:  Wordpress, Bootstrap, Woocommerce</p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h2>Web Resume </h2>
                            <p>My online interactive resume</p>
                            <p>Tools: react, react-bootstrap, Github Page, Google Analyts, Google Form</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div> 
        )
    }
}

export default Projects