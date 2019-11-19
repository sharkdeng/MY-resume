import React, {Component} from "react"
import "./Sidebar.css"


class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#educations">Educations</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
                <a href="#shop">Tutoring</a>
            </div>
        )
    }
}

export default Sidebar