import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import footerImage from '../../../images/jaranaBackLittle.png'
import logoTitleSandwich from '../../../images/icons/sandwich.png'

const Sandwich = () => {
    
    return (

        <div className = "item-container">
            <h2 className = "item-title">Sandwiches</h2>
            <img className = "logo-title-item" src = {logoTitleSandwich} alt = "logo-titulo"/>
            <Container >
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Mixto</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">3.80€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Mixto con huevo</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">4.80€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Vegetal</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">5.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Jarana <small>(2 pisos con jamon york, queso, bacon, lechuga, tomate, mayonesa y huevo frito). *Incluye patatas fritas.</small></p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">8.00€</p>
                    </Col>
                </Row>
                <div className = "item-footer-container">
                    <p className = "item-footer">*Suplemento de terraza: 10%</p>
                    <p className = "item-footer">*Todos los precios llevan el I.V.A. incluido</p>
                </div>
                <img className = "item-footer-image" src = {footerImage} alt = "logo"/>
            </Container>
        </div>
    );
}
 
export default Sandwich;