import React, {Component} from "react";
import {Container} from "react-bootstrap";
import "./Info.css"

class Info extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>This resume is built on... </h1>
                    <p>Step 1: Single Page</p>
                    <p>Step 2: react to create componentes</p>
                    <p>Step 3: react-bootstrap to include all UI</p>
                    <p>Step 4: css-loader to customize</p>
                    <p>Time: 1 day</p>
                    <p>Host: Baidu Cloud</p>
                    <p>Picture: https://www.pexels.com</p>
                    <p>Picture: http://unsplash.com</p>
                    <p>Snippets: startboostrap</p>
                    <p>Snippets: bootsnipp.com</p>
                    <p>mdbootstrap</p>
                    <p>CSS3: Transition, Gradient, Overflow, Overlay</p>
                    <p>react-bootstrap: Card, Button, Form, Nav</p>
                    <a id="top" href="#">Top</a>
                </Container>
            </div> 
        )
    }
}

export default Info