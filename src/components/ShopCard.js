import React, {Component} from "react";
import {Card, Button, Image} from "react-bootstrap";

class Popup extends Component {
    render() {
        return (
            <iframe className ="popup"src="https://docs.google.com/forms/d/e/1FAIpQLSdv4bnMmoZ26pAjNGmp-ZIuFMGxH4l0Nv7ne-nfR2apjqAroA/viewform?embedded=true" width="640" height="1457" frameborder="0" marginheight="0" marginwidth="0">正在加载…</iframe>
        )
    }
}


class ShopCard extends Component {
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

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
                <Button onClick={this.togglePopup.bind(this)}>Order Now</Button>
                {this.state.showPopup ? 
                    <Popup /> : null
                }
            </Card>
        )
    }
}


export default ShopCard