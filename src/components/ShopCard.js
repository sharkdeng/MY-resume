import React, {Component} from "react";
import {Card, Button, Image} from "react-bootstrap";

class ShopCard extends Component {
    render() {
        return (
            <Card className="text-center shadow">
                <div className="overflow">
                    <Card.Img variant="top" src={this.props.imgsrc}/>
                </div>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.content}</Card.Text>
                </Card.Body>
                <Button>Order Now</Button>
            </Card>
        )
    }
}


export default ShopCard