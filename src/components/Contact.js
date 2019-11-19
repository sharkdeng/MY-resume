import React, {Component} from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import "./Contact.css"


class Contact extends Component {

    render() {
        return (
            <section id="contact" style={{backgroundColor:'black'}}>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="single">
                                <h2 className="text-center">---- Subscribe to my newsletter ---- </h2>
                                <p className="text-center">Let's stay connected</p>  
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your email"></input>
                                    <span class="input-group-btn">
                                    <button class="btn btn-theme" type="submit">Subscribe</button>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Contact