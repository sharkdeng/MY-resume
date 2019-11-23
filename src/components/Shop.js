import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import product1 from "../../assets/imgs/photo1.jpg"
import product2 from "../../assets/imgs/photo2.jpg"
import product3 from "../../assets/imgs/photo3.jpg"
import "./Shop.css"
import ShopCard from "./ShopCard";



class Shop extends Component {

    render() {
        return (
            <Container id="shop" className="purple-gradient">
                <h1 className="text-center">Tutoring Services</h1>
                <Row>
                    <Col>
                        <ShopCard imgsrc={product1}
                            title="Java Tutoring" 
                            content="$50 / h, delivered online in English"/>
                    </Col>
                    <Col>
                        <ShopCard imgsrc={product2}
                            title="Python Tutoring" 
                            content="$50 / h, delivered online in English"/>
                    </Col>
                    <Col>
                        <ShopCard imgsrc={product3}
                            title="English Tutoring" 
                            content="$50 / h, delivered online in English"/>
                    </Col>
                </Row>     
            </Container>
        )
    }
}

export default Shop