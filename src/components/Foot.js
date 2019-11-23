import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Foot.css"

class Foot extends Component {
    render() {
        return (
            <div id="foot">
                <Container>
                    <Row>
                        <Col md="4">
                            <h5>Site</h5>
                            <ul>
                                <li><a href="http://www.boygirl88.com">Online Toy Shop</a></li>
                                <li><a href="http://www.jobyme88.com">Job Me</a></li>
                                <li><a href="http://www.9scoretrain.com">English Learning</a></li>
                            </ul>
                        </Col>
                        <Col md="4">
                            <h5>Community</h5>
                            <ul>
                                <li><a href="">Student Success Stories</a></li>
                                <li><a href="">Universities</a></li>
                                <li><a href="">Tutors</a></li>
                            </ul>
                        </Col>
                        <Col md="4">
                            <h5>Contact</h5>
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Advertising</a></li>
                                <li><a href="">Sponsorship</a></li>
                                <li><a href="">Donate</a></li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
                <p className="text-center" style={{color:'#fff'}}>Copyright 2019 © <a href="http://www.boygirl88.com">SharkDeng</a></p>
            </div> 
        )
    }
}

export default Foot