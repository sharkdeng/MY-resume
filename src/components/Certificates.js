import React, {Component} from "react";
import {Container, Card, Row, Col} from "react-bootstrap";
import "./Certificates.css"
import CertCard from "./CertCard"
import cert1 from "../../assets/imgs/aws.png"
import cert2 from "../../assets/imgs/aws.png"
import cert3 from "../../assets/imgs/aws.png"

class Certificates extends Component {
    render() {
        return (
            <div id="certificates">
                <Container>
                    <h1 className="text-center">Certificates</h1>
                    <Row>
                        <Col>
                            <CertCard imgsrc={cert1} title="AWS Certificate" content="Cover AWS Cloud Services" />
                        </Col>
                        <Col>
                            <CertCard imgsrc={cert2} title="GMAT" content="740(97%globally)" />   
                        </Col>
                        <Col>
                            <CertCard imgsrc={cert3} title="IELTS" content="7, reading 9" />
                        </Col>
                    </Row>     
                </Container>
            </div> 
        )
    }
}

export default Certificates