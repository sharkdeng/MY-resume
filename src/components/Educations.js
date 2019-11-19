import React, {Component} from "react";
import {Container, Col, Row}  from "react-bootstrap";
import "./Educations.css"

class Educations extends Component {
    render() {
        return (
            <div id="educations" style={{backgrondColor:'#63849'}}>
                <Container>
                    <h1 className="text-center">Education</h1>
                    <Row>
                        <Col>
                        <p>the Australian National Univeristy</p>
                        <p>2020/02 - 2021/02</p>
                        </Col>
                        <Col>
                        <p>Master of Computing</p>
                        <p>Canberra, Australia</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>the Australian National Univeristy</p>
                        <p>2019/02 - 2019/12</p>
                        </Col>
                        <Col>
                        <p>Graduate Diploma of Computing</p>
                        <p>Courses: COMP6710 Java, Math6005 Discrete Math, COMP6340 Network, COMP6720 P5.js, COMP 6730 Python, COMP 6442 Android, COMP6240 Relational Database</p>
                        <p>Canberra, Australia</p>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <p>East China University of Political Science and Law</p>
                        <p>2010/09 - 2014/07</p>
                        </Col>
                        <Col>
                        <p>Bachelor of Law</p>
                        <p>Shanghai, China</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Educations