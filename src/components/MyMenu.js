import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';

import Button from "react-bootstrap/Button";

class MyMenu extends Component {
    render() {
        return(
            <Navbar id="mymenu" bg="primary" variant="dark">
                <Navbar.Brand href="#home">Limin Deng</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#careers">Careers</Nav.Link>
                    <Nav.Link href="#educations">Educations</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#shop">Shop</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>   
        )
    }
}

export default MyMenu;