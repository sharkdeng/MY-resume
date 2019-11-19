import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Careers.css"


class Experiences extends Component {
    render() {
        return (
            <div id="careers">
                <Container>
                    <h1 className="text-center">Careers</h1>
                    <Row>
                        <Col>
                        <p>UniLodge Australia</p>
                        <p>2020/02 - 2021/02</p>
                        </Col>
                        <Col>
                        <p>Senior Resident</p>
                        <p>Relevant skills: Teamwork, English Communication, Event hosting</p>
                        <a href="#">
                        <span className="glyphicon glyphicon-asterisk">Canberra, Australia</span>
                        </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>TuteHub</p>
                        <p>AI-powered Online Education</p>
                        <p>2019/09 - present</p>
                        </Col>
                        <Col>
                        <p>Computer Science Tutor</p>
                        <p>Relevant skills: English Communication, Python, Zoom</p>
                        <p>Canberra, Australia</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>DueApe</p>
                        <p>Listed in Nasdaq</p>
                        <p>2019/07 - present</p>
                        </Col>
                        <Col>
                        <p>Computer Science Tutor</p>
                        <p>Relevant skills: Java, Zoom</p>
                        <p>Canberra, Australia</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>Shanghai Shanju Construction & Design Ltd., Co.</p>
                        <p>Provide Innovation Classroom Design</p>
                        <p>2014/07 - 2018/03</p>
                        </Col>
                        <Col>
                        <p>Founder</p>
                        <p>Relevant skills: 3dMax, CAD, PS, 2)Kis Accounting Software</p>
                        <p>Shanghai, China</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>Shanghai Fengxian District People’s Procuratorate</p>
                        <p>2010/11 - 2010/12</p>
                        </Col>
                        <Col>
                        <p>Intern</p>
                        <p>Relevant skills: Office</p>
                        <p>Shanghai, China</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Experiences