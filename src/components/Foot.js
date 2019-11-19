import React, {Component} from "react";
import {Container} from "react-bootstrap";
import "./Foot.css"

class Foot extends Component {
    render() {
        return (
            <div id="foot">
                <p className="text-center" style={{color:'#fff'}}>Copyright © SharkDeng 2019</p>
            </div> 
        )
    }
}

export default Foot