import React, {Component} from "react"
import {Card} from "react-bootstrap"
import "./CertCard.css"

class CertCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <div class="overlay"></div>
                <Card.Img variant="top" src={this.props.imgsrc} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.content}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}


export default CertCard;




