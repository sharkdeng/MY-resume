import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap"


class Skills extends Component {
    render() {
        return (
            <Container id="skills">
                <h1 className="text-center">Skills</h1>
                <hr />
                <h3>Languages</h3>
                <Row>
                    <Col>English</Col>
                    <Col>Mandarin</Col>
                </Row>
                <hr />
                <h3>Computer Languages</h3>
                <Row>
                    <Col md="3">Python</Col>
                    <Col md="3">Java</Col>
                    <Col md="3">Swift</Col>
                    <Col md="3">PHP</Col>
                </Row>
                <Row>
                    <Col md="3">HTML(5)</Col>
                    <Col md="3">CSS(3)</Col>
                    <Col md="3">Javascript</Col>
                    <Col md="3"></Col>
                </Row>
                <hr />
                <h3>IDE</h3>
                <Row>
                    <Col>Android Studio</Col>
                    <Col>VSCode</Col>
                    <Col>XCode</Col>
                    <Col>IntelliJ</Col>
                    <Col>Vim</Col>
                </Row>
                <hr />
                <h3>Website</h3>
                <Row>
                    <Col>Website</Col>
                    <Col>
                    react, react-router, react-bootstrap, webpack, babel
                    </Col>
                </Row>
                <Row>
                    <Col>Other</Col>
                    <Col>
                    Github, Gitlab
                    </Col>
                </Row>


            </Container>
        )
    }
}

export default Skills